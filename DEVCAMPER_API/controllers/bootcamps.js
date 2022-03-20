
exports.getBootcamps=(req,res,next)=>{
        res.status(200).json({success:true, msg:'show bootcamps',helo:req.hello});
}

exports.CreateBootcamp=(req,res,next)=>{
        res.status(200).json({success:true, msg:'create bootcamps'});
}
exports.UpdateBootcamp=(req,res,next)=>{
        res.status(200).json({success:true, msg:`update bootcamp ${req.params.id}`});
}
exports.DeleteBootcamp=(req,res,next)=>{
        res.status(200).json({success:true, msg:`Delete bootcamps ${req.params.id}`});
}
