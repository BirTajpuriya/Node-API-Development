const express=require('express');
const router=express.Router();


router.get('/',(req,res)=>{
    // res.send('hello from express');
    // res.send({name:'unknown'});
    // res.json({name:'unknown'});// gives the same result as res.send
    // res.sendStatus(400); // output : bad request
    // res.sendStatus(200).json({success:true, msg:'show bootcamps'});
    res.send('hello from express js')
});

router.get('/:id',(req,res)=>{
res.status(200).json({success:true, msg:`show bootcamp ${reg.params.id}`})
});

router.post('/',(req,res)=>{
    res.status(200).json({success:true, msg:'create bootcamp'});
});
router.put('/:id',(req,res)=>{
    res.status(200).json({success:true, msg:`update ${req.params.id}`})
});



// export router
module.exports=router;
