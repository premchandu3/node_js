const { message } = require("statuses")

let users = [
    { id: 1, name: "avinash" },
    { id: 2, name: "anil" },
    { id: 3, name: "jaswanth" },
    { id: 4, name: "bhargava" }
]

const fetchUsers = async (req,res)=>{
    try{
        res.status(200).json({
            message:"User Fetched"
        })
    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

const createUser = async (req,res)=>{
    try{
        console.log("req----",req);
    console.log("req.body----",req.body);

    let user = req.body;

    users.push(user)
    res.status(201).json({
        message:"User Added",
        user
    })
    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}


module.exports = {
    fetchUsers ,
    createUser 
}