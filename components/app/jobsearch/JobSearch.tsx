import Card from "@/components/global/card";
import { Briefcase, MapPin, Clock } from "lucide-react";

type Job = {
  id: string;
  job_title: string;
  job_description: string;
  salary_min: number;
  salary_max: number;
  employment_type: string;
  location: string;
  company_name: string;
  created_at: string; // date string from DB
};

export default function JobSearch({ job }: { job: Job }) {
  // Check if the job is "new" (last 24 hours)
  const isNew =
    new Date().getTime() - new Date(job.created_at).getTime() <
    24 * 60 * 60 * 1000;

  return (
    <Card
      title={job.job_title}
      description={job.company_name}
      icon={Briefcase}
      border="border border-gray-200"
      shadow="shadow-lg hover:shadow-2xl"
      className="rounded-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
      iconWrapperClass="bg-gradient-to-r from-blue-100 to-blue-200 rounded-full w-12 h-12 flex items-center justify-center"
      iconColor="text-blue-600"
    >
      {/* New Ribbon */}
      {isNew && (
        <span className="absolute top-2 right-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-lg">
          NEW
        </span>
      )}

      <p className="text-sm text-gray-700 mt-2 line-clamp-3">
        {job.job_description}
      </p>

      <div className="flex items-center gap-3 mt-3 text-gray-500 text-sm">
        <div className="flex items-center gap-1">
          <MapPin size={16} />
          {job.location}
        </div>
        <div className="flex items-center gap-1">
          <Clock size={16} />
          {new Date(job.created_at).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })}
        </div>
      </div>

      <div className="mt-3 font-semibold text-sm text-gray-800">
        💰 {job.salary_min.toLocaleString()} – {job.salary_max.toLocaleString()}
      </div>

      <span className="inline-block mt-2 text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
        {job.employment_type}
      </span>

      <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition-all">
        View Job
      </button>
    </Card>
  );
}
