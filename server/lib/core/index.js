const CHAT_KEYWORD = 'chat';

const ERROR_MSG = 'Looks like our Facebook bot had an error. Mind trying again? If you want to chat with a human, reply "CHAT".';
const INCORRECT_KEYWORD_MSG = 'Looks like you might have mistyped the keyword, can you try again? If you want to chat with a human, reply "CHAT".';
const CHAT_WITH_BOT = 'You\'re now chatting with our Facebook bot.';
const STOP_CHATTING_WITH_BOT = 'You\'re not longer chatting with our Facebook bot. Reply with "CHAT" at anytime if you want to go back and talk with our bot!';

const User = new (require('../entities/User'));
const Node = new (require('../entities/Node'));

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

async function updateUserPosition(userId, nodeId) {
  return User.updateUserPosition(userId, nodeId).catch(onPromiseError);
}

async function getNodeByKeyword(keyword) {
  return Node.findByKeyword(keyword).catch(onPromiseError);
}

async function toggleUserIgnoreBot(userId, ignoreBot) {
  return User.toggleUserIgnoreBot(userId, ignoreBot).catch(onPromiseError);
}

async function handleMessage(socialId, rawMessage) {
  const message = (rawMessage || '').toLowerCase();

  const user = await getUser(socialId);

  if (message === CHAT_KEYWORD) {
    await toggleUserIgnoreBot(user._id, ! user.ignoreBot);
    return user.ignoreBot ? CHAT_WITH_BOT : STOP_CHATTING_WITH_BOT;
  } else if (user.ignoreBot) {
    return false;
  }

  const node = await getNodeByKeyword(message);

  if (! node) {
    return INCORRECT_KEYWORD_MSG;
  }

  await updateUserPosition(user._id, node._id);

  return node.message || ERROR_MSG;
}

module.exports = handleMessage;
