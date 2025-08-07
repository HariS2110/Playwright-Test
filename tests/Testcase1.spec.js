import { test, expect } from '@playwright/test';
import { homePage } from '../pageObjects/homePage';
import { loginPage } from '../pageObjects/loginPage';
import { signupPage } from '../pageObjects/signupPage';
import { loggedinPage } from '../pageObjects/loggedinPage';
import { genericUtils } from '../utils/genericUtils'; 


test('Test Case 1: Register User', async ({ page }) => {
 const homepage = new homePage(page);
 const loginpage = new loginPage(page);
 const signuppage = new signupPage(page);
 const loggedinpage = new loggedinPage(page);
  
 //Navigate to URL
  await homepage.gotoURL();

  //Select Consent button
  await genericUtils.handleConsent(page);


  //Verify that home page is visible successfully
  await genericUtils.verifyElementVisible(homepage.girlimage1);
  
  //Click on Signup/Login button
  await homepage.registerloginButton.click();

  //Verify New User Signup! is visible
  await genericUtils.verifyElementVisible(loginpage.newusersignupText);

  //Enter name and email address
  await genericUtils.fillField(loginpage.newusersignupnameField,"Bob");
  await genericUtils.fillField(loginpage.newusersignupemailField,genericUtils.generateUniqueEmail());
  
  //Click signup button
  await loginpage.signupButton.click();

  //Check that you are on the signup page
  await genericUtils.verifyElementVisible(signuppage.enteraccountinfoText);

  //Fill out details
  await signuppage.filloutform();

  //Verify Account Created is Visible
  await genericUtils.verifyElementVisible(loggedinpage.accountcreatedText);

  //Click continue button
  await loggedinpage.continueButton.click();

  //Verify that logged in as username is visible
  await genericUtils.verifyElementVisible(loggedinpage.loggedInAs);

  //Click delete account button
  await loggedinpage.deleteAccountButton.click();

  //Verify that Account Deleted is visible
  await genericUtils.verifyElementVisible(loggedinpage.accountDeletedText);

  //Click continue button
  await loggedinpage.continueButton.click();

});