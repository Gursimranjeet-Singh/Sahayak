const User = require("../database/models/login-signup-model");
const { hash } = require("bcryptjs");

exports.createUser = async (req, res) => {
    
    try {
        const {Name,Email_Id, Password,Emergency_Contact2,Emergency_Contact1,Contact_Number } = req.body;
    
        const user = await User.findOne({ Email_Id: Email_Id });

        if (user) {
            return res.status(409).json({
                type: "error",
                message: "User already exists! Try logging in. 😄"
            });
        } else {
            
            const hashedPassword = await hash(Password, 10);

          
            const newUser = new User({
                Email_Id: Email_Id,
                Password: hashedPassword,
                Contact_Number:Contact_Number,
                Emergency_Contact2:Emergency_Contact2,
                Emergency_Contact1:Emergency_Contact1,
                Name:Name

            });

           
            await newUser.save();

           
            res.status(200).json({
                type: "success",
                message: "User created successfully! 🥳"
            });
        }
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ type: "error", message: "Error creating user! Please Try After Sometime" });
    }
};

