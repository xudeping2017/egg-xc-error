'use strict';
module.exports = function(app){
    const ctx = app.createAnonymousContext();
    const authError = app.authError;
    class validateError extends authError {
        constructor(info,content){
            super(info,content);
            //10003 参数验证错误
            this._code = this._code+1;
            this._message = ctx.__('errorVALIDATE');
        }
    }
    return validateError;
}