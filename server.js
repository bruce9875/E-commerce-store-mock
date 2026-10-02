const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { randomUUID } = require('node:crypto');

const root = __dirname;
const port = Number(process.env.PORT || 3000);
const dataDir = path.join(root, 'data');
const usersFile = path.join(dataDir, 'users.json');
const sessions = new Map();

const types = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml'
};

function ensureStorage() {
  fs.mkdirSync(dataDir, { recursive: true });
  if (!fs.existsSync(usersFile)) {
    fs.writeFileSync(usersFile, '[]', 'utf8');
  }
}

function parseCookies(cookieHeader = '') {
  return cookieHeader.split(';').reduce((cookies, part) => {
    const [name, ...rest] = part.trim().split('=');
    if (name) cookies[name] = decodeURIComponent(rest.join('='));
    return cookies;
  }, {});
}

function readUsers() {
  try {
    const raw = fs.readFileSync(usersFile, 'utf8');
    const users = JSON.parse(raw);
    return Array.isArray(users) ? users : [];
  } catch {
    return [];
  }
}

function writeUsers(users) {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2), 'utf8');
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store'
  });
  response.end(JSON.stringify(payload));
}

function sanitizeUser(user) {
  const { password, ...safeUser } = user;
  return safeUser;
}

function authenticateFromRequest(request) {
  const cookies = parseCookies(request.headers.cookie || '');
  const sessionId = cookies.forme_session;
  if (!sessionId) return null;
  const session = sessions.get(sessionId);
  return session ? session.user : null;
}

function createSession(response, user) {
  const sessionId = randomUUID();
  sessions.set(sessionId, { user: sanitizeUser(user) });
  response.setHeader('Set-Cookie', `forme_session=${sessionId}; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400`);
  return sessionId;
}

function clearSession(response, request) {
  const cookies = parseCookies(request.headers.cookie || '');
  const sessionId = cookies.forme_session;
  if (sessionId) sessions.delete(sessionId);
  response.setHeader('Set-Cookie', 'forme_session=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0');
}

async function readJsonBody(request) {
  return new Promise((resolve, reject) => {
    let body = '';

    request.on('data', (chunk) => {
      body += chunk;
    });

    request.on('end', () => {
      if (!body) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(body));
      } catch {
        reject(new Error('Invalid JSON body'));
      }
    });

    request.on('error', reject);
  });
}

function handleApi(request, response) {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const pathname = url.pathname;

  if (pathname === '/api/health') {
    sendJson(response, 200, { ok: true, service: 'forme-api' });
    return;
  }

  if (pathname === '/api/auth/me' && request.method === 'GET') {
    const user = authenticateFromRequest(request);
    sendJson(response, 200, { user: user || null });
    return;
  }

  if (pathname === '/api/auth/signout' && request.method === 'POST') {
    clearSession(response, request);
    sendJson(response, 200, { ok: true, user: null });
    return;
  }

  if (pathname === '/api/auth/signin' && request.method === 'POST') {
    readJsonBody(request)
      .then(({ email, password }) => {
        const normalizedEmail = String(email || '').trim().toLowerCase();
        const normalizedPassword = String(password || '').trim();

        if (!normalizedEmail || !normalizedPassword) {
          sendJson(response, 400, { message: 'Please enter both your email and password.' });
          return;
        }

        const users = readUsers();
        const user = users.find((entry) => entry.email.toLowerCase() === normalizedEmail && entry.password === normalizedPassword);

        if (!user) {
          sendJson(response, 401, { message: 'No matching account was found. Please create an account or check your details.' });
          return;
        }

        createSession(response, user);
        sendJson(response, 200, { user: sanitizeUser(user) });
      })
      .catch((error) => {
        sendJson(response, 400, { message: error.message || 'Unable to sign in.' });
      });
    return;
  }

  if (pathname === '/api/auth/signup' && request.method === 'POST') {
    readJsonBody(request)
      .then(({ name, email, password }) => {
        const normalizedName = String(name || '').trim();
        const normalizedEmail = String(email || '').trim().toLowerCase();
        const normalizedPassword = String(password || '').trim();

        if (!normalizedName || !normalizedEmail || !normalizedPassword) {
          sendJson(response, 400, { message: 'Please complete every field.' });
          return;
        }

        if (normalizedPassword.length < 8) {
          sendJson(response, 400, { message: 'Choose a password with at least 8 characters.' });
          return;
        }

        const users = readUsers();
        if (users.some((entry) => entry.email.toLowerCase() === normalizedEmail)) {
          sendJson(response, 409, { message: 'An account with that email already exists. Please sign in instead.' });
          return;
        }

        const newUser = { id: randomUUID(), name: normalizedName, email: normalizedEmail, password: normalizedPassword };
        users.push(newUser);
        writeUsers(users);
        createSession(response, newUser);
        sendJson(response, 201, { user: sanitizeUser(newUser) });
      })
      .catch((error) => {
        sendJson(response, 400, { message: error.message || 'Unable to create account.' });
      });
    return;
  }

  sendJson(response, 404, { message: 'Not found' });
}

function serveStatic(request, response) {
  const pathname = decodeURIComponent(new URL(request.url, `http://${request.headers.host}`).pathname);
  const requestedPath = path.resolve(root, `.${pathname}`);
  const relativePath = path.relative(root, requestedPath);

  if (relativePath.startsWith('..') || path.isAbsolute(relativePath)) {
    response.writeHead(403).end('Forbidden');
    return;
  }

  const extension = path.extname(requestedPath);
  const filePath = types[extension] ? requestedPath : path.join(root, 'index.html');

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(404).end('Not found');
      return;
    }

    response.writeHead(200, {
      'Content-Type': types[path.extname(filePath)] || 'application/octet-stream'
    });
    response.end(content);
  });
}

ensureStorage();

http.createServer((request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);

  if (url.pathname.startsWith('/api/')) {
    handleApi(request, response);
    return;
  }

  serveStatic(request, response);
}).listen(port, () => {
  console.log(`FORME storefront running at http://localhost:${port}`);
});
