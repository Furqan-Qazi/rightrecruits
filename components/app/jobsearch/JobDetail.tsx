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
    <div className="space-y-6">
      {/* HEADER */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 relative overflow-hidden">
        <h1 className="text-2xl font-bold text-gray-900">{job.job_title}</h1>

        <div className="flex items-center gap-2 text-gray-500 mt-2 text-sm">
          <Building2 size={16} />
          {job.company_name}
        </div>

        {/* SALARY BADGE */}
        <div className="absolute top-6 right-6 px-3 py-1 bg-green-100 text-green-800 font-semibold rounded-full text-sm flex items-center gap-1">
          <DollarSign size={14} />
          {job.salary_min.toLocaleString()} – {job.salary_max.toLocaleString()}
        </div>
      </div>

      {/* META INFO */}
      <div className="grid grid-cols-3 gap-4 text-gray-600 text-sm">
        <div className="flex items-center gap-1 border border-gray-100 rounded-lg p-2 justify-center shadow-sm hover:shadow-md transition">
          <MapPin size={16} className="text-blue-600" />
          {job.location}
        </div>

        <div className="flex items-center gap-1 border border-gray-100 rounded-lg p-2 justify-center shadow-sm hover:shadow-md transition">
          <Briefcase size={16} className="text-blue-600" />
          {job.employment_type}
        </div>

        <div className="flex items-center gap-1 border border-gray-100 rounded-lg p-2 justify-center shadow-sm hover:shadow-md transition">
          <Clock size={16} className="text-blue-600" />
          {new Date(job.created_at).toLocaleDateString()}
        </div>
      </div>

      {/* JOB DESCRIPTION */}
      <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-5">
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

      {/* APPLY BUTTON */}
      <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg shadow-lg transition-transform hover:scale-[1.03]">
        Apply Now
      </button>
    </div>
  );
}
