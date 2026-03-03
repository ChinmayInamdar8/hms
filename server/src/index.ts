import express from "express"
import authRouter from "./models/auth/auth.route.js";


const app = express();

app.use(express.json());

app.get('/health', async (req, res)=>{


    res.json({
        message:"the app health is good now!"
    })
})


app.use('/auth', authRouter);

app.listen(3000, ()=>{
    console.log("the app is running on http://localhost:3000");
    
})