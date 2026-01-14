"use client";

import Sidebar from "@/components/app/Sidebar";
import Topbar from "@/components/app/Topbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen bg-gray-100">
      {/* TOPBAR */}
      {/* <Topbar /> */}

      <div className="flex">
        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN CONTENT */}
        <main className="ml-64 w-full h-[calc(100vh)] overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
