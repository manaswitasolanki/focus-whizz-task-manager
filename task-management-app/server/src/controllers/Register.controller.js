import { validationResult } from "express-validator";
import { StatusCode ,JWT_TOKEN_SECRET} from "../utils/constants.js";
import { jsonGenerate } from "../utils/helpers.js";
import bcrypt from 'bcrypt';
import User from "../models/User.js";
import Jwt from "jsonwebtoken";


// const Register = async(req,res) => {

//     const errors = validationResult(req);
//     if(errors.isEmpty()){

//         const{name,username,password,email}=req.body;

//         const salt= await bcrypt.genSalt(10);
//         const hashPassword=await bcrypt.hash(password,salt);

//         const userExist =await User.findOne({ $or: [
//             {
//                 email:email
//             },
//             {
//                 username:username
//             }
//         ]});

//         if(userExist){
//             return res.json(jsonGenerate(StatusCode.UNPROCESSABLE_ENTITY,"user or email already exists"));
//         }

//         //password=hashPassword;

//         //save to db
//         try {
//             const result=await User.create({
//                 name:name,
//                 email:email,
//                 password:hashPassword,
//                 username:username
//             })

//             const token = Jwt.sign({userId:result._id},JWT_TOKEN_SECRET);

//             res.json(jsonGenerate(StatusCode.SUCCESS,"Registration successful",{userId:result._id,token:token}));
//         } catch (error) {
//             console.log(error)
//         }

//     }
//   res.json(jsonGenerate(StatusCode.VALIDATION_ERROR,"Validation error",errors.mapped()));
// }

// export default Register;


const Register = async (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      const { name, username, password, email } = req.body;
  
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);
  
      const userExist = await User.findOne({
        $or: [
          {
            email: email,
          },
          {
            username: username,
          },
        ],
      });
  
      if (userExist) {
        return res.json(
          jsonGenerate(
            StatusCode.UNPROCESSABLE_ENTITY,
            "User or email already exists"
          )
        );
      }
  
      try {
        const result = await User.create({
          name: name,
          email: email,
          password: hashPassword,
          username: username,
        });
  
        const token = Jwt.sign({ userId: result._id }, JWT_TOKEN_SECRET);
  
        return res.json(
          jsonGenerate(StatusCode.SUCCESS, "Registration successful", {
            userId: result._id,
            token: token,
          })
        );
      } catch (error) {
        console.log(error);
      }
    }
  
    return res.json(
      jsonGenerate(StatusCode.VALIDATION_ERROR, "Validation error", errors.mapped())
    );
  };
  
  export default Register;
  