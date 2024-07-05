const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes')
const userRouter = require('./routes/userRoutes')

const app = express();

// 1) middlewares
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

//middleware - data from the body is added to request object using this middleware.
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req,res,next)=>{
    console.log('Hello frm he middleware✌');
    next();
});

app.use((req,res,next)=>{
    req.requestTime = new Date().toISOString();
    next();
});

// 3) Routes - aka Mounting
app.use('/api/v1/tours',tourRouter)
app.use('/api/v1/users',userRouter)

//4) Export the server to server.js

module.exports = app;

