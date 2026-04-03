const{test, expect, request}=require('@playwright/test');

const loginPayload={userEmail:"gyanas1997@gmail.com",userPassword:"March@2026"}
let token;
test.beforeAll(async()=>
{

    const APIContext=await request.newContext();
    const loginResponse=await APIContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{data:loginPayload})
expect(loginResponse.ok()).toBeTruthy();
const loginresponseJson=await loginResponse.json();
 token=loginResponse.token;
console.log(token);
});

test.beforeEach(()=>



{






});







test("API Integration test",async({page})=>
{

  page.addInitScript(value=>{

    window.localStorage.setItem('token',value);
  },token);
const productName="ZARA COAT 3";  
const email="gyanas1997@gmail.com";
/*const product=page.locator(".card-body");    
const Username=page.locator('#userEmail');
const UserPwd= page.locator("#userPassword");
const signIn=await page.locator("[value='Login']");
await page.goto("https://rahulshettyacademy.com/client")

await Username.fill("gyanas1997@gmail.com");
await UserPwd.fill("March@2026");
await signIn.click();*/

//await page.waitForLoadState('networkidle');not work allternate way
await page.goto("https://rahulshettyacademy.com/client")

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

await page.locator("text=Checkout").click();
await page.locator("[placeholder*='Select Country']").pressSequentially("ind", { delay :450 });
const dropdown=page.locator(".ta-results");
await dropdown.waitFor();
const optionscount=await dropdown.locator("button").count();
for (let i=0;i<optionscount;i++)
{
  const text=await dropdown.locator("button").nth(i).textContent();
  if (text === " India"){
    await dropdown.locator("button").nth(i).click();
    break;
  }
}
expect (await page.locator(".user__name [type='text']").first()).toHaveText(email);
await page.locator(".action__submit ").click();
await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
const orderId=await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
console.log(orderId)
//await page.pause();
await page.locator("button[routerlink*='myorders']").click();
await page.locator("tbody").waitFor();
//Validation order id 
const rows=await page.locator("tbody tr");



for (let i=0;i<await rows.count();i++){

const rowOrderID=await rows.nth(i).locator("th").textContent();
if (orderId.includes(rowOrderID)){
rows.nth(i).locator("button").first().click();
break;
}

}
const orederIDdetails=await page.locator(".col-text ").textContent();
expect(orderId.includes(orederIDdetails)).toBeTruthy();

});
