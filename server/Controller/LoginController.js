

const bodyParser = require('body-parser');
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
require('dotenv').config()




async function authenticateLogin (req, res)  {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
  
  
      if (!user) {
        return res.status(404).send({ message: 'User not found' });
      }
  
      if (user.password !== password) {
        return res.status(401).send({ message: 'Incorrect password' });
      }
      console.log(JSON.stringify(user.userType));
      const token = jwt.sign({
        email: user.email,
        userType: user.userType,
        userId: user._id
      },process.env.ACCESS_TOKEN_SECRET )
      res.json({status: 'success', user:token});
    } 
    catch (err) {
      res.status(500).send("helllooo");
    }
  };

module.exports = {authenticateLogin}