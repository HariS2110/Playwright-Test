import { test, expect } from '@playwright/test';
import path from 'path';
import { homePage } from '../pageObjects/homePage';
import { genericUtils } from '../utils/genericUtils'; 
import { contactusPage } from '../pageObjects/contactusPage';



test('Test Case 6: Contact Us Form Submission', async ({ page }) => {
 const homepage = new homePage(page);
 const contactuspage = new contactusPage(page);
 const filePath = path.resolve(__dirname, '../utils/testfile.png');
  
 //Navigate to URL
  await homepage.gotoURL();

  //Select Consent button
  await genericUtils.handleConsent(page);


  //Verify that home page is visible successfully
  await genericUtils.verifyElementVisible(homepage.girlimage1);

  //Click on Contact Us button
  await homepage.contactusButton.click();

  //Verify Contact Us page is visible
  await genericUtils.verifyElementVisible(contactuspage.contactUsText);

  //Enter name, email, subject, and message
  await genericUtils.fillField(contactuspage.nameField, "John");
  await genericUtils.fillField(contactuspage.emailField, genericUtils.generateUniqueEmail());
  await genericUtils.fillField(contactuspage.subjectField, "Test Subject");
  await genericUtils.fillField(contactuspage.messageField, "Test Message");

  //Attach a file
  await contactuspage.fileInput.setInputFiles(filePath);

  //Click submit button
  await contactuspage.submitButton.click();

  //Select Ok button popup
  await genericUtils.handleBrowserDialogs(page, 'OK');

});