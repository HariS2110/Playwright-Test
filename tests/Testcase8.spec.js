import { test, expect } from '@playwright/test';
import { homePage } from '../pageObjects/homePage';
import { productsPage } from '../pageObjects/productsPage';
import { genericUtils } from '../utils/genericUtils'; 


test('Test Case 8: View Product Details', async ({ page }) => {
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

  //Select the first product
  await productspage.viewProductLink.click();

  //Verify product details are visible
  await genericUtils.verifyElementVisible(productspage.productTitle);
  await genericUtils.verifyElementVisible(productspage.availabilityLabel);
  await genericUtils.verifyElementVisible(productspage.conditionLabel);
  await genericUtils.verifyElementVisible(productspage.brandLabel);
  await genericUtils.verifyElementVisible(productspage.categoryText);
  await genericUtils.verifyElementVisible(productspage.price);


});