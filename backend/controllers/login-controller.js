const { compare } = require("bcryptjs");
const User = require("../database/models/login-signup-model");
const {
  createAccessToken,
  createRefreshToken,
  sendAccessToken,
  sendRefreshToken,
} = require("../tokens/token");

exports.loginUser = async (req, res) => {
  console.log(req.body)
  try {
    const {Email_Id,Password}=req.body;
    console.log("before find")
    const user=await User.findOne({Email_Id:req.body.Email_Id})
    console.log("after find")
    console.log(user)
    if(!user){
      return res.status(500).json({
        status:"error",
        message:"User doesn't exist! 😢"
      })
    }
    console.log("before match")
    const isMatched=await compare(Password,user.Password)
    console.log("after match match")
    if(!isMatched){
      return res.status(500).json({
        status:"error",
        message:"Password is incorrect! ⚠️"
      })
    }
    console.log("before create")
    const accessToken = createAccessToken(user._id);
    const refreshToken = createRefreshToken(user._id);

    
    user.refreshtoken = refreshToken;
    await user.save();

    console.log("after create and before send")
    sendRefreshToken(res, refreshToken);
    sendAccessToken(res, accessToken);
    
    
  } catch (error) {
    res.status(500).json({
      type: "error",
      message: "Error signing in!",
      error,
    });
  }
};
