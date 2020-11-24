const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
require('dotenv').config();

//static folder
app.use('/client', express.static(path.join(__dirname, 'client')));

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//set initial route
app.get('/', (req, res) => {
    res.send('Hello World!');
    //include layout: false if no layout folder is present
    //res.render('contact', { layout: false });
});

//start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
});
