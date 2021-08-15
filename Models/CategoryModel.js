const mongoose=require('mongoose')


const categorySchema=new mongoose.Schema({
    category:{
        type:String,
        required:true
    },
    subcategory:[
        {
        type : mongoose.Schema.Types.ObjectId,
        ref:'SubCategories'
        }
    ]
},{timestamps:true})

const Categories=mongoose.model('Categories',categorySchema)

const subcategorySchema=new mongoose.Schema({
    subcategory:{
        type:String,
        required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Categories"
    }
},{timestamps:true})

const SubCategories=mongoose.model('SubCategories',subcategorySchema)

module.exports={Categories,SubCategories}