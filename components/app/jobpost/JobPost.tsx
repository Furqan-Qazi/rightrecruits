"use client";

import { Edit, Plus, Trash } from "lucide-react";
import InputField from "../../../components/global/InputField";
import TextAreaField from "../../../components/global/TextAreaField";
import { useState, useEffect } from "react";
import { addJob, updateJob, deleteJob, getMyJobs, JobDB } from "@/src/lib/jobs";
import { getEmployerByUser } from "@/src/lib/employer";

/* ================= TYPES ================= */
type SalaryRange = { min: number; max: number };

type Job = {
  id: string;
  JobTittle: string;
  company_name: string;
  employment_type: string;
  salary: SalaryRange;
  location: string;
  JobDescription: string;
};

/* ================= COMPONENT ================= */
export default function JobPost() {
  const [addJobForm, setAddJobForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [list, setList] = useState<Job[]>([]);
  const [form, setForm] = useState<Job>({
    id: "",
    JobTittle: "",
    company_name: "",
    employment_type: "",
    salary: { min: 30000, max: 80000 },
    location: "",
    JobDescription: "",
  });

  /* ================= LOAD JOBS ================= */
  useEffect(() => {
    const loadJobs = async () => {
      const employer = await getEmployerByUser();
      if (!employer) return console.error("Employer not found");

      const { data, error } = await getMyJobs();
      if (error) return console.error(error.message);

      if (data) {
        const jobs = data.map((job: any) => ({
          id: job.id,
          JobTittle: job.job_title,
          company_name: job.company_name || "",
          employment_type: job.employment_type || "",
          salary: {
            min: job.salary_min || 30000,
            max: job.salary_max || 80000,
          },
          location: job.location || "",
          JobDescription: job.job_description || "",
        }));
        setList(jobs);
      }
    };
    loadJobs();
  }, []);

  /* ================= ADD / UPDATE JOB ================= */
  const handleAddOrUpdateJob = async () => {
    if (!form.JobTittle || !form.company_name) return;

    const payload: Omit<JobDB, "employer_id"> = {
      job_title: form.JobTittle,
      company_name: form.company_name,
      employment_type: form.employment_type,
      salary_min: form.salary.min,
      salary_max: form.salary.max,
      location: form.location,
      job_description: form.JobDescription,
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
                  JobTittle: payload.job_title,
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
            JobTittle: data.job_title,
            company_name: data.company_name || "",
            employment_type: data.employment_type || "",
            salary: { min: data.salary_min || 0, max: data.salary_max || 0 },
            location: data.location || "",
            JobDescription: data.job_description || "",
          },
        ]);
      }

      setForm({
        id: "",
        JobTittle: "",
        company_name: "",
        employment_type: "",
        salary: { min: 30000, max: 80000 },
        location: "",
        JobDescription: "",
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
    <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-8">
      <div className="flex justify-between items-center border-b pb-2">
        <h2 className="text-3xl font-bold text-gray-700">Job</h2>
        <button
          onClick={handleAddOrUpdateJob}
          className="flex items-center gap-2 bg-zinc-700 text-white px-4 py-2 rounded-lg"
        >
          {editingId ? "Update Job" : "Save Job"} <Plus size={16} />
        </button>
      </div>

      {/* JOB LIST */}
      <div className="space-y-4">
        {list.map((job) => (
          <div
            key={job.id}
            className="flex justify-between p-4 border rounded-lg"
          >
            <div>
              <h3 className="font-semibold">{job.JobTittle}</h3>
              <p className="text-sm text-gray-600">
                {job.company_name} — {job.employment_type || "N/A"}
              </p>
              <p className="text-sm">
                Rs {job.salary.min.toLocaleString()} – Rs{" "}
                {job.salary.max.toLocaleString()}
              </p>
              <p className="text-xs text-gray-500">📍 {job.location}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEditJob(job)}
                className="text-blue-600"
              >
                <Edit />
              </button>
              <button
                onClick={() => handleDeleteJob(job.id)}
                className="text-red-600"
              >
                <Trash />
              </button>
            </div>
          </div>
        ))}
      </div>

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
              label="Job Title"
              value={form.JobTittle}
              setValue={(v) => setForm({ ...form, JobTittle: v })}
            />
            <InputField
              placeholder="Company Name"
              value={form.company_name}
              setValue={(v) => setForm({ ...form, company_name: v })}
            />
            <InputField
              placeholder="Employment Type"
              value={form.employment_type}
              setValue={(v) => setForm({ ...form, employment_type: v })}
            />
            <InputField
              placeholder="Location"
              value={form.location}
              setValue={(v) => setForm({ ...form, location: v })}
            />

            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-medium text-gray-600">
                Salary Range
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={form.salary.min}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      salary: { ...form.salary, min: +e.target.value },
                    })
                  }
                  className="w-full"
                />
                <input
                  type="number"
                  value={form.salary.max}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      salary: { ...form.salary, max: +e.target.value },
                    })
                  }
                  className="w-full"
                />
              </div>
            </div>

            <TextAreaField
              className="md:col-span-2"
              placeholder="Job Description"
              rows={4}
              value={form.JobDescription}
              setValue={(v) => setForm({ ...form, JobDescription: v })}
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleAddOrUpdateJob}
              className="bg-zinc-700 text-white px-6 py-3 rounded-lg"
            >
              {editingId ? "Update Job" : "Add Job"}
            </button>
            <button
              onClick={() => setAddJobForm(false)}
              className="bg-zinc-300 px-6 py-3 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </section>
  );
}
