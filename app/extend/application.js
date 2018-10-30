'use strict';
const xcError = Symbol('Application#xcError');
const authError = Symbol('Application#authError');
const dbError = Symbol('Application#dbError');
const serverError = Symbol('Application#serverError');
const jwtError = Symbol('Application#jwtError');
const oAuthError = Symbol('Application#oAuthError');
const validateError = Symbol('Application#validateError');
module.exports = {
  get xcError() {
    if (!this[xcError]) {
      this[xcError] = require('../../lib/xcError')(this);
    }
    return this[xcError];
  },
  get authError() {
    if (!this[authError]) {
      this[authError] = require('../../lib/auth/authError')(this);
    }
    return this[authError];
  },
  get dbError() {
    if (!this[dbError]) {
      this[dbError] = require('../../lib/db/dbError')(this);
    }
    return this[dbError];
  },
  get serverError() {
    if (!this[serverError]) {
      this[serverError] = require('../../lib/server/serverError')(this);
    }
    return this[serverError];
  },
  get jwtError() {
    if (!this[jwtError]) {
      this[jwtError] = require('../../lib/auth/jwtError')(this);
    }
    return this[jwtError];
  },
  get oAuthError() {
    if (!this[oAuthError]) {
      this[oAuthError] = require('../../lib/auth/oAuthError')(this);
    }
    return this[oAuthError];
  },
  get validateError() {
    if (!this[validateError]) {
      this[validateError] = require('../../lib/auth/validateError')(this);
    }
    return this[validateError];
  }
};