const router = require('express')();
const Plugin = require('./Plugin');

class FindByNodeAndKeywordPlugin extends Plugin {
  getName() {
    return 'findByNodeAndKeyword';
  }

  getMethod() {
    return 'get';
  }

  getPath() {
    return ':nodeId/:keyword';
  }

  executor(nodeId, keyword) {
    return this.model
      .findOne({ from: nodeId, keyword })
      .catch(this.errorHandler);
  }

  route(req, res) {
    this.findByNodeAndKeyword(req.params.nodeId, req.params.keyword).then(node => {
      res.json(node);
    });
  }
}

module.exports = FindByNodeAndKeywordPlugin;
