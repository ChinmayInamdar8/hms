'use client'
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  return (
    <div>
      <div>
      <div className="bg-neutral-100 shadow-xl w-full h-12 flex justify-center items-center">
        <div className="h-full w-full flex px-10 justify-between items-center">
          {/* logo */}
          <div className="text-slate-700 font-bold">HMS.</div>
          {/* Menu */}
        </div>
      </div>
    </div>
    {/* Login form */}
    <div className="w-full h-120 flex justify-center items-center text-slate-600">
      <div className="bg-amber-200/60 w-70 md:w-100 rounded-xl p-5 shadow-2xl">
      <form action="#">
        <h1 className="text-2xl text-center font-semibold text-slate-600">Login to HMS</h1>
      <div className="flex flex-col justify-center gap-2 my-10 bg-amber-200/70 rounded">
        <label htmlFor="emailText">Enter Email:</label>
        <input type="text" id="emailText" placeholder="Enter Your Email" className="outline-none  border-b-2 border-sky-600"/>
      </div>
      <div className="flex flex-col justify-center gap-2 my-10 bg-amber-200/70 rounded">
        <label htmlFor="passwordText">Enter Password:</label>
        <input type="text" id="passwordText" placeholder="Enter Your Password" className="outline-none  border-b-2 border-sky-600"/>
      </div>
      <button className="w-full py-1 text-center bg-sky-600 text-slate-100 rounded-xl shadow-xl cursor-pointer font-medium hover:bg-sky-500 my-2">Register</button>
      <p className="text-center">New here ? <span className="text-blue-600 underline cursor-pointer hover:text-blue-400" onClick={()=>{
        router.push('/register');
      }}>Register</span></p>
    </form>
    </div>
    </div>
    </div>
  );
}
