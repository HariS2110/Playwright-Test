const { expect } = require('@playwright/test');
const genericUtils = require ('../utils/genericUtils');

exports.contactusPage = class contactusPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.contactUsText = page.locator('h2', { hasText: 'Contact Us' });
    this.nameField = page.locator('input[data-qa="name"]');
    this.emailField = page.locator('input[data-qa="email"]');
    this.subjectField = page.locator('input[data-qa="subject"]');
    this.messageField = page.locator('textarea[data-qa="message"]');
    this.submitButton = page.locator('[data-qa="submit-button"]');
    this.fileInput = page.locator('input[name="upload_file"]');
    this.successMessage = page.locator('div.status.alert.alert-success');

  }

}
