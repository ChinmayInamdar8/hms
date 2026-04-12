"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

interface ProfileProps {
  profile: string;
  name: string;
  email: string;
}

interface DashboardHeaderProps{
    setActive: React.Dispatch<React.SetStateAction<boolean>>
}

export default function DashboardHeader({setActive}:DashboardHeaderProps) {
  const [isProfile, setIsProfile] = useState(false);
  const { data: session } = useSession();
  return (
    <div className="flex justify-between items-center w-full h-10 bg-slate-100 text-teal-content shadow-2xl border-b border-slate-500">
      <div className="flex justify-between w-full mx-4">
        <div className="block md:hidden cursor-pointer" onClick={()=>setActive((val)=>!val)}><FaBars size={24} /></div>
        <div className="font-medium ml-4">HMS.</div>
        <div className=" hidden md:block mr-4 text-xl font-semibold">
          {session?.user.role_name}
        </div>
        <div
          className="flex gap-5 items-center cursor-pointer bg-slate-300 rounded py-1 sm:px-3"
          onClick={(e) => {
            console.log("hello");
            setIsProfile((value) => !value);
          }}
        >
          <FaRegUserCircle size={25} />
          <div className="sm:mr-4">{session?.user.name}</div>
        </div>
      </div>
      {isProfile && (
        <div className="absolute top-10 shadow-xl right-5 z-50">
          <Profile
            props={{
              name: session?.user.name || "",
              profile: session?.user.role_name || "",
              email: session?.user.email || "",
            }}
          />
        </div>
      )}
    </div>
  );
}

function Profile({ props }: { props: ProfileProps }) {
  return (
    <div className="bg-slate-200 w-50 h-50 rounded flex flex-col justify-between items-center">
      <h3 className="text-center">{props.profile}</h3>
      <p className="text-center text-sm text-black-head">{props.name}</p>
      <p className="text-center text-sm text-black-head">{props.email}</p>
      <button className="py-1 bg-teal-600 w-40 rounded-xl text-white shadow-xl mb-5 cursor-pointer">
        Settings
      </button>
      <button className="py-1 bg-teal-600 w-40 rounded-xl text-white shadow-xl mb-5 cursor-pointer">
        Profile
      </button>
    </div>
  );
}
