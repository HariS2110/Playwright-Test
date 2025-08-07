const { expect } = require('@playwright/test');
const genericUtils = require ('../utils/genericUtils');

exports.loggedinPage = class loggedinPage {
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;
    this.accountcreatedText = page.locator('b', {hasText: 'Account Created!'});
    this.continueButton = page.locator('[data-qa="continue-button"]');
    this.loggedInAs = page.locator('a:has-text("Logged in as Bob")');
    this.deleteAccountButton = page.locator('a[href="/delete_account"]');
    this.accountDeletedText = page.locator('b', { hasText: 'Account Deleted!' });
  }

}