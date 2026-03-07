import LoginForm from "@/app/features/auth/components/LoginForm";

export function RightComponent(){
    return (
        <div className="w-full h-full">
            <div className=" h-full flex flex-col justify-center items-center">
            <p className="text-slate-700 text-xl font-semibold fixed top-4 left-4">HMS.</p>
                <div>
                        <h1 className="text-2xl font-medium">Welcome Back!</h1>
                        <p className="mt-3">Login to access your dashbaord and continue using your hms.</p>
                        <LoginForm/>
                </div>
            </div>
        </div>
    )
}


