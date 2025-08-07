import { test, expect } from '@playwright/test';



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

}

