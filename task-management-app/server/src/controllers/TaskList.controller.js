// import User from "../models/User.js"
// import { StatusCode } from "../utils/constants.js";
// import { jsonGenerate } from "../utils/helpers.js";

// export const GetTasks = async(req,res) => {
//   try {
//     const list = await User.findById(req.userId).select("-password").populate("tasks").exec();


//     return res.json(jsonGenerate(StatusCode.SUCCESS,"All tasks list"),list)
//   } catch (error) {
//     return res.json(jsonGenerate(StatusCode.UNPROCESSABLE_ENTITY,"Error"),error)
//   }
// }

import User from "../models/User.js";
import { StatusCode } from "../utils/constants.js";
import { jsonGenerate } from "../utils/helpers.js";

export const GetTasks = async (req, res) => {
  try {
    const list = await User.findById(req.userId)
      .select("-password")
      .populate("tasks")
      .exec();

    return res.status(StatusCode.SUCCESS).json(jsonGenerate("All tasks list", list));
  } catch (error) {
    return res.status(StatusCode.UNPROCESSABLE_ENTITY).json(jsonGenerate("Error", error));
  }
};
