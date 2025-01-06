import express from 'express';
import { loginUser,registerUser } from '../controllers/userController.js';

const userRouter = express.Router();

// fetch user data
userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)

export default userRouter; // and setup in server.js