import axios from "axios";
import { LoginType } from "./authTypes";
import { Api } from "@/app/lib/api";

export const loginUser = async (data:LoginType)=>{
    console.log("the login user is called");
    const response = await axios.post(Api.login, data);
    console.log("the response in login user is ", response)
    return response.data
}

export const registerUser = async ()=>{

}