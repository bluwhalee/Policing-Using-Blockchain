const mongoose = require('mongoose');

// Define the FIR schema
const FIRSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cnic: {
    type: String,
    required: true
  },
  locations: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  },
  evidence: {
    type: String,
    required: true
  },
  suspects: {
    type: String,
    required: true
  }
});

// Create the FIR model
const firModel = mongoose.model('FIR', FIRSchema);

module.exports = firModel;
