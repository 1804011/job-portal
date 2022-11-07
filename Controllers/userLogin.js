const express = require("express");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const errorMessage = require("../utilities/errorMessage");
console.log(process.env.ACCESS_TOKEN);
const userLogin = async (req, res) => {
  try {
    const { email, password } = req?.body;
    if (!email || !password) {
      res.send("Please provide your credential");
    }
    const user = await User.findOne({ email });
    if (!user) {
      res.send("User not found");
    } else {
      if (!bcrypt.compareSync(password, user.password)) {
        res.send("email or password is wrong");
      } else {
      }
    }
  } catch (error) {
    res.send(errorMessage(error));
  }
};
module.exports = userLogin;
