"use client";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import Loader from "@/app/custom-components/loader/Loader";

const LoginForm = () => {
  const router = useRouter();
  const [showLoader, setShowLoader] = useState<boolean>(false)

  const SubmitLogin = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowLoader(true);
    try{
      const extractedData = new FormData(e.currentTarget);
    const email = extractedData.get("email") as string;
    const password = extractedData.get("password") as string;

    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    console.log(response, email, password);

    if (response?.ok) {
      console.log("Successfully logged in");
      toast.success('Logged in!')
      router.push('/doctor/dashboard')
    } else {
      console.log("There is some issue in Loging in");
    }
    }catch(e){
      console.log("there is error, ", e);
    }finally{
      setShowLoader(false);
    }
  };

  return (
    <div className="flex flex-col justify-center mt-5 gap-4">
      <div>
        <Toaster
  position="top-right"
  reverseOrder={false}
      />
      <Loader isActive={showLoader}/>
      </div>
      <form onSubmit={SubmitLogin}>
        <div className="flex flex-col justify-center gap-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="py-1.5 px-4 rounded-xl outline-none border-2 border-teal-700"
          />
        </div>
        <div className="flex flex-col justify-center gap-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="py-1.5 px-4 rounded-xl outline-none border-2 border-teal-700"
          />
        </div>
        <div className="flex flex-col justify-center gap-3 mt-6">
          <button
            type="submit"
            className="bg-teal-800 py-1.5 text-center rounded-xl shadow-xl text-white cursor-pointer hover:bg-teal-700 transition duration-300 ease-in-out "
          >
            Login
          </button>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <p>
            Don't have Account ?{" "}
            <span
              className="text-teal-700 cursor-pointer"
              onClick={() => router.push("/auth/register")}
            >
              Register
            </span>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
