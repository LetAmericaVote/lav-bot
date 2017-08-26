const Entity = require('./Entity');
const FindByFlowPlugin = require('../plugins/FindByFlow');

class Node extends Entity {
  getCollection() {
    return 'node';
  }

  getSchema() {
    return {
      flowId: {
        index: true,
        editable: true,
      },
      message: {
        editable: true,
      },
    };
  }

  getPluginAddons() {
    return [new FindByFlowPlugin()];
  }
}

module.exports = Node;
