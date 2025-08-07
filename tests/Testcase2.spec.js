import { test, expect } from '@playwright/test';
import { homePage } from '../pageObjects/homePage';
import { loginPage } from '../pageObjects/loginPage';
import { loggedinPage } from '../pageObjects/loggedinPage';
import { genericUtils } from '../utils/genericUtils'; 
import testUsers from '../utils/testUsers';

test('Test Case 2: Login User with correct email and password', async ({ page }) => {
    const homepage = new homePage(page);
    const loginpage = new loginPage(page);
    const loggedinpage = new loggedinPage(page);

    //Navigate to URL
     await homepage.gotoURL();

     //Select Consent button
     await homepage.consentButton.click()

     //Verify homepage is visible
     await genericUtils.verifyElementVisible(homepage.girlimage1);

     //Click on Signup/Login button
     await homepage.registerloginButton.click();
     
     //Verify Login Text is visible
     await genericUtils.verifyElementVisible(loginpage.loginText);

    //Enter email address and password to login
     await genericUtils.fillField(loginpage.loginemailField, testUsers.existingUser.email);
     await genericUtils.fillField(loginpage.loginpasswordField, testUsers.existingUser.password);

     //Click login button
     await loginpage.loginButton.click();

     //Verify that logged in as username is visible 
     await genericUtils.verifyElementVisible(loggedinpage.loggedInAs);

  
   });