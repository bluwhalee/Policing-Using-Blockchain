
const userModel = require('./../../../models/user.model');
const router = require("express").Router();

  
router.post('/registeruser', (req, res) => {
    const { name, email, password, userType } = req.body;

  
    // Create a new FIR document
    const user = new userModel({
        name,
        email,
        password,
        userType,
    });
  
    // Save the FIR document to the database
    user.save()
      .then(() => {
        res.status(200).json({ message: 'User Registered' });
      })
      .catch(err => {
        console.error('Failed to register user', err);
        res.status(500).json({ error: 'Failed' });
      });
  });


module.exports = router;