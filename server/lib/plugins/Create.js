const router = require('express')();
const Plugin = require('./Plugin');

class CreatePlugin extends Plugin {
  getName() {
    return 'create';
  }

  getMethod() {
    return 'post';
  }

  executor(obj) {
    return this.model
      .insert(this.validateInput(obj))
      .catch(this.errorHandler);
  }

  route(req, res) {
    this.create(req.body).then(node => {
      res.json(node);
    });
  }
}

module.exports = CreatePlugin;
