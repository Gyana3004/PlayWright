const{loginPage}=require('./loginpage');
const{DashboardPage}=require('./DashboardPage')


class POManager{

constructor(page){
this.page=page;
  this.loginpage=new loginPage(this.page);
this .Dashboardpage=new DashboardPage(this.page);

}
getLoginPage(){
    return this.loginpage;

}
getDashboardPage(){
    return this.Dashboardpage;
}

}
module.exports={POManager};