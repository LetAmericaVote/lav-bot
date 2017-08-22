const Entity = require('./Entity');
const FindAllPlugin = require('../plugins/FindAll');
const FindByKeywordPlugin = require('../plugins/FindByKeyword');

class Flow extends Entity {
  getCollection() {
    return 'flow';
  }

  getSchema() {
    return {
      keyword: {
        index: true,
        editable: true,
      },
      start: {
        editable: true,
      },
    };
  }

  getPluginAddons() {
    return [new FindAllPlugin(), new FindByKeywordPlugin()];
  }
}

module.exports = Flow;
