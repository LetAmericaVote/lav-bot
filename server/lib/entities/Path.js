const Entity = require('./Entity');
const FindByNodeAndKeyword = require('../plugins/FindByNodeAndKeyword');
const FindByFromNode = require('../plugins/FindByFromNode');

class Path extends Entity {
  getCollection() {
    return 'path';
  }

  getSchema() {
    return {
      keyword: {
        index: true,
        editable: true,
      },
      from: {
        index: true,
        editable: true,
      },
      to: {
        editable: true,
      },
    };
  }

  getPluginAddons() {
    return [new FindByNodeAndKeyword(), new FindByFromNode()];
  }
}

module.exports = Path;
