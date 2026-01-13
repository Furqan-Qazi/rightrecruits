import React from "react";
import { Icon as LucideIcon } from "lucide-react";

interface AdminCardProps {
  title: string;
  description: string | number;
  icon: LucideIcon;
  iconSize?: string;
  iconColor?: string;
  iconBg?: string;
  iconBorder?: string;
  background?: string;
  shadow?: string;
  className?: string;
}

const AdminCard: React.FC<AdminCardProps> = ({
  title,
  description,
  icon: Icon,
  iconSize = "w-6 h-6",
  iconColor = "text-white",
  iconBg = "bg-gray-500",
  iconBorder = "border-gray-300",
  background = "bg-white",
  shadow = "shadow-lg",
  className = "",
}) => {
  return (
    <div
      className={`flex items-center gap-4 ${background} p-6 rounded-xl ${shadow} transition hover:shadow-xl ${className}`}
    >
      {/* Icon */}
      <div
        className={`flex items-center justify-center w-12 h-12 rounded-full ${iconBg} border-2 ${iconBorder}`}
      >
        <Icon className={`${iconSize} ${iconColor}`} />
      </div>

      {/* Text */}
      <div className="text-right mr-4">
        <h1 className="mt-1 text-2xl font-bold">{description}</h1>
        <h3 className="font-bold test-2xl">{title}</h3>
      </div>
    </div>
  );
};

export default AdminCard;
