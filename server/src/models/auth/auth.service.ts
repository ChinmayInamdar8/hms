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

export const generateResponsePayload = async (user:GenerateResponsePayload)=>{
  // first generate the token 

  const secretKey = process.env.SECRET_KEY;

  if(!secretKey){
    throw new Error("Secret key is not present");
  }

  const role = await prisma.role.findFirst({
    where:{
      id: user.role_id
    }
  })

  const token = Jwt.sign({
    id:user.id,
    email:user.email,
    role:user.role_id,
    role_name: role?.role_name,
    name:user.full_name,
  }, secretKey, {expiresIn:"1h"});

  const payload = {
    message:"logged in successfully",
    user:{
      id:user.id,
      name:user.full_name,
      email:user.email,
      role:user.role_id,
      mobile:user.phone_no,
      role_name:role?.role_name
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
      password:hashedPassword,
      role:{
        connect:{id:user.role}
      }
    }
  })
  return generateResponsePayload(userFromDB);

  }catch(e){
    console.log("Error while creating the user",e);
    throw new Error("Error while creating the user");
  }
}