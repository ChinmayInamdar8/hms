import axios from "axios";
import { LoginType, RegisterType } from "./authTypes";
import { Api } from "@/app/lib/api";

export const loginUser = async (data:LoginType)=>{
    console.log("the login user is called");
    const response = await axios.post(Api.login, data);
    console.log("the response in login user is ", response)
    return response.data;
}

export const registerUser = async (data:RegisterType)=>{
    console.log("the url to call is", Api.register)
    const response = await axios.post(Api.register, data)
    return response.data;
}