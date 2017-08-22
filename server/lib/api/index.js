const express = require('express');
const router = express();
const gaurdedRouter = express();

const auth = require('./auth');
const middleware = require('./middleware');
const flow = new (require('../entities/Flow'));
const user = new (require('../entities/User'));
const node = new (require('../entities/Node'));
const path = new (require('../entities/Path'));

router.post('/auth', auth);
router.use('/v1', gaurdedRouter);

gaurdedRouter.use(middleware);
for (const resource of [flow, user, node, path]) {
  resource.bindRouter(gaurdedRouter);
}


module.exports = router;
