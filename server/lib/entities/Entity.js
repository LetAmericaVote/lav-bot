const express = require('express');
const db = require('monk')(process.env.MONGODB_URI);

const FindOnePlugin = require('../plugins/FindOne');
const CreatePlugin = require('../plugins/Create');
const UpdatePlugin = require('../plugins/Update');
const DeletePlugin = require('../plugins/Delete');

class Entity {
  constructor() {
    this.plugins = [
      new FindOnePlugin(),
      new CreatePlugin(),
      new UpdatePlugin(),
      new DeletePlugin(),
      ...(this.getPluginAddons()),
    ];

    this.router = express();
    this.model = db.get(this.getCollection());

    for (const func of Object.getOwnPropertyNames(Entity.prototype)) {
      if (func === 'constructor') continue;
      this[func] = this[func].bind(this);
    }

    this._setupIndexes();
    this._setupPlugins();
  }

  _setupIndexes() {
    for (const key of Object.keys(this.getSchema())) {
      if (this.getSchema()[key].index === true) {
        this.model.createIndex(key).catch(this.errorHandler);
      }
    }
  }

  _setupPlugins() {
    for (const plugin of this.plugins) {
      this[plugin.getName()] = plugin.executor.bind(this);

      const path = `/${plugin.getPath()}`;
      this.router[plugin.getMethod()](path, plugin.route.bind(this));
    }
  }

  bindRouter(root) {
    root.use(`/${this.getCollection()}`, this.router);
  }

  validateInput(input) {
    const validation = {};

    for (const key of Object.keys(input)) {
      const struct = this.getSchema()[key];
      if (! struct || ! struct.editable) continue;

      validation[key] = input[key];
    }

    return validation;
  }

  fillInput(input, obj) {
    const filled = {};

    const enforceRules = (key, value) => {
      const rule = this.getRules()[key];
      if (! rule) return value;

      if (rule === 'lowercase') {
        return value.toLowerCase();
      }

      return value;
    };

    for (const key of Object.keys(obj)) {
      filled[key] = enforceRules(key, obj[key]);
    }

    for (const key of Object.keys(input)) {
      filled[key] = enforceRules(key, input[key]);
    }

    return filled;
  }

  errorHandler(error) {
    console.error(error);
  }

  getSchema() {
    return { /* ... */ };
  }

  getPlugins() {
    return [];
  }

  getCollection() {
    return '';
  }

  getRules() {
    return { /* ... */ };
  }
}

module.exports = Entity;
