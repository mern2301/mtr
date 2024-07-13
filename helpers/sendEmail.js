const nodemailer = require("nodemailer");

async function sendEmail(email, subject, template){
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "mern2205cit@gmail.com",
          pass: "lydiswmtxfqdkhxq",
        },
      });
    
      const info = await transporter.sendMail({
        from: 'OREBI',
        to: email,
        subject: subject,
        html: template,
      });
}
module.exports = sendEmail;