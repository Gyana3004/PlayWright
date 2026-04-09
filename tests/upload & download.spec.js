const Exceljs=require('exceljs');
const test=require("@playwright/test")

//import Exceljs from 'exceljs';
async function writeexcelTest(searchText,replaceText,Relpath,change)
{
  
    const workbook=new Exceljs.Workbook();
    await workbook.xlsx.readFile(Relpath);

    const Worksheet=workbook.getWorksheet('Sheet1');
   const output= await readExcel(Worksheet,searchText);

    const cell=Worksheet.getCell(output.row,output.column+change.colChange);
    cell.value=replaceText;
    await workbook.xlsx.writeFile(Relpath);
}

async function readExcel(Worksheet,searchText){
      let output={row:-1,column:-1};
Worksheet.eachRow((row,rowNumber)=>
{

row.eachCell((cell,colNumber)=>

{

    if (cell.value===searchText){
        output.row=rowNumber;
        output.column=colNumber;
        //console.log(rowNumber);
        //console.log(colNumber);
    }
    //console.log(cell.value);
    //replace apple to i phone 
})

}

)
return output;



}

//writeexcelTest("Mango",350,{rowChange:0,colChange:2},"excel Sheet practice.xlsx");

test("Upload download excel validation",async({page})=>
{

await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html");
const download=page.waitforEvent('download');
await page.getByRole('button',{name:'Download'}).click();
await download;
writeexcelTest("Mango",350,{rowChange:0,colChange:2},"/Downloads/download.xlxs");
//writeexcelTest("Mango",350,{rowChange:0,colChange:2},"/Downloads/download.xlxs");
await page.locator("#fileinput").setInputFile("/Downloads/download.xlxs");
await page.getByText('mango')









});
/*let output={row:-1,column:-1}
const workbook=new Exceljs.Workbook();
 workbook.xlsx.readFile("Excel Download.xlsx").then(function(){

const Worksheet=workbook.getWorksheet('Sheet1');

Worksheet.eachRow((row,rowNumber)=>
{

row.eachCell((cell,colNumber)=>

{

    if (cell.value=='Banana'){
        output.row=rowNumber;
        output.column=colNumber;
        //console.log(rowNumber);
        //console.log(colNumber);
    }
    //console.log(cell.value);
    //replace apple to i phone 
}


)



}


)

const cell=Worksheet.getCell(output.row,output.column);
cell.value="Republic";
workbook.xlsx.writeFile("Excel Download.xlsx").then(function(){})


});*/
