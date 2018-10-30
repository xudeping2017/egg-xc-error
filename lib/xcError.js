'use strict';
module.exports = function(app) {
  const ctx = app.createAnonymousContext();
  class xcError extends Error {
    constructor(info,content) {
      super(info,content);
      this._code = -1;
      this._message = 'default';
      this._info = info;
      this._content = content;
    }
    get content() {
      return this._content;
    }
    set content(value) {
      this._content = value;
    }
    get message() {
      return this._message;
    }
    set message(value) {
      this._message = value;
    }
    get code() {
      return this._code;
    }
    set code(value) {
      this.code = value;
    }
    get info() {
      return this._info;
    }
    set info(value) {
      this.info = value;
    }

    allProp(){
      let obj =  {
        'code':this._code || -1,
        'message':this._message ,
        'info':this._info ,
        'content':this._content
      }
      if(!obj.info){
        delete obj.info
      }
      if(!obj.content){
        delete obj.content
      }
      return obj;
    }
  }
  xcError.TYPE = {
    // 鉴权相关
    AUTH: {
      code: 10000,
      message: ctx.__('errorAuth'),
    },
    // 数据库相关
    DB: {
      code: 20000,
      message: ctx.__('errorDB'),
    },
    // 服务端逻辑
    SERVER: {
      code: 30000,
      message: ctx.__('errorServer'),
    },
  };
  return xcError;
};

