const router = require('express')();
const Plugin = require('./Plugin');

class UpdateUserPosition extends Plugin {
  getName() {
    return 'updateUserPosition';
  }

  getMethod() {
    return 'post';
  }

  getPath() {
    return ':userId/position/:nodeId';
  }

  executor(userId, nodeId) {
    const query = { _id: userId };

    return this.model
      .findOne(query)
      .then(props => {
        if (! props) return null;

        const input = this.fillInput(this.validateInput({ position: nodeId }), props);
        return this.model.findOneAndUpdate(query, input);
      })
      .catch(this.errorHandler);
  }

  route(req, res) {
    this.updateUserPosition(req.params.userId, req.params.nodeId).then(user => {
      res.json(user);
    });
  }
}

module.exports = UpdateUserPosition;
