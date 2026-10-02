const { readBody, readUsers, getSessionUser, setSessionCookie, sanitizeUser, sendJson } = require('./_lib/auth');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    sendJson(res, 405, { message: 'Method not allowed' });
    return;
  }

  try {
    const body = await readBody(req);
    const email = String(body.email || '').trim().toLowerCase();
    const password = String(body.password || '').trim();

    if (!email || !password) {
      sendJson(res, 400, { message: 'Please enter both your email and password.' });
      return;
    }

    const users = readUsers();
    const user = users.find((entry) => entry.email.toLowerCase() === email && entry.password === password);

    if (!user) {
      sendJson(res, 401, { message: 'No matching account was found. Please create an account or check your details.' });
      return;
    }

    const activeUser = getSessionUser(req) || sanitizeUser(user);
    setSessionCookie(res, activeUser || user);
    sendJson(res, 200, { user: sanitizeUser(user) });
  } catch (error) {
    sendJson(res, 400, { message: error.message || 'Unable to sign in.' });
  }
};
