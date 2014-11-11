'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('JsBand App', function() {

  it('should show \'Allo, \'Allo! in H1 tag', function () {
    browser.get('/');
    expect($('h1').getText()).toEqual("\'Allo, \'Allo!");
  });
});