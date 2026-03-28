const {test,expect}=require ('@playwright/test')


test.only("Windows Handling",async({page})=>
{
const productName="ZARA COAT 3";  
const product=page.locator(".card-body");    
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

//Select Product Name:Zara coat 4
const count=await product.count();
for(let i=0;i<count;i++){
    if(await product.nth(i).locator("b").textContent() === productName){
        //add the product into cart
        await product.nth(i).locator("text= Add To Cart").click();
        break;

    }
}
await page.locator("[routerlink*=cart]").click();
await page.locator("div li").first().waitFor();
const bool=page.locator("h3:has-text('productName')").isVisible();
expect(bool).toBeTruthy();
//page.waitForLoadState('networkidle');
});