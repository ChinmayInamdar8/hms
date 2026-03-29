import { z } from "zod"
import { RegisterSchema } from "./auth.validation.js";

export interface CheckIfUserPresent{
    email:string,
    password:string
}

export interface CheckIfPasswordIsCorrect{
    passwordFromDB : string,
    passwordFromPayload :string
}

export interface GenerateResponsePayload{
    id: number;
    full_name: string;
    age: number;
    email: string;
    password: string;
    phone_no: string;
    created_at: Date;
    role_id:number
}

export type RegisterNewUser = {
    full_name: string;
    age: number;
    email: string;
    phone_no: string;
    role: number;
    password: string;
}