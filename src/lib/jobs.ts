import { supabase } from "./supabaseClient";
import { getEmployerByUser } from "./employer";

export type JobDB = {
  id?: string;
  job_title: string;
  company_name?: string;
  employment_type?: string;
  salary_min?: number;
  salary_max?: number;
  location?: string;
  job_description?: string;
  employer_id?: string; // FK
};

/* ================= ADD JOB ================= */
export const addJob = async (payload: Omit<JobDB, "employer_id">) => {
  const employer = await getEmployerByUser();
  if (!employer) throw new Error("Employer not found");

  return supabase
    .from("jobs")
    .insert({
      ...payload,
      employer_id: employer.id, // ✅ ONLY employer.id
    })
    .select()
    .single();
};

/* ================= UPDATE JOB ================= */
export const updateJob = async (id: string, payload: JobDB) => {
  const employer = await getEmployerByUser();
  if (!employer) throw new Error("Employer not found");

  return supabase
    .from("jobs")
    .update({
      ...payload,
      employer_id: employer.id,
    })
    .eq("id", id)
    .select()
    .single();
};

/* ================= DELETE JOB ================= */
export const deleteJob = async (id: string) => {
  return supabase.from("jobs").delete().eq("id", id);
};

/* ================= GET MY JOBS ================= */
export const getMyJobs = async () => {
  const employer = await getEmployerByUser();
  if (!employer) return { data: [], error: null };

  return supabase
    .from("jobs")
    .select("*")
    .eq("employer_id", employer.id)
    .order("created_at", { ascending: false });
};
