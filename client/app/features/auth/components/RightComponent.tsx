import LoginForm from "@/app/features/auth/components/LoginForm";
import RegisterForm from "./RegisterForm";

export function RightComponent(){
    return (
        <div className="w-full h-full">
            <div className=" h-full flex flex-col justify-center items-center">
            <p className="text-slate-700 text-xl font-semibold fixed top-4 left-4">HMS.</p>
                <div>
                        <h1 className="text-2xl font-medium">Register to HMS.</h1>
                        <p className="mt-3">Register to get full access of the India's most powerfull and trusted hms platform</p>
                        <RegisterForm/>
                </div>
            </div>
        </div>
    )
}


