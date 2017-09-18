const Entity = require('./Entity');
const FindBySocialId = require('../plugins/FindBySocialId');
const UpdateUserPosition = require('../plugins/UpdateUserPosition');
const ToggleUserIgnoreBot = require('../plugins/ToggleUserIgnoreBot');

class User extends Entity {
  getCollection() {
    return 'user';
  }

  getSchema() {
    return {
      socialId: {
        index: true,
        editable: true,
      },
      position: {
        editable: true,
      },
      ignoreBot: {
        editable: true,
      },
    };
  }

  getPluginAddons() {
    return [new FindBySocialId(), new UpdateUserPosition(), new ToggleUserIgnoreBot()];
  }
}

module.exports = User;
