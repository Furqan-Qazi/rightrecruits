import React from "react";
import { LucideIcon } from "lucide-react";

interface TextAreaFieldProps {
  id?: string;
  name?: string;
  label?: string;
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  type?: string;
  placeholder?: string;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  className?: string;
  error?: string | null;
  autoComplete?: string;
  rows?: number;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  id,
  name,
  label,
  value,
  setValue,
  placeholder = "",
  icon: Icon,
  iconPosition = "left",
  className = "",
  error = null,
  autoComplete,
  rows,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (typeof setValue === "function") {
      setValue(e.target.value);
      return;
    }
  };

  const hasIcon = Boolean(Icon);
  const paddingClass = hasIcon
    ? iconPosition === "left"
      ? "pl-10"
      : "pr-10"
    : "";
  const borderClass = error ? "border-red-500" : "border-gray-300";

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label
          htmlFor={id ?? name}
          className="block text-sm font-medium text-gray-500"
        >
          {label}
        </label>
      )}

      <div className="mt-2 relative">
        {hasIcon && iconPosition === "left" && Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Icon className="w-5 h-5" />
          </div>
        )}

        <textarea
          id={id}
          name={name}
          autoComplete={autoComplete}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          rows={rows}
          className={`w-full px-3 py-2 ${paddingClass} rounded-lg border outline-none transition focus:ring-2 focus:ring-lime-500 ${borderClass}`}
        />

        {hasIcon && iconPosition === "right" && Icon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default TextAreaField;
