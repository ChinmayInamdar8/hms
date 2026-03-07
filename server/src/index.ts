import express from "express"
import authRouter from "./models/auth/auth.route.js";
import cors from "cors";


const app = express();

app.use(cors());

app.use(express.json());

app.get('/health', async (req, res)=>{


    res.json({
        message:"the app health is good now!"
    })
})


app.use('/auth', authRouter);

app.listen(3001, ()=>{
    console.log("the app is running on http://localhost:3001");
    
})