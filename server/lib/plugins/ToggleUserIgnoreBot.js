const router = require('express')();
const Plugin = require('./Plugin');

class ToggleUserIgnoreBot extends Plugin {
  getName() {
    return 'toggleUserIgnoreBot';
  }

  getMethod() {
    return 'post';
  }

  getPath() {
    return ':userId/ignoreBot';
  }

  executor(userId, ignoreBot) {
    const query = { _id: userId };

    return this.model
      .findOne(query)
      .then(props => {
        if (! props) return null;

        const input = this.fillInput(this.validateInput({ ignoreBot }), props);
        return this.model.findOneAndUpdate(query, input);
      })
      .catch(this.errorHandler);
  }

  route(req, res) {
    this.toggleUserIgnoreBot(req.params.userId, req.body.ignoreBot).then(user => {
      res.json(user);
    });
  }
}

module.exports = ToggleUserIgnoreBot;
