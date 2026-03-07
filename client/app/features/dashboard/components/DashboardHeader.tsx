'use client'
import { useSession } from "next-auth/react"

export default function DashboardHeader(){
    const {data:session} = useSession();
    return (
        <div className="flex justify-between items-center w-full h-10 bg-slate-600 text-white shadow-2xl">
            <div className="font-medium ml-4">HMS.</div>
                <div className="mr-4 text-xl font-semibold">{session?.user.role}</div>
            <div className="flex gap-10 items-center">
                <div className="mr-4">{session?.user.name}</div>
            </div>
        </div>
    )
}