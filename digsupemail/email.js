const nodeMailer = require("nodemailer");


let transporter = nodeMailer.createTransport({
    host: "127.0.0.1",
    port: 1025
  });

 const sendEmail= (email)=>{

     return  transporter.sendMail({
        from: `info@digsup.com`,
        to: email,
        subject: `test subject`,
        text: `sample text`
      })
 } 

module.exports = sendEmail;