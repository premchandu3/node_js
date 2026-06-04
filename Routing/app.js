const express = require("express")

const app = express();

const PORT = 3000;

app.use(express.json())

app.get("/Products",(req,res)=>{
    console.log("Products Page")
    res.send("Products page")
})

app.post("/orders",(req,res)=>{
    console.log("Orders page")
})

app.put("/Cart",(req,res)=>{
    console.log("Cart Page")
})


app.delete("/users", (req, res) => {
    res.send("users page")
})

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
});