const ERROR_MSG = 'Looks like we had an error. Mind trying again?';
const INCORRECT_KEYWORD_MSG = 'Looks like you might have mistyped the keyword. Try again?';

const Flow = new (require('../entities/Flow'));
const User = new (require('../entities/User'));
const Node = new (require('../entities/Node'));
const Path = new (require('../entities/Path'));

function onPromiseError(err) {
  console.error(err);
}

async function getUser(socialId) {
  return User.findBySocialId(socialId)
    .then(user => {
      if (user) return user;

      return User.create({ socialId }).catch(onPromiseError);
    })
    .catch(onPromiseError);
}

async function getFlowEntrance(message) {
  return Flow.findByKeyword(message).catch(onPromiseError);
}

async function loadNode(nodeId) {
  return Node.findOne(nodeId).catch(onPromiseError);
}

async function updateUserPosition(userId, nodeId) {
  return User.updateUserPosition(userId, nodeId).catch(onPromiseError);
}

async function getPath(nodeId, keyword) {
  return Path.findByNodeAndKeyword(nodeId, keyword).catch(onPromiseError);
}

async function handleMessage(socialId, rawMessage) {
  const message = (rawMessage || '').toLowerCase();

  const user = await getUser(socialId);
  const flowEntrance = await getFlowEntrance(message);

  if (flowEntrance) {
    if (! flowEntrance.start) return ERROR_MSG;

    const node = await loadNode(flowEntrance.start);
    if (! node) return ERROR_MSG;

    await updateUserPosition(user._id, node._id);

    return node.message || ERROR_MSG;
  }

  if (! user.position) {
    return INCORRECT_KEYWORD_MSG;
  }

  const path = await getPath(user.position.toString(), message);
  if (! path || ! path.to) return ERROR_MSG;

  const node = await loadNode(path.to.toString());
  if (! node) return ERROR_MSG;

  await updateUserPosition(user._id, node._id);

  return node.message || ERROR_MSG;
}

module.exports = handleMessage;
