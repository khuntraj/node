const express=require('express');
const morgan=require('morgan');
const BodyParser=require('body-parser');
const app=express();

//router
const ProductRouts= require('./api/routes/products');
const OrderRouts= require('./api/routes/orders');
//track the task
app.use(morgan('dev'));

app.use('/products',ProductRouts);
app.use('/orders',OrderRouts);

//error handling
app.use((req,res,next)=>{
    const error = new Error('not found');
    error.status('404');
    next(error);
})
app.use((error,req,res,next)=>{
    res.status(error.status||500);
    res.json({
        error:{
            message:error.message
        }
    })
})


// app.use((req,res,next) => {
//     res.status(200).json({
//         message:'work'
//     });
// });

module.exports = app;