const User = require("../models/login-signup-model");

exports.loginUser = async (req, res) => {
  try {
    console.log(User)
    console.log(req.body)
    const { email, password } = req.body;
    
    const user = await User.findOne({ Email_Id: email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    
    if (user.Password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

