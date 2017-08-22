const router = require('express')();

const templatePath = require('path').resolve(`./server/template.html`);
const template = require('fs').readFileSync(templatePath, 'utf8');

router.get('/', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(template);
  res.end();
});

module.exports = router;
