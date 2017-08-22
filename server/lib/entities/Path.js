const Entity = require('./Entity');
const FindByNodeAndKeyword = require('../plugins/FindByNodeAndKeyword');

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
    return [new FindByNodeAndKeyword()];
  }
}

module.exports = Path;
