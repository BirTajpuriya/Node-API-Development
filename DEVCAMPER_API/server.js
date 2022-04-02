const express=require('express');
const dotenv=require('dotenv');
const logger=require('./middleware/logger')
const morgan=require('morgan')

//Routes files

const bootcamps=require('./routes/bootcamp')
// load env vars
dotenv.config({path: './config/config.env'});

const app=express();


// Dev logging middleware
// app.use(logger)
if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'));
}

//mount routers
app.use('/',bootcamps)

//creating routes


const PORT=process.env.PORT || 5000

app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));



