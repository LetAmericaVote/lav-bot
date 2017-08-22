const guard = require('./gaurd');

module.exports = (req, res, next) => {
  const key = req.headers['x-lav-api-key'];
  if (! key || ! guard.checkKey(key)) {
    res.status(401).send('Missing and/or invalid API key');
    return;
  }

  next();
};
