import React from "react";
import { LucideIcon } from "lucide-react";

interface CardProps {
  title?: React.ReactNode;
  description?: string;
  children?: React.ReactNode;

  background?: string;
  border?: string;
  shadow?: string;
  className?: string;
  style?: React.CSSProperties;

  textColor?: string;

  icon?: LucideIcon;
  iconSize?: string;
  iconColor?: string;
  iconWrapperClass?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  children,
  background = "bg-white",
  border = "",
  shadow = "shadow-lg",
  className = "",
  style = {},
  textColor = "text-gray-900",
  icon: Icon,
  iconSize = "w-6 h-6",
  iconColor = "text-gray-900",
  iconWrapperClass = "",
}) => {
  return (
    <div
      className={` ${background} ${border} ${shadow} p-6 transition ${className}`}
      style={style}
    >
      {Icon && (
        <div
          className={`flex items-center justify-center mb-3 ${iconWrapperClass}`}
        >
          <Icon className={`${iconSize} ${iconColor}`} />
        </div>
      )}

      {title && (
        <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>{title}</h3>
      )}

      {description && (
        <p className={`opacity-80 ${textColor}`}>{description}</p>
      )}

      {children}
    </div>
  );
};

export default Card;
