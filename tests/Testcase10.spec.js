import { test, expect } from '@playwright/test';
import { homePage } from '../pageObjects/homePage';
import { productsPage } from '../pageObjects/productsPage';
import { genericUtils } from '../utils/genericUtils'; 


test('Test Case 10: Scroll to Subscription Section', async ({ page }) => {
 const homepage = new homePage(page);
 const productspage = new productsPage(page);
  
 //Navigate to URL
  await homepage.gotoURL();

  //Select Consent button
  await genericUtils.handleConsent(page);

  //Verify that home page is visible successfully
  await genericUtils.verifyElementVisible(homepage.girlimage1);

 //Go to bottom of the page
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  //Verify Subscription section is visible
  await genericUtils.verifyElementVisible(homepage.subscriptionHeading);

  //Enter email in subscription input
  await genericUtils.fillField(homepage.emailInput, "test@example.com");

 //Click on arrow icon to subscribe
  await homepage.arrowIcon.click();

});