import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config();
console.log("++++++++++++++++++",process.env.MONGO_DB);
const databaseConnection =async()=>{
    
   await mongoose.connect(process.env.MONGO_DB).then(()=>{
    console.log("Mongodb connected");
   }).catch((error)=>{
    console.log(error);
   })
    
}

export default databaseConnection;