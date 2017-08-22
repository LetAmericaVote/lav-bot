const router = require('express')();
const Plugin = require('./Plugin');

class FindOnePlugin extends Plugin {
  getName() {
    return 'findOne';
  }

  getMethod() {
    return 'get';
  }

  getPath() {
    return ':id';
  }

  executor(id) {
    return this.model
      .findOne({ _id: id })
      .catch(this.errorHandler);
  }

  route(req, res) {
    this.findOne(req.params.id).then(node => {
      res.json(node);
    });
  }
}

module.exports = FindOnePlugin;
