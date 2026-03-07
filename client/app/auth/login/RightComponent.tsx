import LoginForm from "@/app/features/auth/components/LoginForm";

export function RightComponent(){
    return (
        <div className="w-full h-full flex flex-col justify-center items-center px-6">

            <p className="text-slate-700 text-xl font-semibold absolute top-4 left-4">
                HMS.
            </p>

            <div className="max-w-md w-full">
                <h1 className="text-2xl font-medium text-center">
                    Welcome Back!
                </h1>

                <p className="mt-3 text-center text-slate-600">
                    Login to access your dashboard and continue using your hms.
                </p>

                <LoginForm/>
            </div>

        </div>
    )
}

