const router = require('express')();
const Plugin = require('./Plugin');

class DeletePlugin extends Plugin {
  getName() {
    return 'delete';
  }

  getMethod() {
    return 'delete';
  }

  getPath() {
    return ':id';
  }

  executor(id) {
    return this.model
      .findOneAndDelete({ _id: id })
      .catch(this.errorHandler);
  }

  route(req, res) {
    this.delete(req.params.id).then(node => {
      res.json(node);
    });
  }
}

module.exports = DeletePlugin;
