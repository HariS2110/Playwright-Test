const { expect } = require('@playwright/test');
const genericUtils = require ('../utils/genericUtils');

exports.productsPage = class productsPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.productsText = page.locator('h2.title.text-center', { hasText: 'All Products' });
    this.viewProductLink = page.locator('a[href="/product_details/1"]', { hasText: 'View Product' });
    this.availabilityLabel = page.locator('b', { hasText: 'Availability:' });
    this.conditionLabel = page.locator('b', { hasText: 'Condition:' });
    this.brandLabel = page.locator('b', { hasText: 'Brand:' });
    this.productTitle = page.locator('h2', { hasText: 'Blue Top' });
    this.categoryText = page.locator('p', { hasText: 'Category: Women > Tops' });
    this.price = page.locator('text="Rs. 500"');
    this.searchInput = page.locator('input#search_product');
    this.searchButton = page.locator('button#submit_search');
    this.premiumPoloText = page.locator('p', { hasText: 'Premium Polo T-Shirts' }).first(); // Adjusted to ensure it selects the correct element

  }

}
