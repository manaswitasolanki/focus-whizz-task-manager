import mongoose from "mongoose";

const taskSchema=mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,ref:"User",
        required:true,
    },

    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        //required:true,
    },
    isCompleted:{
        type:Boolean,
        default:false,
        required:true,
    },

    date:{
        type:Date,
        default:Date.now,
    },

    highPriority:{
        type:Boolean,
        deafult:false,
    }
});

export default mongoose.model("Task",taskSchema);