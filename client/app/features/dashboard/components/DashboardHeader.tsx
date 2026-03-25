'use client'
import { useSession } from "next-auth/react"
import { FaRegUserCircle } from "react-icons/fa";

export default function DashboardHeader(){
    const {data:session} = useSession();
    return (
        <div className="flex justify-between items-center w-full h-10 bg-teal-800 text-white shadow-2xl">
            <div className="font-medium ml-4">HMS.</div>
                <div className="mr-4 text-xl font-semibold">{session?.user.role}</div>
            <div className="flex gap-5 items-center">
                <FaRegUserCircle size={25}/>
                <div className="mr-4">{session?.user.name}</div>
            </div>
        </div>
    )
}