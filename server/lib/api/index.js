const express = require('express');
const router = express();
const gaurdedRouter = express();

const auth = require('./auth');
const middleware = require('./middleware');
const user = new (require('../entities/User'));
const node = new (require('../entities/Node'));

router.post('/auth', auth);
router.use('/v1', gaurdedRouter);

gaurdedRouter.use(middleware);
for (const resource of [user, node]) {
  resource.bindRouter(gaurdedRouter);
}


module.exports = router;
