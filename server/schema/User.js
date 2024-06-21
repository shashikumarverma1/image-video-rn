import mongoose from "mongoose"
const UserModal=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        // require:true
    },
    gender:{
        type:String,
        // require:true
    },
    education:{
        type:String,
        // require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true,
       // unique:true
    },
    token:{
        type:String,
        // require:true
    },
 
    timestamp:{
        type:String,
        require:true
    },
   
})
//modal
export const User=mongoose.model("User",UserModal)