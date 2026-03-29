import { Api } from "@/app/lib/api";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "email" },
        password: {
          label: "password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials, req) {
        console.log("it is coming here")
        // do the login process here
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Missing  email or password");
          } 

          const response:any = await axios.post('http://localhost:3001/auth/login', {email:credentials.email, password:credentials.password});

          console.log("the rsponse is", response);

          const user = response.data.user;
          const token = response.data.token;

          if(!user){
            return null;
          }

          return {
            ...user,
            token
          }


        } catch (error) {
             console.log("Login error:", error)
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
    token.id = user.id
    token.role = user.role
    token.token = user.token
    token.name = user.name
    token.email = user.email
    token.role_name = user.role_name
  }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.user.token = token.token as string;
        session.user.role_name= token.role_name as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "auth/login",
    error: "auth/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 10 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
};
