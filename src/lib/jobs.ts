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
  employer_id?: string;
};

// Add new job
export const addJob = async (payload: Omit<JobDB, "employer_id">) => {
  const employer = await getEmployerByUser();
  if (!employer) throw new Error("Employer not found");

  const jobPayload: JobDB = {
    ...payload,
    employer_id: employer.id, // FK automatically
  };

  return supabase.from("jobs").insert([jobPayload]).select().single();
};

// Update a job
export const updateJob = async (id: string, payload: JobDB) => {
  const employer = await getEmployerByUser();
  if (!employer) throw new Error("Employer not found");

  const jobPayload: JobDB = {
    ...payload,
    employer_id: employer.id, // FK stays correct
  };

  return supabase
    .from("jobs")
    .update(jobPayload)
    .eq("id", id)
    .select()
    .single();
};

// Delete a job
export const deleteJob = async (id: string) => {
  return supabase.from("jobs").delete().eq("id", id);
};

// Get jobs for logged-in user's employer
export const getMyJobs = async () => {
  const employer = await getEmployerByUser();
  if (!employer) return { data: [], error: null };

  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .eq("employer_id", employer.id)
    .order("created_at", { ascending: false });

  return { data, error };
};
