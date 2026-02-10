"use client";

import InputField from "@/components/global/InputField";
import { X } from "lucide-react";

type Filters = {
  company_name: string;
  location: string;
  employment_type: string;
  salary_min: string;
  salary_max: string;
};

export default function JobFilter({
  open,
  onClose,
  filters,
  setFilters,
  onApply,
}: {
  open: boolean;
  onClose: () => void;
  filters: Filters;
  setFilters: (filters: Filters) => void;
  onApply: () => void;
}) {
  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div onClick={onClose} className="fixed inset-0 bg-black/50 z-40" />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-md bg-white rounded-2xl shadow-2xl animate-scaleIn"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b">
            <h2 className="text-xl text-zinc-600 font-semibold">Filter Jobs</h2>
            <button onClick={onClose}>
              <X className="text-gray-500 hover:text-black" />
            </button>
          </div>

          {/* Body */}
          <div className="p-5 space-y-4">
            <InputField 
              placeholder="Company name"
              value={filters.company_name}
              onChange={(e) =>
                setFilters({ ...filters, company_name: e.target.value })
              }
            />

            <InputField
              placeholder="Location"
              value={filters.location}
              onChange={(e) =>
                setFilters({ ...filters, location: e.target.value })
              }
            />

            <select
              value={filters.employment_type}
              onChange={(e) =>
                setFilters({ ...filters, employment_type: e.target.value })
              }
              className="w-full px-3 py-2 rounded-lg border border-zinc-300 outline-none transition text-gray-700 focus:ring-2 focus:ring-lime-500"
            >
              <option value="">Employment Type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Remote">Remote</option>
              <option value="Contract">Contract</option>
            </select>

            <div className="flex gap-3">
              <InputField
                type="number"
                placeholder="Min Salary"
                value={filters.salary_min}
                onChange={(e) =>
                  setFilters({ ...filters, salary_min: e.target.value })
                }
              />

              <InputField
                type="number"
                placeholder="Max Salary"
                value={filters.salary_max}
                onChange={(e) =>
                  setFilters({ ...filters, salary_max: e.target.value })
                }
              />
            </div>
          </div>

          {/* Footer */}
          <div className="px-5 py-4 border-t flex gap-3">
            <button onClick={onClose} className="w-1/2 border text-zinc-400 rounded-lg py-2">
              Cancel
            </button>

            <button
              onClick={onApply}
              className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2"
            >
              Apply
            </button>
          </div>
        </div>
      </div>

      {/* Inline component-only animation */}
      <style jsx>{`
        .animate-scaleIn {
          animation: scaleIn 0.2s ease-out;
        }
        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
