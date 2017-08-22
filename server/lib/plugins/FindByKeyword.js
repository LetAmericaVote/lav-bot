const router = require('express')();
const Plugin = require('./Plugin');

class FindByKeywordPlugin extends Plugin {
  getName() {
    return 'findByKeyword';
  }

  getMethod() {
    return 'get';
  }

  getPath() {
    return 'keyword/:keyword';
  }

  executor(keyword) {
    return this.model
      .findOne({ keyword })
      .catch(this.errorHandler);
  }

  route(req, res) {
    this.findByKeyword(req.params.keyword).then(node => {
      res.json(node);
    });
  }
}

module.exports = FindByKeywordPlugin;
