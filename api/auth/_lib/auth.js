const crypto = require('node:crypto');
const { randomUUID } = require('node:crypto');

const COOKIE_NAME = 'forme_session';
const SESSION_TTL_MS = 86400000;
const demoUsers = [
  { id: 'demo-user-1', name: 'Alice Demo', email: 'alice@example.com', password: 'password123' }
];

function readUsers() {
  return demoUsers.map((user) => ({ ...user }));
}

function writeUsers(users) {
  demoUsers.splice(0, demoUsers.length, ...users.map((user) => ({ ...user })));
}

function sanitizeUser(user) {
  if (!user || typeof user !== 'object') return null;
  const { password, ...safeUser } = user;
  return safeUser;
}

function parseCookies(cookieHeader = '') {
  return (cookieHeader || '').split(';').reduce((cookies, part) => {
    const [name, ...rest] = part.trim().split('=');
    if (name) {
      cookies[name] = decodeURIComponent(rest.join('='));
    }
    return cookies;
  }, {});
}

async function readBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }
  const raw = Buffer.concat(chunks).toString('utf8');
  if (!raw) return {};

  try {
    return JSON.parse(raw);
  } catch {
    throw new Error('Invalid JSON body');
  }
}

function getSessionSecret() {
  return process.env.AUTH_SECRET || 'forme-demo-secret';
}

function createSessionToken(user) {
  const payload = Buffer.from(JSON.stringify({
    user: sanitizeUser(user),
    exp: Date.now() + SESSION_TTL_MS
  })).toString('base64url');

  const signature = crypto
    .createHmac('sha256', getSessionSecret())
    .update(payload)
    .digest('base64url');

  return `${payload}.${signature}`;
}

function verifySessionToken(token) {
  if (!token) return null;

  const parts = String(token).split('.');
  const payloadPart = parts[0];
  const signaturePart = parts[1];

  if (!payloadPart || !signaturePart) return null;

  try {
    const expected = crypto
      .createHmac('sha256', getSessionSecret())
      .update(payloadPart)
      .digest('base64url');

    const actual = Buffer.from(signaturePart, 'utf8');
    const expectedBuffer = Buffer.from(expected, 'utf8');

    if (actual.length !== expectedBuffer.length) return null;
    if (!crypto.timingSafeEqual(actual, expectedBuffer)) return null;

    const payload = JSON.parse(Buffer.from(payloadPart, 'base64url').toString('utf8'));
    if (!payload || typeof payload !== 'object') return null;
    if (Number(payload.exp) < Date.now()) return null;
    return payload.user || null;
  } catch {
    return null;
  }
}

function getSessionUser(req) {
  const cookies = parseCookies(req.headers.cookie || '');
  return verifySessionToken(cookies[COOKIE_NAME]);
}

function setSessionCookie(res, user) {
  const token = createSessionToken(user);
  res.setHeader('Set-Cookie', `${COOKIE_NAME}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400`);
}

function clearSessionCookie(res) {
  res.setHeader('Set-Cookie', `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`);
}

function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(payload));
}

module.exports = {
  COOKIE_NAME,
  readBody,
  readUsers,
  writeUsers,
  sanitizeUser,
  verifySessionToken,
  getSessionUser,
  setSessionCookie,
  clearSessionCookie,
  sendJson,
  randomUUID
};
