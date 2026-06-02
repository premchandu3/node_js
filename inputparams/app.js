const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json())

function authentication(req,res,next){

    const password = req.query.password;

    if(password=="12345"){
        console.log(`password is correct`)
        next()
    }else{
        console.log(`password is incorrect`)
        res.status(401).send(`Unauthourized`)
    }


}

app.get("/fetchUser",authentication,(req,res)=>{
    console.log("req.query-----",req.query)
    console.log(req.query.id)
    console.log(req.query.name)

    res.send(req.query)
})

app.post("/createUser",(req,res)=>{
    console.log("req.body----",req.body)
    console.log(req.body.id)
    console.log(req.body.name)

    res.send(req.body)
})

app.get("/singleUser/:id/:name/:collage",(req,res)=>{
    console.log("req.params====",req.params)

    res.send(req.params)
})

// app.put("/updateUser",(req,res)=>{
//     console.log("req.params----",req.params)
//     console.log(req.params.id)
//     console.log(req.params.name)
// })


app.listen(PORT,()=>{
    console.log(`server is runnig on ${PORT}`)
})