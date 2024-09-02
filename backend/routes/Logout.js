const express=require("express");
const router=express.Router();


router.post("/",(req,res)=>{
    console.log(req.url);
    res.clearCookie("refreshtoken");
  return res.json({
    message: "Logged out successfully! 🤗",
    type: "success",
  });
})
module.exports=router;
