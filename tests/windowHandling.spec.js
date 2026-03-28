const{test, expect}=require('@playwright/test');
const { assert } = require('node:console');


test("Windows Handling",async({browser})=>
{
//const Username=page.locator('#username');
//const SignIn= page.locator("#signInBtn");
//const dropdown=page.locator("select.form-control ");
//const documentLink=page.locator("[href*='documents-request']");
//chrome browser
  //  chrome - plugins/cookies
   const context=await browser.newContext();
   const page= await context.newPage();
  const documentLink=page.locator("[href*='documents-request']");
  const Username=page.locator('#username');

    console.log(await page.goto("https://rahulshettyacademy.com/loginpagePractise/"));
     
   const [newPage]=await Promise.all(
  [
    context.waitForEvent('page'),//listen if a new page is open //promies pending,rejected,fulfilled
    documentLink.click(),
  ])//new page is opened
    const  text=await newPage.locator(".im-para.red").textContent();
     console.log(text)
     const arrayText=text.split("@")
    const email= arrayText[1].split(" ")[0];
    console.log(email)
   await Username.type(email);
   await page.pause();
   //console.log(await Username.textContent());
   console.log(await Username.inputValue());
   
    //await expect(documentLink).toHaveAttribute("class","blinkingText");



}




);