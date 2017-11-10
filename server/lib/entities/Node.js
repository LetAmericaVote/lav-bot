const Entity = require('./Entity');
const FindByKeywordPlugin = require('../plugins/FindByKeyword');
const FindAllPlugin = require('../plugins/FindAll');

class Node extends Entity {
  getCollection() {
    return 'node';
  }

  getSchema() {
    return {
      keyword: {
        index: true,
        editable: true,
        unique: true,
      },
      message: {
        editable: true,
      },
    };
  }

  getPluginAddons() {
    return [new FindByKeywordPlugin(), new FindAllPlugin()];
  }

  getRules() {
    return {
      keyword: 'lowercase',
    };
  }
}

module.exports = Node;
