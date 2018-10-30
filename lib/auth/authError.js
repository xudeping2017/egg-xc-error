'use strict';
module.exports = function(app) {
  const xcError = app.xcError;
  class authError extends xcError {
    constructor(info,content) {
      super(info,content);
      this._code = xcError.TYPE.AUTH.code;
      this._message = xcError.TYPE.AUTH.message;
    }
  }
  return authError;
};
