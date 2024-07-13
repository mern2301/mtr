const userSchema = require("../models/userSchema")

async function userDetailsController(req,res){
const data =await userSchema.find({})
res.json(data)
}
module.exports = userDetailsController