import React from "react";
import { LucideIcon } from "lucide-react";

interface CustomButtonProps {
  text: string;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  bgColor?: string;
  textColor?: string;
  hoverColor?: string;
  className?: string;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  icon: Icon,
  iconPosition = "right",
  bgColor = "bg-lime-500",
  textColor = "text-white",
  hoverColor = "hover:bg-lime-400",
  className = "",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-fit px-6 py-2 rounded-full transition flex items-center justify-center text-center gap-2 ${bgColor} ${textColor} ${hoverColor} ${className}`}
    >
      {iconPosition === "left" && Icon && <Icon className="w-5 h-5 stroke-2" />}
      {text}
      {iconPosition === "right" && Icon && (
        <Icon className="w-5 h-5 stroke-2" />
      )}
    </button>
  );
};

export default CustomButton;
