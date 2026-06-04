const express = require("express");

const router = express.Router();

// router.use("/sumsung",sumsungroutes)

router.get("/sumsaung",(req,res)=>{
    res.send("m1 doubts")
})

router.get("/m2",(req,res)=>{
    res.send("m2 doubts")
})

router.post("/java",(req,res)=>{
    res.send("java doubts")
})

router.delete("/m1",(req,res)=>{
    res.send("m1 doubts clear")
})

module.exports = router ;