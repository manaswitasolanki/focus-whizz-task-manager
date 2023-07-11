
import { check } from "express-validator";

export const RegisterSchema=[
    check('name').trim().isAlpha().withMessage("Name should be in alphabets only"),

    check('username','username is required').exists().isAlphanumeric().withMessage('susername should be in alphanumeric only').trim().isLength({min:6,max:32}),

    check('password','password is required').isLength({min:6,max:100}).trim(),

    check('email','email is required').exists().isEmail(),
]