const express = require("express");

const app = express();

const userRoutes = require("./src/routes/user.Routes")

const authentication = require("./src/middleWare/auth.middlewarw")



app.use(express.json());

app.use(authentication.authentication);

app.use("/user",userRoutes);



module.exports = app;