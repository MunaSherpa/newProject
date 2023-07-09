const { users } = require("../model");
const bcrypt = require('bcrypt');

exports.registerUser = async(req, res)=>{
   
    // const email = req.body.email
    // const password = req.body.password

    const {email, user,  password} = req.body
    await users.create({
        name: user,
        email: email,
        password: bcrypt.hashSync(password,10)
})
    console.log(email, user, password);
    res.redirect('/login')
 


}