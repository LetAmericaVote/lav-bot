const router = require('express')();
const Plugin = require('./Plugin');

class FindByFlowPlugin extends Plugin {
  getName() {
    return 'findByFlow';
  }

  getMethod() {
    return 'get';
  }

  getPath() {
    return 'flow/:flowId';
  }

  executor(flowId) {
    return this.model
      .find({ flowId })
      .catch(this.errorHandler);
  }

  route(req, res) {
    this.findByFlow(req.params.flowId).then(nodes => {
      res.json(nodes);
    });
  }
}

module.exports = FindByFlowPlugin;
