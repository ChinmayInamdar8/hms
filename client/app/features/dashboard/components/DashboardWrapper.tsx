"use client";

import { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";

export default function DashboardSidebarWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSideBarOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <DashboardHeader setActive={setIsSideBarOpen} />

      <div className="flex flex-1 overflow-hidden">
        {/* Desktop sidebar */}
        <div className="hidden md:block w-52 bg-slate-100 shadow-2xl shrink-0">
          <DashboardSidebar />
        </div>

        {/* Mobile sidebar */}
        <div
          className={`
            fixed z-50 left-0 top-10 h-screen w-52
            bg-slate-100 shadow-2xl
            transform transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <DashboardSidebar />
        </div>

        {/* Main content stays SERVER rendered */}
        <div className="flex-1 p-4 bg-stone-300">
          <div className="bg-slate-100 w-full h-full rounded-xl shadow-xl border p-2 border-slate-500 overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
