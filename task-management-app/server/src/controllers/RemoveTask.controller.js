// import { validationResult } from "express-validator";
// import { jsonGenerate } from "../utils/helpers.js";
// import { StatusCode } from "../utils/constants.js";
// import Task from "../models/Task.js";
// import User from "../models/User.js";
// export const RemoveTask = async(req,res) => {
//     const error=validationResult(req);

//     if(!error.isEmpty()){
//         return res.json(jsonGenerate(StatusCode.VALIDATION_ERROR,"task is req",error.mapped()));
//     }
//     try {
//         const result=await Task.findOneAndUpdate({
//             userId:req.userId,
//             _id:req.body.task_id,
//         });

//         if(result){
//             const user=await User.findOneAndUpdate({
//                 _id:req.userId,
                
//             },{
//                 $pull:{tasks:req.body.task_id}
//             });
//             return res.json(jsonGenerate(StatusCode.SUCCESS,"Task deleted",null));
//         }
//     } catch (error) {
//         return res.json(jsonGenerate(StatusCode.UNPROCESSABLE_ENTITY,"Could not delete",null));
        
//     }
// };


import { validationResult } from "express-validator";
import { jsonGenerate } from "../utils/helpers.js";
import { StatusCode } from "../utils/constants.js";
import Task from "../models/Task.js";
import User from "../models/User.js";

export const RemoveTask = async (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.json(
      jsonGenerate(StatusCode.VALIDATION_ERROR, "Task is required", error.mapped())
    );
  }

  try {
    const task = await Task.findOneAndDelete({
      userId: req.userId,
      _id: req.body.task_id,
    });

    if (!task) {
      return res.json(
        jsonGenerate(
          StatusCode.NOT_FOUND,
          "Task not found",
          null
        )
      );
    }

    const user = await User.findOneAndUpdate(
      { _id: req.userId },
      { $pull: { tasks: req.body.task_id } },
      { new: true }
    );

    console.log("Deleted task:", task);
    console.log("Updated user:", user);

    return res.json(
      jsonGenerate(StatusCode.SUCCESS, "Task deleted", null)
    );
  } catch (error) {
    console.error("Error deleting task:", error);
    return res.json(
      jsonGenerate(
        StatusCode.INTERNAL_SERVER_ERROR,
        "Could not delete the task",
        null
      )
    );
  }
};
