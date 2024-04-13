const {sign}=require("jsonwebtoken");
require("dotenv").config();

const createAccessToken=(id)=>{
    return sign({id},process.env.ACCESS_TOKEN_SECRET,{expiresIn:60*5})
}

const createRefreshToken=(id)=>{
    return sign({id},process.env.REFRESH_TOKEN_SECRET,{expiresIn:"90d"})
}

const sendAccessToken=(res,accesstoken,PersonType)=>{
   res.status(201).json({
    accesstoken:accesstoken,
    message: "Sign in Successful",
    type: "success",
    PersonType:PersonType
   })
}
 
const sendRefreshToken=(res,refreshtoken)=>{
   res.cookie("refreshtoken", refreshtoken, {
        httpOnly: true,
      });
}

module.exports={createAccessToken,createRefreshToken,sendAccessToken,sendRefreshToken}