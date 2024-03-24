const {sign}=require("jsonwebtoken");
require("dotenv").config();

const createAccessToken=(id)=>{
    return sign({id},process.env.ACCESS_TOKEN_SECRET,{expiresIn:60*15})
}

const createRefreshToken=(id)=>{
    return sign({id},process.env.REFRESH_TOKEN_SECRET,{expiresIn:"90d"})
}

const sendAccessToken=(res,accesstoken)=>{
   res.status(201).json({
    accesstoken:accesstoken,
    message: "Sign in Successful 🥳",
    type: "success",
   })
}
 
const sendRefreshToken=(res,refreshtoken)=>{
   res.cookie("refreshtoken", refreshtoken, {
        httpOnly: true,
      });
}

module.exports={createAccessToken,createRefreshToken,sendAccessToken,sendRefreshToken}