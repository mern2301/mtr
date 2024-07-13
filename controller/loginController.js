const emailValidation = require("../helpers/emailValidation");
const UserList = require("../models/userSchema");
const bcrypt = require('bcrypt');

async function loginController(req, res) {
    const { email, password } = req.body;
    if (!email) {
        return res.json({ error: 'email is required' })
    } else if (!emailValidation(email)) {
        return res.json({ error: 'Email is not valid' })
    } else if (!password) {
        return res.json({ error: 'password is required' })
    } else {
        const isEmailExist = await UserList.find({ email })
        if (isEmailExist.length > 0) {
            bcrypt.compare(password, isEmailExist[0].password).then(function (result) {
                if (result) {
                    // res.json({success: 'Login Successfully done'})
                    console.log(isEmailExist);
                    res.json(
                        {
                            success: 'Login Successfully done',
                            role: isEmailExist[0].role,
                            email: isEmailExist[0].email
                        }
                    )
                } else {
                    res.json({ error: 'password is not matched' })

                }
            });
        }
        else {
            return res.json({ error: 'email is not match' })
        }
    }

}
module.exports = loginController