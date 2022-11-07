console.clear();
const express = require("express");
const User = require("./Schemas/User.schema");
const cors = require("cors");
const colors = require("colors");
const { mongoose } = require("mongoose");
const userRoute = require("./Routes/user.route");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/api/v1/user", userRoute);
mongoose.connect("mongodb://localhost:27017/jobPortal").then(() => {
  console.log("server connected".bold.yellow);
});

app.get("/", (req, res) => res.send("welcome"));
app.listen(port, () => console.log("server is listening".bold.red));
