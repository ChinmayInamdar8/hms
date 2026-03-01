import express from "express"
const app = express();

import {prisma} from './lib/prisma.js'

app.get('/health', async (req, res)=>{


    res.json({
        message:"the app health is good now!"
    })
})


app.listen(3000, ()=>{
    console.log("the app is running on http://localhost:3000");
    
})