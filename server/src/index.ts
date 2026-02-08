import express  from "express";
import cors from "cors";
import AuthRouter from "./routes/auth/auth";

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (req, res)=>{
    res.json({
        status:200,
        message:"The app is healthy and working fine"
    })
})

app.use('/auth', AuthRouter);



app.listen(3001, ()=>{
    console.log("the server is listening on http://localhost:3001")
})