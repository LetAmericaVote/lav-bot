const router = require('express')();
const Plugin = require('./Plugin');

class FindByFromNodePlugin extends Plugin {
  getName() {
    return 'findByFromNode';
  }

  getMethod() {
    return 'get';
  }

  getPath() {
    return 'from/:nodeId';
  }

  executor(nodeId) {
    return this.model
      .find({ nodeId })
      .catch(this.errorHandler);
  }

  route(req, res) {
    this.findByFromNode(req.params.nodeId).then(paths => {
      res.json(paths);
    });
  }
}

module.exports = FindByFromNodePlugin;
