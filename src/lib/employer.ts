import { supabase } from "./supabaseClient";

export type Employer = {
  id?: string;
  user_id: string; // auth.users.id
  company_name: string;
  industry?: string | null;
  company_size?: string | null;
  website?: string | null;
  description?: string | null;
};

/* ================= GET EMPLOYER BY LOGGED-IN USER ================= */
export const getEmployerByUser = async () => {
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) return null;

  // pehle employer dhoondo
  const { data: employer, error } = await supabase
    .from("employers")
    .select("*")
    .eq("user_id", user.id)
    .single();

  if (employer) return employer;

  // agar employer exist nahi karta → auto create
  const { data: newEmployer, error: insertError } = await supabase
    .from("employers")
    .insert({
      user_id: user.id,
      company_name: "Default Company",
    })
    .select()
    .single();

  if (insertError) return null;

  return newEmployer;
};

/* ================= SAVE / UPDATE EMPLOYER ================= */
export const saveEmployer = async (payload: Omit<Employer, "user_id">) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { data: null, error: "Not logged in" };

  const employer = await getEmployerByUser();

  if (!employer) return { data: null, error: "Employer not found" };

  const { data, error } = await supabase
    .from("employers")
    .update({
      ...payload,
    })
    .eq("id", employer.id)
    .select()
    .single();

  return { data, error };
};
