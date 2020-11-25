// const mailer = require('nodemailer');
// require('dotenv').config();
// const {Hello} = require('./hello_template');

// const getEmailData = (to, name, template) => {
//     let data = null;
//     switch(template){
//         case 'Submission':
//             data = {
//                 from : "Ben <hello@mydigitalcanvas.com>",
//                 to,
//                 subject: `${name}, You have a new form submission on goodhandsvegas.com`,
//                 html: Submission()
//             }
//             break;
//         case 'Hello':
//             data = {
//                 from : "Ben <hello@mydigitalcanvas.com>",
//                 to,
//                 subject: `Hello ${name}!`,
//                 html: Hello()
//             }
//             break;
//         default:
//             data;
//     }
//     return data;
// }

// const sendEmail = (to, name, type) => {
//     const smtpTransport = mailer.createTransport({
//         service: 'Gmail',
//         auth: {
//             user: process.ENV.EMAIL_USER,
//             password: process.ENV.EMAIL_PASSWORD,
//         },
//     });
//     const mail = getEmailData(to, name, type);
//     smtpTransport.sendMail(mail, function(err, res) => {
//         if(err){
//             console.error(err)
//         }else{
//             console.log('Email sent successfully!')
//         }
//         stmpTransport.close();
//     })
// };

// module.exports = {sendEmail};
