const mongoose=require("mongoose");

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required:[true, "Name cannot be omitted"],
        trim: true
    },
    Contact_Number: {
        type: String,
        required: [true,"Conatact number cant be omitted"],
        trim: true,
        match:[/^[789]\d{9}$/,"Please enter a valid mobile number"]
    },
    Email_Id: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },
    Password: {
        type: String,
        required: true,
        minlength: 8 ,
        
    },
    Emergency_Contact1: {
        type: String,
        trim: true,
        match:[/^[789]\d{9}$/,"Please enter a valid emergency number"],
        required:true
    },
    Emergency_Contact2: {
        type: String,
        trim: true,
        match:[/^[789]\d{9}$/,"Please enter a valid emergency number"],
        required:true
    },
    PersonType:{
        type:String,
        trim:true,
        required:true,
    }
});

module.exports=mongoose.model("SignUpData",userSchema)