import express from "express";
import { prisma } from "../../../lib/prisma";
import { Login, SignUp } from "../../../zod/authSchema";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { checkIfUserPresent } from "../../../helper/functions";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const parse = SignUp.safeParse(req.body);
  if (!parse.success) {
    // send a message of incorrect data status code 400
    res.status(400).json({
        status:400,
        data:{
            message:"Data sent is incorrect or not sufficient"
        }
    })
    return;
  }
  const body = parse.data;

  // check if user already present in the db
  const user = await prisma.user.findUnique({where:{email:body.email}})
  if(user){
    // send a message of user already exists with status code 409
    res.status(409).json({
        status:409,
        data:{
            message:"User already exists!"
        }
    })
    return;
  }

//   now finally create the user, to create user :- 

try{
    //1. hash the password
    const encryptedPassword = await bcrypt.hash(body.password, 10);
    
    //2. insert userData into db
    const createdUser = await prisma.user.create({
        data: {...body, password:encryptedPassword}
    })   
    //4. generate jwt token for session management
    if(!process.env.JWT_SECRET)  throw new Error("JWT secret is missing from env")
    const token = jwt.sign({email: createdUser.email, role:createdUser.role, id:createdUser.id}, process.env.JWT_SECRET, {
      expiresIn:'2d'
  });
    //5. send successful message with status code of 201/error message with status code of 500
    const {password, ...safeUser} = createdUser 
    res.status(201).json({
        status:201,
        data:{
            token:token,
            user:safeUser
        }
    })

    return;

    
  }catch(e){
    res.status(500).json({
        status:500,
        data:{
            message:"Server error"
        }
    })
  }

});

router.post("/login", async(req, res) => {
  const parse = Login.safeParse(req.body);
  if (!parse.success) {
    // send a message of incorrect data status code 400
    res.status(400).json({
        status:400,
        data:{
            message:"Data is incorrect or insufficient"
        }
    })
    return;
  }
  const body = parse.data;

  // check if user already present in the db
  const user = await prisma.user.findUnique({where:{email:body.email}});
  if(!user){
    // send a message if user does not exits
    res.status(404).json({
        status:404,
        data:{
            message:"User Does not exists!"
        }
    })
    return;
  }

//   if the user is present do the follwing :- 

try{
    //1. check the password
    const checkPasswordIsCorrect = await bcrypt.compare(body.password, user?.password);
    // if password is incorrect return
    if(!checkPasswordIsCorrect){
      res.status(401).json({
        status:401,
        data:{
            message:"password is incorrect"
        }
    })
    return;
    }  
    //2. else generate jwt token for session management
    const token = jwt.sign({email: user?.email}, process.env.JWT_SECRET || "");
    //3. send successful message with status code of 201/error message with status code of 500
    const {password, ...safeUser} = user;
    res.json({
        status:200,
        data:{
            token:token,
            user: safeUser
        }
    })

    return;
    
  }catch(e){
    res.status(500).json({
        status:500,
        data:{
            message:"Error From server"
        }
    })
  }
});
// router.post("/logout", (req, res) => {});

export default router;
