import type { CheckIfPasswordIsCorrect, CheckIfUserPresent, GenerateResponsePayload, RegisterNewUser } from "./auth.types.js";
import { prisma } from "../../lib/prisma.js";
import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken";

export const checkIfUserPresent = async (payload: CheckIfUserPresent) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: payload.email,
      },
    });

    return user;
  } catch (error) {
    throw new Error("There is some issue");
  }
};

export const checkIfPasswordIsCorrect = async (data:CheckIfPasswordIsCorrect)=>{
  const verify = await bcrypt.compare(data.passwordFromPayload, data.passwordFromDB);
  return verify;
}

export const generateResponsePayload = (user:GenerateResponsePayload)=>{
  // first generate the token 

  const secretKey = process.env.SECRET_KEY;

  if(!secretKey){
    throw new Error("Secret key is not present");
  }

  const token = Jwt.sign({
    id:user.id,
    email:user.email,
    role:user.role,
    name:user.full_name,
  }, secretKey, {expiresIn:"1h"});

  const payload = {
    message:"logged in successfully",
    user:{
      id:user.id,
      name:user.full_name,
      email:user.email,
      role:user.role,
      mobile:user.phone_no
    },
    token
  }

  return payload;
}

export const registerNewUser = async (user: RegisterNewUser)=>{
  try{
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const userFromDB = await prisma.user.create({
    data:{
      ...user,
      password:hashedPassword
    }
  })
  return generateResponsePayload(userFromDB);

  }catch(e){
    console.log("Error while creating the user",e);
    throw new Error("Error while creating the user");
  }
}