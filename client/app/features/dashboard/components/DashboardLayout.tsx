import React from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar"; // Create this component

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen flex flex-col text-teal-800">
      {/* Header */}
      <DashboardHeader />

      {/* Body: Sidebar + Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-50 shadow-2xl bg-slate-100 text-white shrink-0">
          <DashboardSidebar />
        </div>

        {/* Main scrollable content */}
        <div className="flex-1  p-4 bg-stone-300">
          <div className="bg-slate-100 w-full h-full rounded-xl shadow-xl border p-2 border-slate-500 overflow-y-auto scroll-smooth">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
