import { test, expect } from '@playwright/test';
import { homePage } from '../pageObjects/homePage';



export class genericUtils{
    static async verifyElementVisible(element, options = {}) {
        await expect(element).toBeVisible(options);
      }

    static async fillField(field, value, options = {}) {
        await field.waitFor({ state: "visible" });
        await field.fill(value);
      }

    static generateUniqueEmail(base = "bob") {
        const timestamp = Date.now();
        return `${base}${timestamp}@test.com`;
      }

  static async handleConsent(page) {
    const consent = page.locator('p.fc-button-label', { hasText: 'Consent' });
    if (await consent.isVisible({ timeout: 3000 })) {
      await consent.click();
    }
  }

}

