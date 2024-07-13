const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv')
// orebiecommerce
// YYNAxH9tipwQIoJK
// mongodb+srv://<username>:<password>@cluster0.sogmn7b.mongodb.net/?retryWrites=true&w=majority
function dbConnection(){
    mongoose.connect(process.env.MONGODBURI)
    .then(() => console.log('Database Connected!'));
}
module.exports = dbConnection;