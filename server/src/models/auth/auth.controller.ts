import type { Request, Response } from "express";
import { loginSchema, RegisterSchema } from "./auth.validation.js";
import { ResponseMessage } from "../../lib/response.js";
import { checkIfPasswordIsCorrect, checkIfUserPresent, generateResponsePayload, registerNewUser } from "./auth.service.js";

export const AuthLoginController = async (req:Request, res:Response)=>{
    console.log(req.body);
    const payload =  loginSchema.safeParse(req.body);
    console.log(payload);
    if(!payload.success){
        return res
        .status(ResponseMessage.PayloadValidationFailed.status)
        .json(ResponseMessage.PayloadValidationFailed.res);
    }
    
    const userFromDB = await checkIfUserPresent(payload.data);
    if(!userFromDB){
        return res
        .status(ResponseMessage.userNotFound.status)
        .json(ResponseMessage.userNotFound.res);
    } 
    
    const verifyPassword = await checkIfPasswordIsCorrect({passwordFromDB:userFromDB.password, passwordFromPayload:payload.data.password})
    
    if(!verifyPassword){
        return res
        .status(ResponseMessage.passwordDidNotMatched.status)
        .json(ResponseMessage.passwordDidNotMatched.res);
    }
    
    // generate the token and response and send response as 200
    
    const resPayload = generateResponsePayload(userFromDB);
    
    return res.status(200).json(resPayload);  
}

export const AuthRegisterController = async (req:Request, res:Response)=>{
    console.log(req.body);
    const payload =  RegisterSchema.safeParse(req.body);
    console.log(payload);
    if(!payload.success){
        return res
        .status(ResponseMessage.PayloadValidationFailed.status)
        .json(ResponseMessage.PayloadValidationFailed.res);
    }

    const checkUser =  await checkIfUserPresent({email:payload.data.email, password:payload.data.password});

    if(checkUser){
        return res
        .status(ResponseMessage.userAlreadyPresent.status)
        .json(ResponseMessage.userAlreadyPresent.res);
    }

    // if user is alreay not present create a new user generate payload and send it in the response

    const responsePayload = await registerNewUser(payload.data);

    res.status(201).json(responsePayload);
}