"use client";

import { X } from "lucide-react";
import { ReactNode } from "react";

type SlideInProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  width?: string;
};

export default function SlideIn({
  open,
  onClose,
  title,
  children,
  width = "max-w-xl",
}: SlideInProps) {
  return (
    <>
      {/* Backdrop */}
      {open && (
        <div onClick={onClose} className="fixed inset-0 bg-black/40 z-40" />
      )}

      {/* Center Modal */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center pointer-events-none`}
      >
        <div
          className={`
            bg-white w-full ${width} rounded-xl shadow-xl
            transform transition-all duration-300
            ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
            pointer-events-auto
            relative
          `}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">{title}</h2>
            <button onClick={onClose}>
              <X className="text-gray-600 hover:text-black" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4 max-h-[80vh] overflow-y-auto">{children}</div>
        </div>
      </div>
    </>
  );
}
