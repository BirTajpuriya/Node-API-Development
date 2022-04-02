// @desc       Get all bootcamps
// @route       GET /api/v1/bootcamps
// @access      Public
exports.getbootcamps=(req,res,next)=>{
res.status(200).json({
        success:true, msg:'show all bootcamps',hello:req.hello
})
}

exports.getbootcamp=(req,res,next)=>{
        res.status(200).json({
                success:true,msg:`Get bootcamps ${req.params.id}`
        })
}

exports.createbootcamp=(req,res,next)=>{
        res.status(200).json({success:true, message:'create bootcamps'})
}

exports.updatabootcamp=(req,res,next)=>{
        res
        .status(200)
        .json({success:true, message:`updata bootcamps ${req.params.id}`})
}

exports.deletebootcamp=(req,res,next)=>{
         res.status(200).json({success:true,msg:`delete bootcamps  ${req.params.id}`})

}

