const express=require('express');
const dotenv=require('dotenv');

//Route files

const bootcamps=require('./bootcamp');

// load env vars
dotenv.config({path: './config/config.env'});
const app=express();

// mount routers
app.use('/api/v1/bootcamps',bootcamps);




const PORT=process.env.PORT || 5000;

// handling request

// following code is cut/move to bootcamps.js 

// app.get('/api/v1/bootcamps',(req,res)=>{
//     // res.send('hello from express');
//     // res.send({name:'unknown'});
//     // res.json({name:'unknown'});// gives the same result as res.send
//     // res.sendStatus(400); // output : bad request
//     res.sendStatus(200).json({success:true, msg:'show bootcamps'});
// });

// app.get('/api/v1/bootcamps/:id',(req,req)=>{
// res.status(200)
// .json({success:true, msg:`show bootcamp ${reg.params.id}`})
// })


app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`));