const express = require("express");

const app = express();

const PORT = 3000;

const teachingRoute = require("./teachingRoute");

app.use('/teaching',teachingRoute);
app.use('/teaching',teachingRoute);

app.listen(PORT,()=>{
    console.log(`server is runnig on ${PORT}`)
})