 const {test,assert, expect}=require('@playwright/test')


 test.only("Validate Hide WebElement",async({page})=>
{


await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
/*await page.goto("https://www.google.com/");
await page.goBack();
await page.goForward();*/
await expect(page.locator("#displayed-text")).toBeVisible();
await page.locator("#hide-textbox").click();
await expect(page.locator("#displayed-text")).toBeHidden();


//Handling the pop-up
//playwright called dialuge
await page.pause();
await page.locator("#confirmbtn").click();
page.on('dialog',dialog=>dialog.accept())//dismiss

//cross over the mouse
await page.locator("#mousehover").hover();
const framespage= page.frameLocator("#courses-iframe");
await framespage.locator("li a[href*='lifetime-access']:visible").click();
const textcheck=await framespage.locator(".text h2").textContent();

console.log(textcheck.split(" ")[1]);
}






);