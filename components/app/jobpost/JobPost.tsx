"use client";

import { Edit, Plus, Trash } from "lucide-react";
import InputField from "../../../components/global/InputField";
import TextAreaField from "../../../components/global/TextAreaField";
import { useState, useEffect } from "react";
import { addJob, updateJob, deleteJob, getMyJobs, JobDB } from "@/src/lib/jobs";
import { supabase } from "@/src/lib/supabaseClient";
import { getEmployerByUser } from "@/src/lib/employer";
import JobPostCard from "./JobPostCard";

/* ================= TYPES ================= */
type SalaryRange = { min: number | undefined; max: number | undefined };

export type Job = {
  id: string;
  JobTitle: string;
  company_name: string;
  employment_type: string;
  salary: SalaryRange;
  location: string;
  JobDescription: string;
  CreatedAt: string;
};

/* ================= COMPONENT ================= */
export default function JobPost() {
  const [addJobForm, setAddJobForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [list, setList] = useState<Job[]>([]);
  const [form, setForm] = useState<Job>({
    id: "",
    JobTitle: "",
    company_name: "",
    employment_type: "",
    salary: { min: undefined, max: undefined },
    location: "",
    JobDescription: "",
    CreatedAt: "",
  });

  const [employerId, setEmployerId] = useState<string>("");

  // ================= GET EMPLOYER ID =================
  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error) return console.error(error.message);
      if (user) setEmployerId(user.id);
    };
    getUser();
  }, []);

  // ================= LOAD JOBS =================
  useEffect(() => {
    const loadJobs = async () => {
      const employer = await getEmployerByUser();
      if (!employer) return console.error("Employer not found");

      const { data, error } = await getMyJobs();
      if (error) return console.error(error.message);

      if (data) {
        const jobs = data.map((job: any) => ({
          id: job.id,
          JobTitle: job.job_title,
          company_name: job.company_name || "",
          employment_type: job.employment_type || "",
          salary: {
            min: job.salary_min || null,
            max: job.salary_max || null,
          },
          location: job.location || "",
          JobDescription: job.job_description || "",
          CreatedAt: job.created_at || "",
        }));
        setList(jobs);
      }
    };
    loadJobs();
  }, []);

  /* ================= ADD / UPDATE JOB ================= */
  const handleAddOrUpdateJob = async () => {
    if (!form.JobTitle || !form.company_name) return;

    const payload: Omit<JobDB, "employer_id"> = {
      job_title: form.JobTitle,
      company_name: form.company_name,
      employment_type: form.employment_type,
      salary_min: form.salary.min,
      salary_max: form.salary.max,
      location: form.location || "",
      job_description: form.JobDescription || "",
    };

    try {
      if (editingId) {
        const { data, error } = await updateJob(editingId, payload as JobDB);
        if (error) throw error;

        setList((prev) =>
          prev.map((j) =>
            j.id === editingId
              ? {
                  ...j,
                  ...payload,
                  JobTitle: payload.job_title,
                  JobDescription: payload.job_description || "",
                  salary: {
                    min: payload.salary_min || 0,
                    max: payload.salary_max || 0,
                  },
                }
              : j,
          ),
        );
        setEditingId(null);
      } else {
        const { data, error } = await addJob(payload as JobDB);
        if (error) throw error;

        setList((prev) => [
          ...prev,
          {
            id: data.id,
            JobTitle: data.job_title,
            company_name: data.company_name || "",
            employment_type: data.employment_type || "",
            salary: { min: data.salary_min || 0, max: data.salary_max || 0 },
            location: data.location || "",
            JobDescription: data.job_description || "",
            CreatedAt: data.created_at || "",
          },
        ]);
      }

      setForm({
        id: "",
        JobTitle: "",
        company_name: "",
        employment_type: "",
        salary: { min: 30000, max: 80000 },
        location: "",
        JobDescription: "",
        CreatedAt: "",
      });
      setAddJobForm(false);
    } catch (err: any) {
      alert("Error: " + err.message);
    }
  };

  /* ================= DELETE JOB ================= */
  const handleDeleteJob = async (id: string) => {
    try {
      const { error } = await deleteJob(id);
      if (error) throw error;
      setList((prev) => prev.filter((j) => j.id !== id));
    } catch (err: any) {
      alert("Delete failed: " + err.message);
    }
  };

  /* ================= EDIT JOB ================= */
  const handleEditJob = (job: Job) => {
    setForm(job);
    setEditingId(job.id);
    setAddJobForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ================= UI ================= */
  return (
    <>
    <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-8 my-8">
      <div className="flex justify-between items-center border-b pb-2">
        <h2 className="text-xl font-bold text-gray-700">Job add/edit</h2>
        <button
          onClick={handleAddOrUpdateJob}
          className="flex items-center gap-2 bg-zinc-700 text-white px-4 py-2 rounded-lg"
        >
          {editingId ? "Update Job" : "Save Job"} <Plus size={16} />
        </button>
      </div>

      {/* JOB LIST */}
      
      {!addJobForm && (
        <div
          onClick={() => setAddJobForm(true)}
          className="p-6 text-center bg-gray-50 rounded-lg cursor-pointer"
        >
          <Plus className="inline-block" />
        </div>
      )}

      {/* JOB FORM */}
      {addJobForm && (
        <>
          <div className="grid md:grid-cols-2 gap-4 bg-gray-50 p-6 rounded-lg">
            <InputField
              placeholder="Job Title"
              value={form.JobTitle}
              setValue={(v) => setForm({ ...form, JobTitle: v as string })}
            />
            <InputField
              placeholder="Company Name"
              value={form.company_name}
              setValue={(v) => setForm({ ...form, company_name: v as string })}
            />
            <InputField
              placeholder="Employment Type"
              value={form.employment_type}
              setValue={(v) =>
                setForm({ ...form, employment_type: v as string })
              }
            />
            <InputField
              placeholder="Location"
              value={form.location}
              setValue={(v) => setForm({ ...form, location: v as string })}
            />

            <InputField label="Min Salary" placeholder="Min Salary" type="number" value={form.salary.min?.toString() || ""} setValue={(v) => setForm({ ...form, salary: { ...form.salary, min: +v } })} />
            <InputField label="Max Salary" placeholder="Max Salary" type="number" value={form.salary.max?.toString() || ""} setValue={(v) => setForm({ ...form, salary: { ...form.salary, max: +v } })} />
         

            <TextAreaField
              className="md:col-span-2"
              placeholder="Job Description"
              rows={4}
              value={form.JobDescription}
              setValue={(v) =>
                setForm({ ...form, JobDescription: v as string })
              }
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setAddJobForm(false)}
              className="bg-zinc-300 text-zinc-700 px-6 py-3 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </section>
    <section className="max-w-4xl mx-auto  space-y-8">
      <div className="flex justify-between items-center border-b pb-2">
        <h3 className="text-xl font-bold text-zinc-700">Job Posted</h3>
      </div>

      {/* JOB LIST */}
      <div className="space-y-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((job) => (
          <JobPostCard
            key={job.id}
            job={job}
            handleEditJob={handleEditJob}
            handleDeleteJob={handleDeleteJob}
          />
        ))}
      </div>
    </section>
    </>
  );
}
