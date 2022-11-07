const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "name must be provided"],
    minLength: [3, "Minimum length must be 3"],
    maxLength: [25, "Maximum length must be 25"],
    trim: true,
  },
  email: {
    type: String,
    unique: [true, "email should be unique"],
    required: true,
    validate: {
      validator: (value) => {
        return validator.isEmail(value);
      },
      message: "email must be valid",
    },
  },
  role: {
    type: String,
    required: true,
    default: "candidate",
    enum: {
      values: ["admin", "candidate", "hiring manager"],
      message: "role must be either admin or candidate or hiring manager ",
    },
  },
  status: {
    type: String,
    required: true,
    default: "active",
    enum: {
      values: ["active", "inactive", "blocked"],
      message: "status must be either active or inactive or blocked ",
    },
  },
  password: {
    type: String,
    minLength: 6,
    maxLength: 12,
    required: [true, "password must be provided"],
  },
  confirmPassword: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return value === this.password;
      },
      message: "should be same as password",
    },
  },
});
userSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password);
  this.confirmPassword = undefined;
  next();
});
const User = mongoose.model("User", userSchema);
module.exports = User;
