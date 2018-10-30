'use strict';
module.exports = function(app){
    const ctx = app.createAnonymousContext();
    const authError = app.authError;
    class oAuthError extends authError {
        constructor(info,content){
            super(info,content);
            //10002 oauth 验证错误
            this._code = this._code+2;
            this._message = ctx.__('errorOAUTH');
        }
    }
    return oAuthError;
}