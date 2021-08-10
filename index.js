require('dotenv').config
const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const router=require('./Route.js')
mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://workcull:workcull@cluster0.ue84r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true }).then(res=>console.log("database connected")).catch(err=>console.log(err))
const app=express()

app.use(cors())
app.use(express.json())
app.use('/',router)
app.get('/',(req,res)=>{
    res.send( "<h1> Server is Running </h1>" )
})



app.listen(process.env.PORT || 2000,()=>{
    console.log('server running')
})