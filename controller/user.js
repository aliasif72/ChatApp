const User=require('../model/user');
const bcrypt=require('bcrypt');
// const jwt=require('jsonwebtoken');

exports.signup=async (req,res,next)=>
{
    const { name,email,number,password } = req.body;
    const exist= await User.findOne({where:{email:email}})
       if(exist)
    {
         return res.status(403).json("User already exist!!");
    }
    const saltRounds=10;
    bcrypt.hash(password,saltRounds,(err,hash)=>
    {
    User.create({
       name:name,
       email:email,
       number:number,
       password:hash
    })
   .then(result=>res.status(201).json("Sign up successful!!"))
   .catch(err=>console.log(err));
})
}
 