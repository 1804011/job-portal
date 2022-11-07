const User = require("../Schemas/User.schema");
const errorMessage = require("../utilities/errorMessage");

const userSignup = async (req, res) => {
  try {
    const result = await User.create(req.body);
    res.send("Successfully signed up");
  } catch (error) {
    res.send(errorMessage(error));
  }
};
module.exports = userSignup;
