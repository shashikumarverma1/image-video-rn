import mongoose from "mongoose"
const studentSchema=mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    url:{
        type:String,
        require:true,
       // unique:true
    },
   
    link:{
        type:String,
        require:true
    },
    timestamp:{
        type:String,
        require:true
    },
    publisher:{
        type:String,
        require:true
    },
})
//modal
export const student=mongoose.model("student",studentSchema)