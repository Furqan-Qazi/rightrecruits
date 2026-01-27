import { supabase } from "./supabaseClient";

export type Employer = {
  id?: string;
  user_id?: string; // ✅ FK → auth.users.id
  company_name: string;
  industry?: string | null;
  company_size?: string | null;
  website?: string | null;
  description?: string | null;
};

/* GET EMPLOYERS */
export const getCandidateEmployer = async () => {
  const { data, error } = await supabase
    .from("employers")
    .select("*")
    .order("created_at", { ascending: false });
  return { data, error };
};

/* UPSERT / SAVE EMPLOYER */
export const saveEmployer = async (employers: Employer[]) => {
  // Ensure each row has id for upsert
  const { data: auth } = await supabase.auth.getUser();
  const user = auth.user;
  if (!user) throw new Error("Not logged in");

  const payload = employers.map((e) => ({
    id: e.id || undefined,
    user_id: user.id, // ✅ LOGIN USER ID
    company_name: e.company_name,
    industry: e.industry || null,
    company_size: e.company_size || null,
    website: e.website || null,
    description: e.description || null,
  }));

  const { data, error } = await supabase
    .from("employers")
    .upsert(payload, { onConflict: "id" }) // upsert by id
    .select();

  return { data, error };
};

/* DELETE SINGLE EMPLOYER */
export const deleteEmployer = async (id: string) => {
  const { error } = await supabase.from("employers").delete().eq("id", id);

  return { error };
};

/* ================= TYPES ================= */
export type EmployerDB = {
  id: string;
  company_name?: string;
  user_id: string; // supabase auth user id
  website?: string | null;
};

/* ================= GET EMPLOYER BY LOGGED-IN USER ================= */
// Get logged-in user's employer
export const getEmployerByUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  let { data: employerData } = await supabase
    .from("employers")
    .select("*")
    .eq("user_id", user.id)
    .single();

  if (!employerData) {
    const { data: newEmployer } = await supabase
      .from("employers")
      .insert([{ user_id: user.id, company_name: "Default Company" }])
      .select()
      .single();
    employerData = newEmployer;
  }

  return employerData;
};
