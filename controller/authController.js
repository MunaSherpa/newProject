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





exports.loginUser = async(req, res) =>{
   
    const {email, password}= req.body
    const userExist = await users.findAll({ // findall check the data in database
       where:{
        email: email
       }
    })

    if(userExist.length == 0)
    {
        res.render('error.ejs')
    }else{
        // console.log(userExist[0].Password)
        // console.log(password)
        const isPasswordCorrect =  bcrypt.compareSync(password,userExist[0].password)
        if(isPasswordCorrect){
            res.redirect('/home')

        }else{
            res.redirect('/login')
        }
    }
    
    console.log(userExist)

}