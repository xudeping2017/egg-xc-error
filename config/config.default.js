'use strict';

/**
 * egg-xc-error default config
 * @member Config#xcError
 * @property {String} SOME_KEY - some description
 */
exports.xcError = {

};
exports.i18n = {
  // 默认语言，默认 "en_US"
  defaultLocale: 'zh-CN',
  // URL 参数，默认 "locale"
  queryField: 'locale',
  // Cookie 记录的 key, 默认："locale"
  cookieField: 'locale',
  // Cookie 默认 `1y` 一年后过期， 如果设置为 Number，则单位为 ms
  cookieMaxAge: '1y',
};
