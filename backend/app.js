const express = require("express");
const path = require("path");
const app = express();
const connectDB = require("./database/connect");
require("dotenv").config()

const loginRouter = require("./router/login");
const signupRouter = require("./router/signup");

app.use(express.static(path.join(__dirname, "..", "frontend", "build")));
app.use(express.urlencoded({ extended: false }));

app.use("/signup-form", signupRouter);
app.use("/login-form", loginRouter);

app.get("*", function (req, res) {
  res.sendFile(
    path.resolve(__dirname, "..", "frontend", "build", "index.html")
  );
});

const start = async () => {
  try {
    await connectDB(process.env.Connection_String);
    app.listen(3000, () => {
      console.log("Started Listening to port 3000");
    });
  } catch (err) {
    console.error("error :" + err);
  }
};

start();
