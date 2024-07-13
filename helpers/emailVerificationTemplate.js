function emailVerficationTemplate(token){
  return `<div><img alt=""src=https://i.ibb.co/Dp6QWtW/Logo-1.png style=width:100px><h1 style=font-size:40px;>Welcome to OREBI Ecommerce.</h1><p style=font-size:18px;font-family:Arial,Helvetica,sans-serif>please verify your email.</p><a href="http://localhost:3000/api/v1/authentication/emailverification/${token}"style="background-color:#262626;padding:10px 20px;color:#fff;font-size:24px;text-decoration:none">Confirm your email</a></div>`
}
module.exports = emailVerficationTemplate;