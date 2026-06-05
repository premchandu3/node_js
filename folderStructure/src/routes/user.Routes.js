const express = require("express");

const router = express.Router();

const userController = require("../controller/user.Controller")

// crud operations
router.route("/")
    .get(userController.fetchUsers)
    .post(userController.createUser)
    //.put();

// router.route("/:id")
//     .get()
//     .post()
//     .put()
//     .delete();


module.exports = router;