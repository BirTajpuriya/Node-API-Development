const express=require('express');

// using controllers
const {getbootcamp,getbootcamps,createbootcamp,updatabootcamp,deletebootcamp}=require('../controllers/bootcamps')
const router=express.Router();

router
.route('/api/v1/bootcamps')
.get(getbootcamps)
.post(createbootcamp);
router
.route('/api/v1/bootcamps/:id')
.get(getbootcamp)
.put(updatabootcamp)
.delete(deletebootcamp)

// following code is without controllers

// router.get('/api/v1/bootcamps',(req,res)=>{
//     // res.send("hello from express")
//     // res.sendStatus(200).json({success:true});
//     // res.status(200).json({success:true,data:{id:1}})
//     res.status(200).json({success:true,message:'show all bootcamps'})
// })

// router.get('/api/v1/bootcamps/:id',(req,res)=>{
//     res.status(200).json({success:true, message:`show bootcamps ${req.params.id}`})
// })

// // this is for post request
// router.post('/api/v1/bootcamps',(req,res)=>{
//     res.status(200).json({success:true, message:'create bootcamps'})
// })

// //this is for put request

// router.put('/api/v1/bootcamps/:id',(req,res)=>{
//     res
//     .status(200)
//     .json({success:true, message:`updata bootcamps ${req.params.id}`})
// })

// //this is for delete bootcamps
// router.delete('/api/v1/bootcamps/:id',(req,res)=>{
//   L  res.status(200).json({success:true,msg:`delete bootcamps  ${req.params.id}`})
// })

//without controllers ends here
module.exports=router;