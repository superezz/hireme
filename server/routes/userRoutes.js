import express from 'express'
import { rateLimit } from 'express-rate-limit';
import {
  getUserById,
  getUserResumes,
  loginUser,
  registerUser
} from '../controllers/userController.js';

import protect from '../middlewares/authMiddlewares.js';

const userRouter = express.Router();

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 login/register requests per window
  message: { message: 'Too many authentication attempts from this IP, please try again later.' }
});

userRouter.post('/register', authLimiter, registerUser);
userRouter.post('/login', authLimiter, loginUser);
userRouter.get('/data', protect, getUserById);
userRouter.get('/resumes', protect, getUserResumes)


export default userRouter;
