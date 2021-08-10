const Users=require('../Models/AuthModel')
const {hash,compare}=require('bcrypt')
const {sign}=require('jsonwebtoken')

const registerController=async(req,res)=>{
    const {name,email,password,country}=req.body
    if(!name || !email || !password || !country){return res.json({msg:"Invalid Creadentials !"})}
    try {
        const user=await Users.findOne({email})
        if(user){return res.json({msg:"User Already Exist"})}
        const hashpassword=await hash(password,10)
        const User=new Users({
            name,email,password:hashpassword,country
        })
        await User.save()
        res.json({msg:"Account Created Successfully"})
    } catch (error) {
        res.json({error})
    }
}
const loginController=async(req,res)=>{
    const { email,password}=req.body
    if(!email || !password){return res.json({msg:"Invalid Creadentials !"})}
    try {
        const User= await Users.findOne({email})
        if(!User){return res.json({msg:"User Not Found"})}
        const cheak=await compare(password,User.password)
        if(!cheak){return res.json({msg:"Password doesn't match"})}
        const token= await sign({email},process.env.JWT_SECRET || "SIYAM",{expiresIn:'7d'})
        res.json({msg:"Login Successfull",token})
    } catch (error) {
        res.json({error})
    }
}

module.exports={registerController,loginController}