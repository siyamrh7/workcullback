const router=require('express').Router()
const {registerController,loginController}=require('./Controllers/AuthController')


router.post('/register', registerController )

router.post('/login' , loginController)

module.exports=router