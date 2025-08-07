const { expect } = require('@playwright/test');
const genericUtils = require ('../utils/genericUtils');

exports.signupPage = class signupPage {
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;
    this.enteraccountinfoText = page.locator('b', {hasText: 'Enter Account Information'});
    this.genderMr = page.locator('#id_gender1');
    this.genderMrs = page.locator('#id_gender2');
    this.passwordField = page.locator('input[data-qa="password"]');
    this.daysDropdown = page.locator('#days');
    this.monthsDropdown = page.locator('#months');
    this.yearsDropdown = page.locator('#years');
    this.newsletterCheckbox = page.locator('#newsletter');
    this.optinCheckbox = page.locator('#optin');
    this.firstNameInput = page.locator('#first_name');
    this.lastNameInput = page.locator('#last_name');
    this.companyInput = page.locator('#company');
    this.addressInput1 = page.locator('#address1');
    this.addressInput2 = page.locator('#address2');
    this.stateInput = page.locator('#state');
    this.cityInput = page.locator('#city');
    this.zipcodeInput = page.locator('#zipcode');
    this.mobileNumberInput = page.locator('#mobile_number');
    this.countryDropdown = page.locator('#country');
    this.createAccountButton = page.locator('[data-qa="create-account"]');

  }

  async filloutform(){
    await this.genderMr.scrollIntoViewIfNeeded();
    await this.genderMr.click();

    await this.passwordField.scrollIntoViewIfNeeded();
    await this.passwordField.fill('Tester1!');

    await this.daysDropdown.scrollIntoViewIfNeeded();
    await this.daysDropdown.selectOption({ value: '10' });

    await this.monthsDropdown.scrollIntoViewIfNeeded();
    await this.monthsDropdown.selectOption({value: '1'});

    await this.yearsDropdown.scrollIntoViewIfNeeded();
    await this.yearsDropdown.selectOption({value: '2000'});

    await this.newsletterCheckbox.scrollIntoViewIfNeeded();
    await this.newsletterCheckbox.click();

    await this.optinCheckbox.scrollIntoViewIfNeeded();
    await this.optinCheckbox.click();

    await this.firstNameInput.scrollIntoViewIfNeeded();
    await this.firstNameInput.fill("Bob");

    await this.lastNameInput.scrollIntoViewIfNeeded();
    await this.lastNameInput.fill("McCheese");

    await this.companyInput.scrollIntoViewIfNeeded();
    await this.companyInput.fill("Rose");

    await this.addressInput1.scrollIntoViewIfNeeded();
    await this.addressInput1.fill("6 Pancras Sq, London N1C 4AG");

    await this.countryDropdown.scrollIntoViewIfNeeded();
    await this.countryDropdown.selectOption({value: 'India'});

    await this.stateInput.scrollIntoViewIfNeeded();
    await this.stateInput.fill("Calcutta");

    await this.cityInput.scrollIntoViewIfNeeded();
    await this.cityInput.fill("New Dehli");

    await this.zipcodeInput.scrollIntoViewIfNeeded();
    await this.zipcodeInput.fill("2514");

    await this.mobileNumberInput.scrollIntoViewIfNeeded();
    await this.mobileNumberInput.fill("45875489")
    await this.createAccountButton.click();
  }
}



