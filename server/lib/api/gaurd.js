const BOT_KEY = process.env.BOT_KEY;
const BOT_USERNAME = process.env.BOT_USERNAME;
const BOT_PASSWORD = process.env.BOT_PASSWORD;

function authenticate(username, password) {
  return (username === BOT_USERNAME) && (password === BOT_PASSWORD) ? BOT_KEY : null;
}

function checkKey(key) {
  return key === BOT_KEY;
}

module.exports = { authenticate, checkKey };
