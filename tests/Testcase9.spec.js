import { test, expect } from '@playwright/test';
import { homePage } from '../pageObjects/homePage';
import { productsPage } from '../pageObjects/productsPage';
import { genericUtils } from '../utils/genericUtils'; 


test('Test Case 9: Search Product', async ({ page }) => {
 const homepage = new homePage(page);
 const productspage = new productsPage(page);
  
 //Navigate to URL
  await homepage.gotoURL();

  //Select Consent button
  await genericUtils.handleConsent(page);


  //Verify that home page is visible successfully
  await genericUtils.verifyElementVisible(homepage.girlimage1);

  //Click on Products link
  await homepage.productsLink.click();

  //Verify Products text is visible
  await genericUtils.verifyElementVisible(productspage.productsText);

  //Select for polo
  await genericUtils.fillField(productspage.searchInput, "Polo");
  await productspage.searchButton.click();


  //Verify product details are visible
  await genericUtils.verifyElementVisible(productspage.premiumPoloText);


});