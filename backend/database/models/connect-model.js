const mongoose=require("mongoose");

const connectUser=mongoose.Schema({
    nameVol:{
        type:String,
        trim:true,
        required:true
    },
    emailClient:{
        type:String,
        trim:true,
        required:true
    },
    contactVol:{
        type:String,
        trim:true,
        required:true
    },
    mailVol:{
        type:String,
        trim:true,
        required:true
    },
    volMessage:{
        type:String,
        trim:true
    },
    ReqNo:{
        type:Number,
        trim:true,
        required:true
    },

})
module.exports=mongoose.model("connectUser",connectUser);