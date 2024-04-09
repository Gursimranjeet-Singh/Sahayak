const express = require("express");
const path = require("path");
const app = express();
const connectDB = require("./database/connect");
require("dotenv").config();

const login_signup_Router = require("./routes/login-signup");
const auth = require("./routes/auth");
const refresh = require("./routes/refresh");
const logoutUser = require("./routes/Logout");
const vol_req=require("./routes/vol-req")

app.use(express.static(path.join(__dirname, "..", "frontend", "build")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/logout", logoutUser);
app.use("/user", login_signup_Router);
app.use("/refresh_token", refresh);
app.use("/protected", auth);
// to handle request for volunteering request generation and connection with volunteer
app.use("/req",vol_req)

app.get("*", function (req, res) {
  res.sendFile(
    path.resolve(__dirname, "..", "frontend", "build", "index.html")
  );
  // res.send("hello accepting request")
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
