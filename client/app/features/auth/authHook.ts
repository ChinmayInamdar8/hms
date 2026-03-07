import { loginUser } from "./authApi";
import { LoginType } from "./authTypes";

export const useLogin = ()=>{
    const login = async (data:LoginType)=>{
        const response = await loginUser(data);
        return response;
    }

    return {login};
}
export const useRegister = ()=>{
    const login = async (data:LoginType)=>{
        const response = await loginUser(data);
        return response;
    }

    return login;
}