import { Banknote, Building, Currency, Edit, EyeIcon, MapPin, Pencil, Trash } from "lucide-react";
import { Job } from "./JobPost";

const JobPostCard: React.FC<{
    job: Job;
    handleEditJob?: (job: Job) => void;
    handleDeleteJob?: (id: string) => void;
    handleViewJob?: () => void;
}> = ({ job, handleEditJob, handleDeleteJob, handleViewJob }) => {
    return (
        <div className="flex flex-col justify-between h-full p-5 bg-white  rounded-md  hover:shadow-md transition">

            {/* Top Content */}
            <div className="space-y-2">
                <div className="flex gap-1 justify-between">
                    {/* Location */}
                    <p className="text-xs text-gray-500 flex items-center gap-1 mb-0 capitalize">
                        <MapPin size={14} className="text-zinc-400 mr-1" /> {job.location}
                    </p>
                    {/* Date */}
                    <p className="text-xs text-right text-gray-400">
                        {new Date(job.CreatedAt).toLocaleDateString()}
                    </p>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-zinc-700 line-clamp-2 mb-0 capitalize">
                    {job.JobTitle}
                </h3>

                {/* Company */}
                <p className="text-sm font-medium text-zinc-500 flex items-center gap-1 capitalize mt-1 mb-3">
                    <Building size={14} className="text-zinc-500" /> {job.company_name}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-500 line-clamp-4">
                    {job.JobDescription}
                </p>
            </div>

            {/* Bottom Content */}
            <div className="mt-4 space-y-3">

                {/* Salary */}
                <p className="text-sm font-regular font-italic text-zinc-400">
                    <Banknote size={14} className="inline-block mr-1" /> Rs {job.salary.min?.toLocaleString() || "N/A"} - Rs{" "}
                    {job.salary.max?.toLocaleString() || "N/A"}
                </p>

                {/* Actions */}
                <div className="flex justify-between items-center pt-3 border-t">
                    {handleEditJob && <button
                        onClick={() => handleEditJob(job)}
                        className="text-zinc-400 hover:text-zinc-600 cursor-pointer text-sm"
                    >
                        <Pencil size={14} />
                    </button>}

                    {handleDeleteJob && <button
                        onClick={() => handleDeleteJob(job.id)}
                        className="text-zinc-400 hover:text-zinc-600 cursor-pointer text-sm"
                    >
                        <Trash size={14} />
                    </button>}

                    {handleViewJob && <button
                        onClick={() => handleViewJob()}
                        className="text-zinc-400 hover:text-zinc-600 cursor-pointer bg-zinc-100 px-4 rounded-md py-2 text-sm text-white"
                    >
                        <EyeIcon size={14} className="inline-block mr-1" /> View Job
                    </button>}
                </div>
            </div>
        </div>

    )
}

export default JobPostCard;