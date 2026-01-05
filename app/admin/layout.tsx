"use client";

import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen bg-gray-100">
      {/* TOPBAR */}
      <Topbar />

      <div className="flex pt-20">
        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN CONTENT */}
        <main className="ml-64 w-full h-[calc(100vh-5rem)] overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
