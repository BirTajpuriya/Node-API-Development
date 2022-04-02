const mongoose=require('mongoose');
const connectDB=async=>{
    await mongoose.connect(process.env.MONGO_URI,{
      useNewUrlParser:true,
      useCreatedIndex:true,
      useFindAndModify:false,
      useUnifiedTopology:true
    
    });

    console.log(`MOngoDB connected: ${conn.connection.host}`);

}

module.exports=connectDB;