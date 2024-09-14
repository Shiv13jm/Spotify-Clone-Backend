import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import songRouter from './src/routes/songroute.js';
import connectDB from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';

//APP config
const app = express();
const port= process.env.PORT || 4000;
connectDB();
connectCloudinary();

//middleware
app.use(express.json());
app.use(cors());

//initialising routes
app.use("/api/song", songRouter)

app.get('/',(req,res)=> res.send("API working"))
app.listen(port,()=>console.log(`Server Started on ${port}`))
