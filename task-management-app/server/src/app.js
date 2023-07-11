import express from "express";
import apiRoute, { apiProtected } from "./routes/api.js";
import mongoose from "mongoose";
import { DB_CONNECT } from "./utils/constants.js";
import AuthMiddleware from "./middlewares/AuthMiddleware.js";
import cors from "cors";
const app = express();

// mongoose.connect(DB_CONNECT,{ useNewUrlParser:true },(e)=>console.log(e));

mongoose.connect(DB_CONNECT, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Continue with your application logic
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const PORT = 8000;
app.use(cors());
app.use(express.json());
app.use('/api/',apiRoute);
app.use('/api/',AuthMiddleware,apiProtected);
app.listen(PORT,()=>console.log("server is running"));