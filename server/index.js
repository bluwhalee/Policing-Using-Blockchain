const express = require('express');
const app = express();
const dbConnect = require("./DB/DBconnection");
const bodyParser = require('body-parser');
const User = require('./models/user.model.js');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const routes = require('./Routes/rootRoute');
require('dotenv').config()
app.use(cors());
app.use(bodyParser.json());
dbConnect();

app.use("/api",routes)
app.post('/hello', function (req, res) {
    res.send('Welcome');
})



app.listen(1337, ()=>{
    console.log("server started on 1337")
})