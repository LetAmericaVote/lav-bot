const Entity = require('./Entity');

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
    return [];
  }
}

module.exports = Node;
