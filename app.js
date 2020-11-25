const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// app.post('/api/send', (req, res) => {
//     console.log(req.body);
//     sendEmail(to, name, type);
// });

app.use('/', (req, res) => {
    res.send('Hello!');
});

//start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
});
