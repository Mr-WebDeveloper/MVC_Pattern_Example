import express from 'express';
import {userLogin} from '../Controller/userController.js';

const userRouter = express.Router();


userRouter.post('/login', userLogin);


export default userRouter;