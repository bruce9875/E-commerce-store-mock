const { clearSessionCookie, sendJson } = require('./_lib/auth');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    sendJson(res, 405, { message: 'Method not allowed' });
    return;
  }

  clearSessionCookie(res);
  sendJson(res, 200, { ok: true, user: null });
};
