"use client";

import React from "react";
import { Edit, Trash2 } from "lucide-react";

const RecentPosted = () => {
  const posts = [
    {
      id: 1,
      title: "Frontend Developer",
      description: "Build amazing UI with React and Tailwind.",
      image: "/images/men1.jpg",
      postedDate: "2026-01-01",
      expiryDate: "2026-01-15",
      expired: true,
    },
    {
      id: 2,
      title: "Backend Developer",
      description: "Work with Node.js and databases.",
      image: "/images/men2.jpg",
      postedDate: "2026-01-02",
      expiryDate: "2026-01-20",
      expired: false, // application active
    },
    {
      id: 3,
      title: "Backend Developer",
      description: "Work with Node.js and databases.",
      image: "/images/men3.jpg",
      postedDate: "2026-01-02",
      expiryDate: "2026-01-20",
      expired: true,
    },
    {
      id: 4,
      title: "Backend Developer",
      description: "Work with Node.js and databases.",
      image: "/images/men.jpg",
      postedDate: "2026-01-02",
      expiryDate: "2026-01-20",
      expired: false,
    },
    {
      id: 5,
      title: "Backend Developer",
      description: "Work with Node.js and databases.",
      image: "/images/women2.jpg",
      postedDate: "2026-01-02",
      expiryDate: "2026-01-20",
      expired: true,
    },
  ];

  return (
    <div className="w-full p-4 bg-white shadow-lg rounded-xl border border-gray-300 space-y-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200"
        >
          {/* IMAGE LEFT */}
          <div className="flex-shrink-0">
            <img
              src={post.image}
              alt={post.title}
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>

          {/* TITLE + DESCRIPTION */}
          <div className="flex-9 flex flex-col justify-center gap-1">
            <h4 className="font-semibold text-gray-800">{post.title}</h4>
            <p className="text-gray-600 text-sm">{post.description}</p>
          </div>

          {/* CONDITIONAL BUTTON CENTERED */}
          <div className="flex flex-col justify-center">
            {post.expired ? (
              <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm">
                Expired
              </button>
            ) : (
              <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm">
                Application
              </button>
            )}
          </div>

          {/* DATES */}
          <div className="flex flex-col gap-1 text-xs">
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full">
              Posted: {post.postedDate}
            </span>
            <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full">
              Expiry: {post.expiryDate}
            </span>
          </div>

          {/* EDIT / DELETE */}
          <div className="flex flex-col gap-2">
            <button className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm">
              <Edit size={16} />
            </button>
            <button className="flex items-center gap-1 px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm">
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentPosted;
