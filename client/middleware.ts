import next from "next";
import withAuth from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(){
        return NextResponse.next();
    },
    {
        callbacks:{
            authorized:({token, req})=>{
                const {pathname} = req.nextUrl;
                console.log("THe path name is ", pathname);

                // allow auth related routes
                if(
                    pathname.startsWith('/api/auth')  ||
                    pathname.startsWith('/login') ||
                    pathname.startsWith('/register') ||
                    pathname ==='/'
                ){
                    return true;
                }

                // allow public paths also 

                return !! token
            }
        }
    }
)

export const config = {
    matcher : ["/((?!_next/static|_next/image|favicon.ico|public/).*)"],
}