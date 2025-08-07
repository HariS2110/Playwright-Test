const { expect } = require('@playwright/test');
const genericUtils = require ('../utils/genericUtils');

exports.homePage = class homePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  
  constructor(page) {
    this.page = page;
    this.consentButton = page.locator('p.fc-button-label', { hasText: 'Consent' });
    this.homeButton = page.locator('a[href="/"]'); //a href="/" 
    this.registerloginButton = page.locator('a[href="/login"]');
    this.productButton = page.locator('a[href="/products]"');
    this.cartButton = page.locator('a[href="/view_cart"]');
    this.homepageText = page.locator('h2', { hasText: 'Full-Fledged practice website for Automation Engineers' });
    this.girlimage1 = page.locator('img[src="/static/images/home/girl2.jpg"]');
    this.girlimage2 = page.locator('img[src="/static/images/home/girl1.jpg"]');
    this.girlimage3 = page.locator('img[src="/static/images/home/girl3.jpg"]');
  }

  async gotoURL() {
    await this.page.goto('https://automationexercise.com/');
  }

  async verifyHomepage() {
    await genericUtils.verifyElementVisible(this.girlimage);
  }

}