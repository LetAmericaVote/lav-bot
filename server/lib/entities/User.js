const Entity = require('./Entity');
const FindBySocialId = require('../plugins/FindBySocialId');
const UpdateUserPosition = require('../plugins/UpdateUserPosition');

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
    };
  }

  getPluginAddons() {
    return [new FindBySocialId(), new UpdateUserPosition()];
  }
}

module.exports = User;
