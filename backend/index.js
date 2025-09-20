
import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'

dotenv.config({
    path: ".env"
});

import databaseConnection from './utils/database.js'
import userRouter from './routes/userRouter.js'

const app = express();
const PORT = process.env.PORT || 8080;
databaseConnection();





app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: 'http://localhost:5173', // Frontend URL
  credentials: true
}));


// api
app.use("/api/v1/user",userRouter);

app.get("/",(req,res)=>{
    res.send("hello");
})



app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})