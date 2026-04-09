class DashboardPage{
constructor(page){
this.product=page.locator(".card-body");  
this.productText= page.locator(".card-body b");
this.cart=page.locator("[routerlink*=cart]");
}

async searchProduct(productName){

//await page.waitForLoadState('networkidle');not work allternate way
await this.productText.first().waitFor();
const allTitel=await this.productText.allTextContents();
console.log(allTitel);

//Select Product Name:Zara coat 4
const count=await this.product.count();
for(let i=0;i<count;i++){
    if(await this.product.nth(i).locator("b").textContent() === productName){
        //add the product into cart
        await this.product.nth(i).locator("text= Add To Cart").click();
        break;

    }
}


}
async navigateToCart(){
    await this.cart.click();
}
}

module.exports={DashboardPage};