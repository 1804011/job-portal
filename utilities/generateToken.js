const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  const { email, role, status } = user;
  const token = jwt.sign({ email, role, status }, process.env.ACCESS_TOKEN, {
    expiresIn: "2d",
  });
  return token;
};
module.exports = generateToken;
