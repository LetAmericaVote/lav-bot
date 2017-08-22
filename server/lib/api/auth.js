const gaurd = require('./gaurd');

module.exports = (req, res) => {
  if (! req.body) {
    res.status(401).send('Missing username and/or password.');
    return;
  }

  const { username, password } = req.body;
  if (! username || ! password) {
    res.status(401).send('Missing username and/or password.');
    return;
  }

  const key = gaurd.authenticate(username, password);
  if (! key) {
    res.status(401).send('Incorrect username and/or password.');
    return;
  }

  res.json({ key });
};
