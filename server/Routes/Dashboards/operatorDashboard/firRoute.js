const multer = require('multer');
const FIRModel = require('./../../../models/fir.model');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const originalExtension = file.originalname.split('.').pop();
        const filename = file.originalname.slice(0, -(originalExtension.length + 1));
        cb(null, "evidence-"+uniqueSuffix + '.' + originalExtension); 
    }
  });
  
const upload = multer({ storage });
const router = require("express").Router();
const path = require('path');

router.post('/fir', upload.single('evidence'), (req, res) => {
    const { name, cnic, locations, details, suspects } = req.body;
    const evidence = req.file.path;
  
    // Create a new FIR document
    const newFIR = new FIRModel({
      name,
      cnic,
      locations,
      details,
      evidence,
      suspects
    });
  
    // Save the FIR document to the database
    newFIR.save()
      .then(() => {
        res.status(200).json({ message: 'FIR submitted successfully' });
      })
      .catch(err => {
        console.error('Failed to submit FIR', err);
        res.status(500).json({ error: 'Failed to submit FIR' });
      });
  });

router.get('/firs', (req, res) => {
    FIRModel.find()
        .then(firs => {
            console.log(firs);
    res.status(200).json(firs);
    })
    .catch(err => {
    console.error('Failed to fetch FIR data', err);
    res.status(500).json({ error: 'Failed to fetch FIR data' });
    });
});
router.get('/evidence/:filename', (req, res) => {
    let filename = req.params.filename;
    const filePath = path.join('D:/FYP/PUB/server/uploads', filename);
    console.log(filePath)
  
    res.sendFile(filePath);
  });
module.exports = router;