import express from 'express';
import userRouter from './Routes/userRouter.js'
import connectDatabase from './Model/DB.js';


const app = express();
const port = 3000;

app.use(express.json());

connectDatabase();

app.use('/user', userRouter);

app.listen({port}, () => {
    console.log(`Server is running on port ${port}`);
} )