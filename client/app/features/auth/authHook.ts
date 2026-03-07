import { loginUser, registerUser } from "./authApi";
import { LoginType, RegisterType } from "./authTypes";

export const useLogin = ()=>{
    const login = async (data:LoginType)=>{
        const response = await loginUser(data);
        return response;
    }

    return {login};
}
export const useRegister = ()=>{
    const register = async (data:RegisterType)=>{
        const response = await registerUser(data);
        return response;
    }

    return {register};
}