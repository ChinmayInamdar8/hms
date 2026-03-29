'use client'
import { useSession } from "next-auth/react"
import { FaRegUserCircle } from "react-icons/fa";

export default function DashboardHeader(){
    const {data:session} = useSession();
    return (
        <div className="flex justify-between items-center w-full h-10 bg-slate-100 text-teal-content shadow-2xl border-b border-slate-500">
            <div className="font-medium ml-4">HMS.</div>
                <div className="mr-4 text-xl font-semibold">{session?.user.role_name}</div>
            <div className="flex gap-5 items-center">
                <FaRegUserCircle size={25}/>
                <div className="mr-4">{session?.user.name}</div>
            </div>
        </div>
    )
}