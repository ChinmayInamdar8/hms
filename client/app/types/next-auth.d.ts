import { DefaultSession } from "next-auth";

declare module "next-auth"{

    interface User{
        id:string,
        name:string,
        email:string,
        role:string,
        token:string
    }

    interface Session{
        user :{
            id:string;
            name:string;
            role: string;
            email:string,
            token:string
        } &DefaultSession['user'];
    }
}
