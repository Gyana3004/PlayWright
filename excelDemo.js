const Exceljs=require('exceljs');
//import Exceljs from 'exceljs';

let output={row:-1,column:-1}
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


});
