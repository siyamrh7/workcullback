const {Categories,SubCategories}=require('../Models/CategoryModel')


const postCategory=async(req,res)=>{
    try {
        const {category}=req.body
        if(!category ){return res.json({msg:"Invalid Creadentials"})}
        const Category=new Categories({
            category
        })
        const categ=await Category.save()
        res.json({msg:`Category ${categ.category} Created`})
        
    } catch (error) {
        res.json({msg:error.message})
    }
}
const postSubCategory=async(req,res)=>{
    try {
        const {category,subcategory}=req.body
        if(!category || !subcategory){return res.json({msg:"Invalid Creadentials"})}
        const subCategory=new SubCategories({
            subcategory,category
        })
        const subcateg=await subCategory.save()
        const categ=await Categories.findByIdAndUpdate(category,{
            $push:{subcategory:subcateg._id}
        })
        res.json({msg:`Sub Category ${subcateg.subcategory} Created of ${categ.category}`})
        
    } catch (error) {
        res.json({msg:error.message})
    }
}
const getCategory=async(req,res)=>{
    try {
        const category=await Categories.find({}).populate('subcategory')
        res.json({msg:category})

    } catch (error) {
        res.json({msg:error.message})
    }
}
const deleteCategory=async(req,res)=>{
    try {
        const categ=await Categories.findByIdAndDelete(req.body.id)
        res.json({msg:`Category ${categ.category} Deleted`})
    } catch (error) {
        res.json({msg:error.message})
    }
}
const deleteSubCategory=async(req,res)=>{
    try {
        const subcateg=await SubCategories.findByIdAndDelete(req.body.id)
        res.json({msg:`SubCategory ${subcateg.subcategory} Deleted`})
    } catch (error) {
        res.json({msg:error.message})
    }
}
module.exports={postCategory,postSubCategory,getCategory,deleteSubCategory,deleteCategory}