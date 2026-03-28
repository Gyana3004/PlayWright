const{test, expect}=require('@playwright/test');
const { assert } = require('node:console');


test.only("Handling Dropdown example",async({page})=>
{
const Username=page.locator('#username');
const SignIn= page.locator("#signInBtn");
const dropdown=page.locator("select.form-control ");
const documentLink=page.locator("[href*='documents-request']");
//chrome browser
  //  chrome - plugins/cookies
   //const context=await browser.newContext();
   // const page= await context.newPage();
  console.log(await page.goto("https://rahulshettyacademy.com/loginpagePractise/"));
    await  dropdown.selectOption("Teacher");
    //await page.pause();
//handle RadioButton
    await page.locator(".checkmark").last().click();
    await page.locator("#okayBtn").click();
     //assertion
     console.log(await page.locator(".checkmark").last().isChecked());
    await  expect(page.locator(".checkmark").last()).toBeChecked()
     
    await page.locator("[type='checkbox']").click();
    await expect(page.locator("[type='checkbox']")).toBeChecked()
    await page.locator("[type='checkbox']").uncheck();
    expect(await page.locator("[type='checkbox']").isChecked()).toBeFalsy();
    //await page.pause();
   //checking blinking text 
   
    await expect(documentLink).toHaveAttribute("class","blinkingText");



}




);