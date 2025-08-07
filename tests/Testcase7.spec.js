import { test, expect } from '@playwright/test';
import { homePage } from '../pageObjects/homePage';
import { genericUtils } from '../utils/genericUtils'; 


test('Test Case 7: Test Page Validation', async ({ page }) => {
 const homepage = new homePage(page);
  
 //Navigate to URL
  await homepage.gotoURL();

  //Select Consent button
  await genericUtils.handleConsent(page);


  //Verify that home page is visible successfully
  await genericUtils.verifyElementVisible(homepage.girlimage1);
  
  //Click on Test Cases button
  await homepage.testCasesLink.click();
    
  //Verify Test Cases text is visible
  await genericUtils.verifyElementVisible(homepage.testCasesText);
});