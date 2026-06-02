const express = require("express");

const app = express();

const port = 3000 ;

app.use(express.json())

let users = [{id:1,name:"Prem"},
             {id:2,name:"vishwak"}
            ]

app.get("/fetchUsers",(req,res)=>{
    console.log("fetch users api")
    res.json(users);
})

app.post("/createUsers",(req,res)=>{
    // let user = {id:3,name:"Kiran"}
    console.log("req----",req);
    console.log("req.body----",req.body);

    let user = req.body;

    users.push(user)
    res.status(201).json({
        message:"User Added",
        user
    })
})

app.put("/updateUsers",(req,res)=>{
    console.log("req.query------",req.query.id);
    console.log("req.body-----",req.body)

    let musers = users.find((u)=>{
        if(u.id==Number(req.query.id)){
            u.name = req.body;

        console.log("usres----",u)
        return u;
        }
    })
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
});