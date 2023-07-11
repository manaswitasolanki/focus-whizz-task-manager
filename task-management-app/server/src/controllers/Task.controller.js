import { validationResult } from "express-validator";
import { StatusCode } from "../utils/constants.js";
import { jsonGenerate } from "../utils/helpers.js";
import User from "../models/User.js";
import Task from "../models/Task.js";

// export const createTask=async(req,res)=>{
//     const error=validationResult(req);
//     if(!error.isEmpty()){
//         return res.json(jsonGenerate(StatusCode.VALIDATION_ERROR,"Task is required",error.mapped()));
//     }

//     try {
//         const result=await Task.create({
//             userId:req.userId,
//             title:req.body.title,

//         })

//         if(result){
//             const user=await User.findOneAndUpdate({_id:req.userId},{
//                 $push:{tasks:result}
//             });
//             return res.json(jsonGenerate(StatusCode.SUCCESS,"Task created successfully",result));
//         }
//     } catch (error) {
//         return res.json(jsonGenerate(StatusCode.UNPROCESSABLE_ENTITY,"Somehting went wrong",error));
//     }



// }


export const createTask = async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.json(jsonGenerate(StatusCode.VALIDATION_ERROR, "Task is required", error.mapped()));
    }
  
    try {
      const result = await Task.create({
        userId: req.userId,
        title: req.body.title,
        date: req.body.dueDate,
        highPriority: req.body.highPriority ?? false,
      });
  
      if (result) {
        const user = await User.findOneAndUpdate({ _id: req.userId }, {
          $push: { tasks: result },
        });
        return res.json(jsonGenerate(StatusCode.SUCCESS, "Task created successfully", result));
      }
    } catch (error) {
      return res.json(jsonGenerate(StatusCode.UNPROCESSABLE_ENTITY, "Something went wrong", error));
    }
  };
  


//   export const createTask = async (req, res) => {
//     const error = validationResult(req);
//     if (!error.isEmpty()) {
//       return res.json(jsonGenerate(StatusCode.VALIDATION_ERROR, "Task is required", error.mapped()));
//     }

//     try {
//       const result = await Task.create({
//         userId: req.userId,
//         title: req.body.title,
//         date: req.body.date,
//         highPriority: req.body.highPriority ?? false,
//       });

//       if (result) {
//         const user = await User.findOneAndUpdate({ _id: req.userId }, {
//           $push: { tasks: result },
//         });
//         return res.json(jsonGenerate(StatusCode.SUCCESS, "Task created successfully", result));
//       }
//     } catch (error) {
//       return res.json(jsonGenerate(StatusCode.UNPROCESSABLE_ENTITY, "Something went wrong", error));
//     }
//   };
