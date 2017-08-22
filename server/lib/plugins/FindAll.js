const router = require('express')();
const Plugin = require('./Plugin');

class FindAllPlugin extends Plugin {
  getName() {
    return 'findAll';
  }

  getMethod() {
    return 'get';
  }

  executor(id) {
    return this.model
      .find()
      .catch(this.errorHandler);
  }

  route(req, res) {
    this.findAll().then(nodes => {
      res.json(nodes);
    });
  }
}

module.exports = FindAllPlugin;
