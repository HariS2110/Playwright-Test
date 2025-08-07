import { test, expect } from '@playwright/test';
import { homePage } from '../pageObjects/homePage';
import { loginPage } from '../pageObjects/loginPage';
import { signupPage } from '../pageObjects/signupPage';
import { loggedinPage } from '../pageObjects/loggedinPage';
import { genericUtils } from '../utils/genericUtils'; 
import testUsers from '../utils/testUsers';


test('Test Case 5: Register User with Existing Email', async ({ page }) => {
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
  await genericUtils.fillField(loginpage.newusersignupemailField, testUsers.existingUser.email);
  
  //Click signup button
  await loginpage.signupButton.click();

  //Check that you are on the signup page
  await genericUtils.verifyElementVisible(loginpage.emailexistsError);

});