const { expect } = require('@playwright/test');
const genericUtils = require ('../utils/genericUtils');

exports.loginPage = class loginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;
    this.newusersignupText = page.locator('h2', {hasText: 'New User Signup!'});
    this.newusersignupnameField = page.locator('input[data-qa="signup-name"]');
    this.newusersignupemailField = page.locator('input[data-qa="signup-email"]');
    this.signupButton = page.locator('[data-qa="signup-button"]');
    this.loginText = page.locator('h2', {hasText: 'Login to your account'});
    this.loginemailField = page.locator('input[data-qa="login-email"]');
    this.loginpasswordField = page.locator('input[data-qa="login-password"]');
    this.loginButton = page.locator('button[data-qa="login-button"]');
    this.loginError = page.locator('p', { hasText: 'Your email or password is incorrect!' });
}
  }
