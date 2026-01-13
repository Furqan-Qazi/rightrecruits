"use client";

import { BellDot, ChevronDown } from "lucide-react";

const Dropdown = ({ title, items }: { title: string; items: string[] }) => {
  return (
    <div className="relative group">
      {/* Trigger */}
      <div className="flex items-center gap-1 cursor-pointer text-sm font-medium hover:text-lime-300">
        {title}
        <ChevronDown size={15} />
      </div>

      {/* Dropdown on hover */}
      <div className="absolute top-8 left-0 w-44 bg-gray-900 border border-white/10 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {items.map((item, i) => (
          <div
            key={i}
            className="px-4 py-2 text-sm hover:bg-gray-800 cursor-pointer"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const Topbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-20 px-6 bg-black/70 backdrop-blur text-white border-b border-white/20 flex items-center z-50">
      {/* LEFT SIDE */}
      <div className="flex items-center gap-10">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <BellDot size={26} className="text-lime-400" />
          <h1 className="text-xl font-bold text-lime-300">
            Right <span className="text-lime-200">Recruits</span>
          </h1>
        </div>

        {/* DROPDOWNS (near logo) */}
        <div className="hidden md:flex gap-6">
          <Dropdown
            title="Dashboard"
            items={["Overview", "Stats", "Reports"]}
          />
          <Dropdown title="Users" items={["All Users", "Admins", "Blocked"]} />
          <Dropdown
            title="Jobs"
            items={["All Jobs", "Post Job", "Categories"]}
          />
          <Dropdown title="Settings" items={["General", "Security", "Roles"]} />
          <Dropdown
            title="Profile"
            items={["My Profile", "Account", "Logout"]}
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="ml-auto">
        <button className="bg-lime-500 text-black font-semibold px-5 py-2 rounded-full hover:bg-lime-400">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Topbar;
