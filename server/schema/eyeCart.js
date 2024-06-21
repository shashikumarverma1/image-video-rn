import mongoose from "mongoose"
const EyeModal=mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
  
    price:{
        type:String,
        require:true
    },
    image:{
        type:String,
    }
  ,
    timestamp:{
        type:String,
        require:true
    },
   
})
//modal
export const EyeCart=mongoose.model("EyeCart",EyeModal)