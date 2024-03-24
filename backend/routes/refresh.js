const express=require("express");
const router=express.Router();
const User=require("../database/models/login-signup-model")
const { verify } = require("jsonwebtoken");

router.post("/",async (req,res)=>{
  try{
    const { refreshtoken } = req.cookies;

    if(!refreshtoken){
        return res.status(500).json({
            type:"error",
            message:"No refresh token! 🤔"
        })
    }

    let id;
    try {
        id =await  verify(refreshtoken, process.env.REFRESH_TOKEN_SECRET).id;
      } catch (error) {
        return res.status(500).json({
          message: "Invalid refresh token! 🤔",
          type: "error",
        });
      }

      if(!id){
        return res.status(500).json({
            message: "Invalid refresh token! 🤔",
            type: "error",
          });
      }

      const user= await User.findById(id);
      if(!user){
        return res.status(500).json({
          message:"User doesn't exist! 😢"
        })
      }

      if (user.refreshtoken !== refreshtoken)
      return res.status(500).json({
        message: "Invalid refresh token! 🤔",
        type: "error",
      });

      const accessToken = createAccessToken(user._id);
      const refreshToken = createRefreshToken(user._id);

      user.refreshtoken = refreshToken;

      sendRefreshToken(res, refreshToken);
      return res.json({
      message: "Refreshed successfully! 🤗",
      type: "success",
      accessToken,
    });

    
  }
  catch(error){
    res.status(500).json({
      type: "error",
      message: "Error refreshing token!",
      error,
    });
  }
  }
)


module.exports=router;