const fs = require("fs");

const path = require("path");
const { convertProcessSignalToExitCode } = require("util");

//---> to read file
// fs.readFile("newfile.txt","utf8",(error,sucess)=>{
//     if(error){
//         console.log("error-------",error)
//     }else{
//         console.log("File readed Successfully",sucess)
//     }
// })

//----------->
// fs.readFileSync("newfile.txt","utf8",(err,res)=>{
//     if(err){
//         console.log("error-----",err)
//     }else{
//         console.log("File readed Successfully",res)
//     }
// })

// let data = fs.readFileSync("newfile.txt","utf8");
// console.log("data------",data)

//---------> Create file

// fs.open("newfile1.txt","w",(error,sucess)=>{
//     if(error){
//         console.log("error-------",error)
//     }
//     else{
//         console.log("File Created Sucessfully")
//     }
// })

// let string = `Why do we use it?
// It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


// Where does it come from?
// Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

// The standard chunk of Lorem Ipsum used since 1966 is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

// Where can I get some?
// There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.

// 5
// 	paragraphs
// 	words
// 	bytes
// 	lists
// 	Start with 'Lorem
// ipsum dolor sit amet...'

// Donate: If you use this site regularly and would like to help keep the site on the Internet, please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated - click here to donate using PayPal. Thank you for your support. Donate bitcoin: 16UQLq1HZ3CNwhvgrarV6pMoA2CDjb4tyF
// Translations: Can you help translate this site into a foreign language ? Please email us with details if you can help.`;

// fs.writeFile("newfile1.txt",string,(error,sucess)=>{
//     if(error){
//         console.log("error-----",error)
//     }else(
//         console.log("Data Written Succesfully")
//     )
// })


// let newtext = "\nChristina Murillo,Lance Holloway,Mae Cardenas,Johnathan Sanford,Emerald Golden"

// fs.appendFile("newfile1.txt",newtext,(error)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log("Data Appended Succesfulluy")
//     }
// })


// let data = fs.readFileSync("newfile.txt","utf8");
// let data2 = fs.readFileSync("newfile1.txt","utf8");

// let newdata = `${data}--------@@@@@@@@@@@@-----------\n${data2}`;

// fs.writeFileSync("merged.txt",newdata);

// console.log("Files Merged Succesfully")


//-----------> Delete file

// fs.unlink("newfile.txt",(error)=>{
//     if (error) console.log(error)

//         console.log("File Deleted Successfully")

// })

// fs.rename("newfile","newfile.txt",(err)=>{
//     if(err) console.log(err)
//         console.log("Renamed File")
// })

//-------> to acess the files outside the folder

// let data = fs.readFile("../outsidefolde/duplicate.txt","utf8",(err)=>{
//     if(err){console.log(err)
//     }else{
//         console.log("Data Read Successfully")}
    
// });


// const filepath = path.join(__dirname,"..","outsidefolde","duplicate.txt")

// let data = fs.readFileSync(filepath,"utf8");

// console.log(data);

// fs.rename("../outsidefolde/Renamed",
//     "../outsidefolde/Renamed.txt",
//     (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("File Renamed");
//     }
// })

// fs.open("../outsidefolde/filenew.txt","w",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("File created succesfully")
//     }
// })

// let newdatas = "the data is added otside side the folder using path"

// fs.writeFile("../outsidefolde/filenew.txt",newdatas,(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Data Added succesfully")
//     }
// });

// fs.mkdir("NewFolde",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Folder Created")
//     }
// })


fs.readdir(".", (err, files) => {
    if (err) {
        console.log(err);
    } else {
        console.log(files);
    }
});