
import { check } from "express-validator";

export const LoginSchema=[
    

    check('username','username is required').exists().isAlphanumeric().withMessage('username should be in alphanumeric').trim().isLength({min:6,max:32}),

    check('password','password is required').isLength({min:6,max:100}).trim(),

    
]