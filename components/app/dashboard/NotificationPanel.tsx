"use client";

import React from "react";

export interface NotificationItem {
  id: number | string;
  name: string;
  message: string;
  time: string;
  icon?: string; // Emoji ya icon
  iconBg?: string; // Tailwind bg color
  iconTextColor?: string; // Tailwind text color
  isLink?: boolean; // Agar "View More" link hai
}

// ✅ Notifications data yahin rakha
export const notifications: NotificationItem[] = [
  {
    id: 1,
    name: "Kr. Shaury Preet",
    message: "Replied to your message.",
    time: "Just Now",
    icon: "🔔",
    iconBg: "#DBEAFE", // Tailwind blue-100
    iconTextColor: "#2563EB", // Tailwind blue-600
  },
  {
    id: 2,
    name: "Mortin Denver",
    message: "Accepted your resume on JobStock.",
    time: "20 min ago",
    icon: "✅",
    iconBg: "#DCFCE7", // green-100
    iconTextColor: "#16A34A", // green-600
  },
  {
    id: 3,
    name: "Job #456256",
    message: "Expired yesterday.",
    time: "1 day ago",
    icon: "⚠️",
    iconBg: "#FEE2E2", // red-100
    iconTextColor: "#B91C1C", // red-600
    isLink: true,
  },
  {
    id: 4,
    name: "Daniel Kurwa",
    message: "Has been approved your resume!",
    time: "10 days ago",
    icon: "👤",
    iconBg: "#EDE9FE", // purple-100
    iconTextColor: "#7C3AED", // purple-600
  },
  {
    id: 5,
    name: "Khalid",
    message: "Left a review on your message.",
    time: "Just Now",
    icon: "💬",
    iconBg: "#FCE7F3", // pink-100
    iconTextColor: "#DB2777", // pink-600
  },
];

interface NotificationPanelProps {
  title?: string;
  maxHeight?: string;
}

const NotificationPanel: React.FC<NotificationPanelProps> = ({
  title = "Notifications",
  maxHeight = "400px",
}) => {
  return (
    <div
      className="bg-white rounded-xl shadow p-6 overflow-y-auto"
      style={{ maxHeight }}
    >
      <h3 className="text-lg font-semibold mb-6">{title}</h3>

      <ul className="space-y-4">
        {notifications.map((item) => (
          <li
            key={item.id}
            className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
          >
            {/* Left Icon */}
            <div className="shrink-0 mt-1">
              <span
                className="inline-flex w-9 h-9 rounded-full items-center justify-center text-lg"
                style={{
                  backgroundColor: item.iconBg || "#e5e7eb",
                  color: item.iconTextColor || "#374151",
                }}
              >
                {item.icon || "🔔"}
              </span>
            </div>

            {/* Right Text */}
            <div className="flex-1">
              <p className="font-semibold text-gray-800 leading-tight">{item.name}</p>
              <p className="text-gray-500 text-sm mt-1">{item.message}</p>
              {item.isLink && (
                <span className="text-xs text-blue-600 cursor-pointer mt-1 block">
                  View More
                </span>
              )}
              <span className="text-xs text-gray-400 mt-1 block">{item.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationPanel;
