const mongoose=require("mongoose");


const connectDB=async(url)=>{
   return mongoose.connect(url)
}

module.exports=connectDB
// mongoose
//   .connect(connectString)
//   .then(()=>{console.log("connected successfully to db")})
//   .catch((err)=>{console.log(err)})