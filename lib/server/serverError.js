'use strict';
module.exports = function(app) {
  const xcError = app.xcError;
  class serverError extends xcError {
    constructor(info,content) {
      super(info,content);
      this._code = xcError.TYPE.SERVER.code;
      this._message = xcError.TYPE.AUTH.message;
    }
  }
  return serverError;
};
