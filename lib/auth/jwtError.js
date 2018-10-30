'use strict';
module.exports = function(app){
    const ctx = app.createAnonymousContext();
    const authError = app.authError;
    class jwtError extends authError {
        constructor(info,content){
            super(info,content);
            //10001 jwt 验证错误
            this._code = this._code+1;
            this._message = ctx.__('errorJWT');
        }
    }
    return jwtError;
}