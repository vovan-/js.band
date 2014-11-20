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

  xit('This URL should points exactly to the SelfRegistration view', function () {
    expect(element(by.css('h2 span:nth-child(2)')).getAttribute('translate')).toEqual('selfreg-header');

  });
  it('Changing dropdown selection should show labels on different languages', function () {
    var languageSelect = element(by.model('language'));
    selectDropdownByOptionValue(languageSelect, 'en');
    expect(element(by.css('h2 span:nth-child(2)')).getText()).toEqual('Self registration');

    selectDropdownByOptionValue(languageSelect, 'de');
    expect(element(by.css('h2 span:nth-child(2)')).getText()).toEqual('Selbstregistrierung');
  });

  it('Language has not been changed to \'English\'', function () {
    var languageSelect = element(by.model('language'));
    expect(languageSelect.isPresent()).toBe(true);

    selectDropdownByOptionValue(languageSelect, 'en');
    expect(element(by.cssContainingText('.ng-binding', 'What is your Organization name?')).isPresent()).toBe(true);
  });
});
