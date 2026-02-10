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
      <div className={`fixed inset-0 z-50 flex items-stretch justify-end pointer-events-none`}>
        <div
          className={`
            bg-white w-full ${width} rounded-l-md shadow-xl
            transform transition-all duration-300
            ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
            pointer-events-auto
            relative
            flex flex-col
          `}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b shadow">
            <h2 className="text-lg text-zinc-700 font-semibold">{title}</h2>
            <button onClick={onClose}>
              <X className="text-gray-600 hover:text-black" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4 h-full overflow-y-auto">{children}</div>
        </div>
      </div>
    </>
  );
}
