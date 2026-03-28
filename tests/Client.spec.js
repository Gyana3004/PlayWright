const{test, expect}=require('@playwright/test');





test('First Browser Playwright test',async ({page})=>
{
//PlayWright code-
const Username=page.locator('#userEmail');
const UserPwd= page.locator("#userPassword");
const signIn=await page.locator("[value='Login']");
await page.goto("https://rahulshettyacademy.com/client")

await Username.fill("gyanas1997@gmail.com");
await UserPwd.fill("March@2026");
await signIn.click();

//await page.waitForLoadState('networkidle');not work allternate way
await page.locator(".card-body b").first().waitFor();
const allTitel=await page.locator(".card-body b").allTextContents();
console.log(allTitel);
});

