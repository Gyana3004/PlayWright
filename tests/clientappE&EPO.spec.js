const {test,expect}=require ('@playwright/test');
//const{test}=require('../Utils/test-base')
const{loginPage}=require('../PageObjects/loginpage');
const{DashboardPage}=require('../PageObjects/DashboardPage')
const{POmanager, POManager}=require('../PageObjects/POManager')
//JSON-->stringify-->jsobject
const dataSet=JSON.parse(JSON.stringify(require('../Utils/placeordertestData.json')))
for (const data of dataSet)


test(`Windows Handling for ${data.productName}`,async({page})=>
{

  const poManager=new POManager(page)
  const loginpage=poManager.getLoginPage();
/*const productName="ZARA COAT 3";  
const useraname="gyanas1997@gmail.com";
const password="March@2026";*/

await loginpage.goTo();
await loginpage.validLogin(data.useraname,data.password);  

//await page.goto("https://rahulshettyacademy.com/client")

const Dashboardpage=poManager.getDashboardPage()
await Dashboardpage.searchProduct(data.productName);
await Dashboardpage.navigateToCart()


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
expect (await page.locator(".user__name [type='text']").first()).toHaveText(data.useraname);
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
