const path = require('path');
const express = require('express');
const app = express();
const jsonParser = require('body-parser').json();

app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use('/', require('./lib/http/dashboard'));
app.use('/api', jsonParser, require('./lib/api'));
app.use('/webhooks', jsonParser, require('./lib/http/webhooks'));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
