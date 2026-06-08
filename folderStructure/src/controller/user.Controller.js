const connectDB = require("../db/db_connect");

// let users = [
//     { id: 1, name: "avinash" },
//     { id: 2, name: "anil" },
//     { id: 3, name: "jaswanth" },
//     { id: 4, name: "bhargava" }
// ]

const fetchUsers = async (req, res) => {

    try {
        const db = await connectDB();

        const allEmps = await db.collection("emp").find().toArray();

        // console.log("allEmps-----", allEmps)
        res.status(200).json({
            message: "users fetched",
            allEmps
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

}

const createUsers = async (req, res) => {

    try {
        let user = req.body;
        console.log("user---", user)
        // users.push(user);

        const db = await connectDB();

        const allEmps = await db.collection("emp").insertOne(req.body);

        res.status(201).json({
            message: "Employee added"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

}

const fileUpload = async (req, res) =>{
    try {


        //multer
        //formidable
        // xlsx
        //winston
        
        res.status(201).json({
            message: "Employee added"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


module.exports = {
    fetchUsers,
    createUsers,
    fileUpload
}