const router=require('express').Router()
const {registerController,loginController}=require('./Controllers/AuthController')
const {postCategory,postSubCategory,getCategory,deleteCategory,deleteSubCategory}=require('./Controllers/CategoryController')

router.post('/register', registerController )
router.post('/category',postCategory)
router.post('/subcategory',postSubCategory)
router.post('/login' , loginController)
router.get('/category' , getCategory)
router.delete('/category' , deleteCategory)
router.delete('/subcategory' , deleteSubCategory)

module.exports=router