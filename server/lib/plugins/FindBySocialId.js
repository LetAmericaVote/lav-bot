const router = require('express')();
const Plugin = require('./Plugin');

class FindBySocialId extends Plugin {
  getName() {
    return 'findBySocialId';
  }

  getMethod() {
    return 'get';
  }

  getPath() {
    return 'social/:socialId';
  }

  executor(socialId) {
    return this.model
      .findOne({ socialId })
      .catch(this.errorHandler);
  }

  route(req, res) {
    this.findBySocialId(req.params.socialId).then(user => {
      res.json(user);
    });
  }
}

module.exports = FindBySocialId;
