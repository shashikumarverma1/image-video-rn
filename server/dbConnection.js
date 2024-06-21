import mongoose from "mongoose"
export const db_connection = async()=>{
    var uri = `mongodb://localhost:27017/eye`
   try{
  await mongoose.connect(uri , {useNewUrlParser :true})
  console.log("conected")
   }catch(err){
    console.log("not conected" , err)
   }
}