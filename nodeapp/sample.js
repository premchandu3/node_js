const express = require("express");

const app = express();

app.get("/prem",(req,res)=>{
    res.json({name:"prem",age:20,education:"b.tech",percentage:81,place:"kanigiri"})
})

app.get("/niranjan",(req,res)=>{
    res.json({name:"Niranjan",age:21,education:"b.tech",percentage:80,place:"ongole"})
})

app.get("/mohan",(req,res)=>{
    res.json({name:"Mohan",
    age:21,education:"b.tech",percentage:92,place:"khamam"})
})

app.get("/Manu",(req,res)=>{
    res.json({name:"manu nambula",age:20,education:"b.tech",percentage:87,place:"Mangalamanyam"})
})


app.listen(3000,()=>{
    console.log("Server is running in 3000 port")
})