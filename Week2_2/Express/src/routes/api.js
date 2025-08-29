const express = require('express');
const { createUser, handleLogin, getUser, getAccount,forgot_password } = require('../controllers/userController');
const auth = require("../middleware/auth");
const delay = require('../middleware/delay');

const routerAPI = express.Router();
routerAPI.all("/", auth)
routerAPI.post("/register", createUser);
routerAPI.post("/login", handleLogin);
routerAPI.get("/user", getUser);
routerAPI.get("/account", delay, getAccount);
routerAPI.post("/forgot-password", forgot_password);
module.exports = routerAPI; //export default