const { getSessionUser, sendJson } = require('./_lib/auth');

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    sendJson(res, 405, { message: 'Method not allowed' });
    return;
  }

  const user = getSessionUser(req);
  sendJson(res, 200, { user: user || null });
};
