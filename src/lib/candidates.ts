import { supabase } from "./supabaseClient";

export type CandidateInsert = {
  full_name: string | object | null;
  email?: string | null;
  user_id?: string | null;
  created_at?: string | null;
  [key: string]: any;
};

export async function createCandidate(candidate: CandidateInsert) {
  const { data, error } = await supabase
    .from("candidates")
    .insert([candidate])
    .select()
    .single();
  return { data, error };
}
