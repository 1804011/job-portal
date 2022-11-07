const express = require("express");
const userLogin = require("../Controllers/userLogin");
const userSignup = require("../Controllers/userSignup");
const routes = express.Router();
routes.post("/signup", userSignup);
routes.get("/login", userLogin);

module.exports = routes;
