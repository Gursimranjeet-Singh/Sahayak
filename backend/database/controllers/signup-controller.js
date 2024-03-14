const User = require("../models/login-signup-model");

exports.createUser = async (req, res) => {
    try {
        console.log(req.body)
        const newUser = await User.create(req.body);
        res.status(201).json(newUser); 
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ error: "Internal server error" }); // Send an error response
    }
}
