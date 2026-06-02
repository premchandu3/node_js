const XLSX = require("xlsx");

const workbook = XLSX.readFile("D:/EXCEL/Book.xlsx");

console.log(workbook.SheetNames);

const sheetName = workbook.SheetNames[0];

const worksheet = workbook.Sheets[sheetName];

const data = XLSX.utils.sheet_to_json(worksheet);

console.log(data);   


//-----> print only product names

data.forEach((product)=>{
    console.log(product.product_name);
})

//--------> Print only Brand names

data.forEach((product)=>{
    console.log(product.brand_name);
});


const result = data.filter((product)=>{
    if(product.rating>4){
        return true;
    }
    return false;
})

console.log(result);