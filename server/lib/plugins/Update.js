const router = require('express')();
const Plugin = require('./Plugin');

class UpdatePlugin extends Plugin {
  getName() {
    return 'update';
  }

  getMethod() {
    return 'put';
  }

  getPath() {
    return ':id';
  }

  executor(id, obj) {
    const query = { _id: id };

    return this.model
      .findOne(query)
      .then(props => {
        if (! props) return null;

        const input = this.fillInput(this.validateInput(obj), props);
        return this.model.findOneAndUpdate(query, input);
      })
      .catch(this.errorHandler);
  }

  route(req, res) {
    this.update(req.params.id, req.body).then(node => {
      res.json(node);
    });
  }
}

module.exports = UpdatePlugin;
