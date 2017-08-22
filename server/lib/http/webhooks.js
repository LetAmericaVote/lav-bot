const request = require('superagent');
const router = require('express')();
const core = require('../core');

function sendFacebookMessage(senderId, text) {
  const fbMsg = {
    recipient: {
      id: senderId
    },
    message: {
      text
    },
  };

  request
    .post('https://graph.facebook.com/v2.6/me/messages')
    .query({ access_token: process.env.FACEBOOK_ACCESS_TOKEN })
    .send(fbMsg)
    .end((err, res) => {
      if (err) {
        console.error(err);
        return;
      }

      if (res.status !== 200) {
        console.log(res);
        return;
      }
    });
}

function executeCore(platform, socialId, text) {
  return new Promise((resolve, reject) => resolve(
    core(`${platform}_${socialId}`, text)
  )).then(msg => {
    switch (platform) {
      case 'fb': sendFacebookMessage(socialId, msg); break;
      default: console.log(msg);
    }
  });
}

router.get('/facebook', (req, res) => {
  const HUB_MODE = 'hub.mode';
  const HUB_CHALLENGE = 'hub.challenge';
  const HUB_VERIFICATION = 'hub.verify_token';

  const { query } = req;

  if (! query || ! query[HUB_MODE] || ! query[HUB_VERIFICATION]) {
    res.status(500).send('Invalid query');
    return;
  }

  if (query[HUB_VERIFICATION] !== process.env.FACEBOOK_VERIFY_TOKEN) {
    res.status(500).send('Invalid token');
    return;
  }

  switch (query[HUB_MODE]) {
    case 'subscribe': res.send(query[HUB_CHALLENGE]); break;
    default: res.send('ok');
  }
});

router.post('/facebook', (req, res) => {
  res.send('ok');

  const { object, entry } = req.body || {};
  if (! entry || ! object || object !== 'page') return;

  for (const { messaging } of entry) {
    for (const { sender, message } of messaging) {
      executeCore('fb', sender.id, message.text);
    }
  }
});

module.exports = router;
