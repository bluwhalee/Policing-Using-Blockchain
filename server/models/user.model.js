const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
      name: { type: String, required: true, unique:true},
      email: { type: String, required: true, unique:true},
      password: { type: String, required: true },
      userType: { type: String, required: true },
    },
    {collection: 'users'}
    );

const userModel = mongoose.model('user',userSchema);

module.exports = userModel;