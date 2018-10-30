'use strict';

const mock = require('egg-mock');

describe('test/xc-error.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/xc-error-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, xcError')
      .expect(200);
  });
});
