const{test, expect}=require('@playwright/test');





test('First Browser Playwright test',async ({page})=>
{
//PlayWright code-
const Username=page.locator('#username');
const SignIn= page.locator("#signInBtn");
const cardTitel=await page.locator(".card-body a ");
//chrome browser
  //  chrome - plugins/cookies
   //const context=await browser.newContext();
   // const page= await context.newPage();
  console.log(await page.goto("https://rahulshettyacademy.com/loginpagePractise/"));
 //Css,X path ,type,fill
 await page.locator('#username').fill("rahulshetty");
 await page.locator("[type='password']").fill('Learning@830$3mK2')
 await page.locator("#signInBtn").click();
 console.log(await page.locator("[style*='block']").textContent());

await expect(page.locator("[style*='block']")).toContainText('Incorrect username/password.');

 await Username.fill("")
 await Username.fill("rahulshettyacademy");
 await SignIn.click()
 //console.log(await page.locator(".card-body a ").first().textContent())
 //console.log(await page.locator(".card-body a ").nth(1).textContent())
 const allTitel=await cardTitel.allTextContents();
 console.log(allTitel);
});

