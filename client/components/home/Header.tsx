"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomeHeader() {
  const [isHidden, setIsHidden] = useState(false);
  const router = useRouter();
  return (
    <div className="bg-neutral-100 shadow-xl fixed top-0 left-0 w-full h-12 flex justify-center items-center z-50">
      <div className="h-full w-full flex px-10 justify-between items-center">
        {/* logo */}
        <div className="text-slate-700 font-bold">HMS.</div>
        {/* Menu */}
        <div className="hidden md:flex justify-center items-center gap-4">
          <div className="flex justify-center gap-10">
            <a href="#">Home</a>
            <a href="#">Hospitals</a>
            <a href="#">About</a>
            <a href="">Pricing</a>
            <a href="">Contact</a>
          </div>
          {/* Login button */}
          <button className="bg-sky-600 text-white rounded py-1 px-5 shadow-xl text-shadow-2xs cursor-pointer hover:text-slate-200 hover:bg-sky-700"
          onClick={()=> {
              console.log("Clicked on login button")
              router.push('/login')
            }}
          >
            Login
          </button>
        </div>
        {/* hamburger */}
        <div className="block md:hidden">
          <button
            className="flex flex-col gap-1.5 p-2 rounded bg-neutral-300 shadow-xl"
            onClick={() => setIsHidden((value) => !value)}
          >
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
          </button>
        </div>

        <div
          className={`fixed top-12 right-0 z-50
  transition-all duration-300 ease-in-out
  ${
    isHidden
      ? "opacity-100 translate-x-0 pointer-events-auto"
      : "opacity-0 translate-x-10 pointer-events-none"
  }
  flex flex-col justify-center items-center gap-4`}
        >
          <div className="flex flex-col bg-slate-200 justify-center gap-5 px-5 rounded-xl py-3 shadow-xl">
            <a href="#">Home</a>
            <a href="#">Hospitals</a>
            <a href="#">About</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>

            <button className="bg-sky-600 text-white rounded py-1 px-5 shadow-xl cursor-pointer hover:text-slate-200 hover:bg-sky-700" 
            onClick={()=> {
              console.log("Clicked on login button")
              router.push('/login')
            }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
