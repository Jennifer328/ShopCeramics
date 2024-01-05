require('dotenv').config();
const express =require('express')
const mongoose = require('mongoose')
const Review = require('../models/ReviewModel')
const userRoutes = require('./routes/userRoute');
const cors= require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use((req,res,next) =>{
    console.log(req.path, req.method);
    next();
})
app.use('/account',userRoutes);
app.get('/reviews',(req,res)=>{
    Review
    .find()
    .then((reviews)=>{
        console.log(reviews);
        res.json(message:'get reviews');
    })
    .catch((err)=> res.json(err))

   
})

app.get('/1', (req,res)=>{
    res.json({message: 'welcome to my shop'});
 })

mongoose.connect(process.env.MONGO_URI)
.then(() =>{
    app.listen(process.env.PORT, () =>{
        console.log(`listening on port ${process.env.PORT}`);
    })
})
.catch((err)=>{
  console.log(err);
})
