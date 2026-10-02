const { readBody, readUsers, writeUsers, sanitizeUser, setSessionCookie, sendJson, randomUUID } = require('./_lib/auth');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    sendJson(res, 405, { message: 'Method not allowed' });
    return;
  }

  try {
    const body = await readBody(req);
    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim().toLowerCase();
    const password = String(body.password || '').trim();

    if (!name || !email || !password) {
      sendJson(res, 400, { message: 'Please complete every field.' });
      return;
    }

    if (password.length < 8) {
      sendJson(res, 400, { message: 'Choose a password with at least 8 characters.' });
      return;
    }

    const users = readUsers();
    if (users.some((user) => user.email.toLowerCase() === email)) {
      sendJson(res, 409, { message: 'An account with that email already exists. Please sign in instead.' });
      return;
    }

    const newUser = {
      id: randomUUID(),
      name,
      email,
      password
    };

    users.push(newUser);
    writeUsers(users);
    setSessionCookie(res, newUser);
    sendJson(res, 201, { user: sanitizeUser(newUser) });
  } catch (error) {
    sendJson(res, 400, { message: error.message || 'Unable to create account.' });
  }
};
