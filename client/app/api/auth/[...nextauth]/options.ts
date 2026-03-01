import { NextAuthOptions } from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";

export const authOptions : NextAuthOptions = {
    providers:[
        CredentialsProvider({
            name:"credentials",
            credentials:{
                email:{label:"email", type:'text', placeholder:"email"},
                password:{label:"password", type:'password', placeholder:"password"},
            },
            async authorize(credentials, req) {
                // do the login process here 
                try{
                    if(!credentials?.email || !credentials?.password){
                    throw new Error("Missing  email or password");
                }

                else return {
                    id:"1",
                    name:"chinmay",
                    role:"admin"
                }
                }catch(error){
                    return null;
                }
            },
        })
    ],
    callbacks:{
        async jwt({token, user}) {
            if(user){
                token.id = user.id
            }
            return token;
        },
        async session({session, token}) {
            if(session.user){
                session.user.id = token.id as string
            }
            return session;
        },
    },
    pages:{
        signIn:'/login',
        error:"/login"
    },
    session:{
        strategy:"jwt",
        maxAge: 10 * 60 * 60 
    },
    secret:process.env.NEXTAUTH_SECRET
}