const router = require('express')();

class Plugin {
  constructor(name, method, path = '') {
    this.executor = this.executor;
    this.route = this.route;
  }

  getName() {
    return '';
  }

  getMethod() {
    return '';
  }

  getPath() {
    return '';
  }

  executor() {
    console.info('Empty executor...');
    return null;
  }

  route() {
    return express();
  }
}

module.exports = Plugin;
