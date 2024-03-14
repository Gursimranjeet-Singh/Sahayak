const mongoose=require("mongoose");

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        trim: true
    },
    Contact_Number: {
        type: String,
        required: true,
        trim: true
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
        minlength: 8 
    },
    Emergency_Contact1: {
        type: String,
        trim: true
    },
    Emergency_Contact2: {
        type: String,
        trim: true
    }
});


module.exports=mongoose.model("SignUpData",userSchema)