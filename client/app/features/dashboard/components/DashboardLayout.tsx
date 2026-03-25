import React from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar"; // Create this component

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen flex flex-col">
      
      {/* Header */}
      <DashboardHeader />

      {/* Body: Sidebar + Content */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Sidebar */}
        <div className="w-50 shadow-2xl text-white shrink-0 border-2 border-slate-300">
          <DashboardSidebar />
        </div>

        {/* Main scrollable content */}
        <div className="flex-1 overflow-y-auto p-4">
          {children}
        </div>
      </div>
    </div>
  );
}