"use client";

import {
  MapPin,
  Briefcase,
  Clock,
  Building2,
  DollarSign,
  Check,
} from "lucide-react";

export default function JobDetail({ job }: any) {
  return (
    <div className="space-y-6 flex flex-col h-full">
      <div className="overflow-y-auto">
        {/* HEADER */}
        <div className="px-2 relative">
          <h1 className="text-2xl font-bold capitalize text-gray-900">{job.job_title}</h1>

          <div className="flex justify-between gap-2 items-start">
            <div className="flex items-center capitalize gap-2 text-gray-500 mt-2 text-sm">
              <Building2 size={16} />
              {job.company_name}
            </div>

            {/* SALARY BADGE */}
            <div className="px-3 py-1 bg-green-100 text-green-800 font-semibold rounded-full text-sm flex items-center gap-1">
              Rs {" "} {job.salary_min.toLocaleString()} - {job.salary_max.toLocaleString()}
            </div>
          </div>
        </div>

        {/* META INFO */}
        <div className="grid grid-cols-3 gap-4 text-gray-600 text-sm my-6">
          <div className="flex capitalize items-center gap-1 border border-gray-100 rounded-lg p-2 justify-center bg-zinc-100 hover:shadow-md transition">
            <MapPin size={16} className="text-zinc-600" />
            {job.location}
          </div>

          <div className="flex capitalize items-center gap-1 border border-gray-100 rounded-lg p-2 justify-center bg-zinc-100 hover:shadow-md transition">
            <Briefcase size={16} className="text-zinc-600" />
            {job.employment_type}
          </div>

          <div className="flex items-center gap-1 border border-gray-100 rounded-lg p-2 justify-center bg-zinc-100 hover:shadow-md transition">
            <Clock size={16} className="text-zinc-600" />
            {new Date(job.created_at).toLocaleDateString()}
          </div>
        </div>

        {/* JOB DESCRIPTION */}
        <div className="bg-white border border-gray-100 rounded-md p-5">
          <h3 className="font-semibold text-gray-900 mb-2">Job Description</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            {job.job_description}
          </p>
        </div>

        {/* HIGHLIGHTS */}
        <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 space-y-2">
          {[
            "Competitive salary",
            "Career growth & learning",
            "Friendly work environment",
          ].map((text, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-gray-700 font-medium"
            >
              <Check size={16} className="text-green-600" />
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* APPLY BUTTON */}
      <button className="w-full py-3 bg-blue-500 hover:bg-blue-700 text-white rounded-md font-semibold text-lg shadow-lg transition-transform">
        Apply Now
      </button>
    </div>
  );
}
