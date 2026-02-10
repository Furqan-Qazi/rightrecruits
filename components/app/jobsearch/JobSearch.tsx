"use client";

import SlideIn from "@/components/global/Slidein";
import JobDetail from "./JobDetail";
import { useState } from "react";
import JobPostCard from "../jobpost/JobPostCard";
import { Job } from "../jobpost/JobPost";

type SupabaseJob = {
  id: string;
  job_title: string;
  job_description: string;
  salary_min: number;
  salary_max: number;
  employment_type: string;
  location: string;
  company_name: string;
  created_at: string;
};

export default function JobSearch({ job }: { job: SupabaseJob }) {
  const [open, setOpen] = useState(false);
  const _job: Job = {
    id: job.id,
    JobTitle: job.job_title,
    company_name: job.company_name,
    employment_type: job.employment_type,
    location: job.location,
    salary: { min: job.salary_min, max: job.salary_max },
    JobDescription: job.job_description,
    CreatedAt: new Date(job.created_at).toLocaleDateString(),
  };

  const isNew =
    new Date().getTime() - new Date(job.created_at).getTime() <
    24 * 60 * 60 * 1000;

  return (
    <>
    <div onClick={()=> setOpen(true)} className="cursor-pointer">
      <JobPostCard job={_job} handleViewJob={() => setOpen(true)} />
    </div>

      {/* 🔥 SLIDE IN */}
      <SlideIn
        open={open}
        onClose={() => setOpen(false)}
        title="Job Details"
        width="max-w-xl"
      >
        <JobDetail job={job} />
      </SlideIn>
    </>
  );
}
