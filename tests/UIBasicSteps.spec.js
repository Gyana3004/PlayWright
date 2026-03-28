const{test, expect}=require('@playwright/test');





test('First Browser Playwright test',async ({browser})=>
{
//PlayWright code-

//chrome browser
  //  chrome - plugins/cookies
   const context=await browser.newContext();
   const page= await context.newPage();
  console.log(await page.goto("https://rahulshettyacademy.com/loginpagePractise/"));
 //Css,X path ,type,fill
 await page.locator('#username').fill("rahulshettyacademy");
 await page.locator("[type='password']").fill('Learning@830$3mK2')
 await page.locator("#signInBtn").click();
});


test('Page Playwright test',async ({page})=>
{
//PlayWright code-
//chrome browser
   await page.goto("https://google.com");
   //get the tittle -assertion 
  console.log(await page.title());
  await expect(page).toHaveTitle("Google");

});