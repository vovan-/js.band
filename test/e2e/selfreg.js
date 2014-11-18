'use strict';

/* https://docs.angularjs.org/guide/e2e-testing */

describe('Self-Registration Test: ', function() {
  function selectDropdownByOptionValue(dropdownElement, optionValue) {
    dropdownElement.click();
    dropdownElement.element(by.css('option[value="' + optionValue + '"]')).click();
  }

  beforeEach(function() {
    browser.get('/#/selfregistration');
  });

  it('This URL should points exactly to the SelfRegistration view', function () {
    expect(element(by.cssContainingText('.ng-scope', 'This is the SelfRegistration view.')).isPresent()).toBe(true);
  });

  it('Language has not been changed to \'English\'', function () {
    var languageSelect = element(by.model('language'));
    expect(languageSelect.isPresent()).toBe(true);

    selectDropdownByOptionValue(languageSelect, 'en');
    expect(element(by.cssContainingText('.ng-binding', 'What is your Organization name?')).isPresent()).toBe(true);
  });
});
