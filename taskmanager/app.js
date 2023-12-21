const { log } = require("console");
const express=require("express");
const app=express();
const tasks=require("./routes/tasks");
const connectDB=require("./db/connect")
require("dotenv").config()
const cors=require("cors")

app.use(cors())

app.use(express.json());

app.use("/api/v1/tasks",tasks);

app.use((req,res)=>res.status(404).send("Not Found"))

const port=3000;
const start= async()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port,()=>{
            console.log("Connected successfully.");
        })
    } catch (error) {
        console.log("error");
    }
}
start();
