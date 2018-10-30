'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const app = this.app;
    this.ctx.body = 'hi, ' + this.app.plugins.xcError.name;
  }
}

module.exports = HomeController;
