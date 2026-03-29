"use client";
import { doctorMenu, nurseMenu, operatorMenu } from "@/app/lib/menu";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function DashboardSideBar() {
  const { data: session } = useSession();

  const [menu, setMenu] = useState<MenuType[]>([]);
  const [activeTab, setActive] = useState(0);

  useEffect(() => {
    if (session?.user.role == "1") {
      setMenu(doctorMenu);
    }
  }, [session]);

  const router = useRouter();
  return (
    <div className="mt-5 px-3 flex flex-col gap-1.5">
      {menu.map((menu, index) => (
        <div
          key={index}
          onClick={() => {
            setActive(menu.key);
            router.push(menu.path);
          }}
          className={`group relative flex items-center gap-3 px-4 py-2.5 rounded-xl cursor-pointer
                 text-slate-600 hover:text-teal-700
                 hover:bg-teal-50 active:bg-teal-100
                 transition-all duration-200 ease-out ${activeTab===menu.key ? 'text-teal-700 bg-teal-100':''}`}
        >
          <span className="text-sm font-medium tracking-wide">
            {menu.label}
          </span>
        </div>
      ))}
    </div>
  );
}
