const mongoose=require("mongoose");
const availableSchema=mongoose.Schema({
    ReqNo:{
        type:Number,
        trim:true,
        required:true
    },
    clientName:{
        type:String,
        required:true,
        trim:true,
    },
    clientEmail:{
        type:String,
        required:true,
        trim:true,
    },
    city:{
        type:String,
        required:true,
        trim:true,
    },
    reqType:{
        type:String,
        trim:true,
        required:true
    },
    ScheduledDate:{
        type:Date,
        trim:true,
        required:true
    },
    postedDate:{
        type:Date,
        trim:true,
        required:true
    },
    Source:{
        type:String,
        trim:true,
        default:" "
    },
    Destination:{
        type:String,
        trim:true,
        default:" "
    },
    reqMessage:{
        type:String,
        trim:true
    }
})

module.exports=mongoose.model("availabeSchema",availableSchema)