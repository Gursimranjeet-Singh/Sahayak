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
    
    const user=await User.findOne({Email_Id:req.body.Email_Id})
    
    
    if(!user){
      return res.status(500).json({
        status:"error",
        message:"User doesn't exist! 😢"
      })
    }
    
    const isMatched=await compare(Password,user.Password)
    
    if(!isMatched){
      return res.status(500).json({
        status:"error",
        message:"Password is incorrect! ⚠️"
      })
    }
   
    const accessToken = createAccessToken(user._id);
    const refreshToken = createRefreshToken(user._id);

    
    user.refreshtoken = refreshToken;
    await user.save();

    
    sendRefreshToken(res, refreshToken);
    sendAccessToken(res, accessToken,user.PersonType);
    
    
  } catch (error) {
    res.status(500).json({
      type: "error",
      message: "Error signing in!",
      error,
    });
  }
};
