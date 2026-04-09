class loginPage{

constructor(page){
    this.page=page;
this.signInbutton=page.locator("[value='Login']");
this.useraname=page.locator('#userEmail');
this.password=page.locator("#userPassword");
}
async goTo(){

    await this.page.goto("https://rahulshettyacademy.com/client");
    
}
async validLogin(useraname,password){
       

        await this.useraname.type(useraname);
        await this.password.type(password);
        await this.signInbutton.click();

}
}
module.exports={loginPage};