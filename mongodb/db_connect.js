const { MongoClient } = require("mongodb");

const URL = "mongodb://localhost:27017";

const client = new MongoClient(URL);

async function connection() {

    try {
        // connect Database
        await client.connect();
        console.log("Mongodb Connected")

        //connect Database
        const db = client.db("studentsDB");
        // console.log("db---------",db);

        // connect to collections
        const students = db.collection("students");

        const singlestudent = await students.find({ name: "Prem" }).toArray();

        // Insert Data

        const Createstu = await students.insertOne({
            "name": 'Mani',
            "age": 24,
            "department": 'ece'
        })

        console.log("Createstu---------", Createstu.insertedId);

        // updaate data

        const updatestu = await students.updateOne({
            "name": "Mani",
            "department": "ece"
        },
            {
                $set: {
                    "name": "mani Teja",
                    "department": "cse"
                }
            })

        console.log("updatestu------",updatestu.acknowledged);

    

    } catch (error) {
        console.log(`connection fn error---${error}`)
    }
    finally{
        console.log("Fianlly Block")
    }
}

connection();