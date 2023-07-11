import express from "express";
import Register from "../controllers/Register.controller.js";
import Login from "../controllers/Login.controller.js";
import { RegisterSchema } from "../validationSchema/RegisterSchema.js";
import { LoginSchema } from "../validationSchema/LoginSchema.js";
import { createTask } from "../controllers/Task.controller.js";
import { check } from "express-validator";
import { GetTasks } from "../controllers/TaskList.controller.js";
import { MarkComplete } from "../controllers/MarkComplete.controller.js";
import { RemoveTask } from "../controllers/RemoveTask.controller.js";


const apiRoute=express.Router();
export const apiProtected=express.Router();

apiRoute.post('/register',RegisterSchema,Register);
apiRoute.post('/login',LoginSchema,Login);

//protected routes 
apiProtected.post("/createTask",[check("title","task title is required").exists()],createTask);

apiProtected.post("/markComplete",[check("task_id","task id is required").exists()],MarkComplete);

apiProtected.post("/removeTask",[check("task_id","task id is required").exists()],RemoveTask);

apiProtected.get("/taskList",GetTasks);
export default apiRoute;