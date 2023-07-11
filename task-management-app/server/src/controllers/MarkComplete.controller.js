import { validationResult } from "express-validator";
import { jsonGenerate } from "../utils/helpers.js";
import { StatusCode } from "../utils/constants.js";
import Task from "../models/Task.js";

export const MarkComplete = async(req,res) => {
  const error=validationResult(req);
  if(!error.isEmpty()){
    return res.json(jsonGenerate(StatusCode.VALIDATION_ERROR,"Task id req",error.mapped()));
  }
  try {
    const task = await Task.findOneAndUpdate({
        _id:req.body.task_id,
        userId:req.userId,
    },[
        {
            $set:{
            isCompleted:{
                $eq:[false,"$isCompleted"]
            }
            }
        }
        
        ]);
    if(task){
        return res.json(jsonGenerate(StatusCode.SUCCESS,"Upadated",task));
    }
  } catch (error) {
    return res.json(jsonGenerate(StatusCode.UNPROCESSABLE_ENTITY,"Could not update",null));
  }
};
