const mongoose=require('mongoose')

const authSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    }
},{
    timestamps:true
})
const Users=mongoose.model("Users",authSchema)

module.exports=Users