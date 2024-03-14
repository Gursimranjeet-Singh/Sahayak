
const express = require('express');
const router = express.Router();
const userController=require("../database/controllers/signup-controller")
router.post("/",userController.createUser);

module.exports = router;
