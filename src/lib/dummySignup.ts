import { supabase } from "@/src/lib/supabaseClient";

export async function createFirstAccount(): Promise<{
  error?: string;
  userId?: string;
}> {
  const { data, error } = await supabase.auth.signUp({
    email: "aj.aimaljan1@gmail.com",
    password: "abd1234",
    options: {
      data: { full_name: "Aimal Jan" },
      emailRedirectTo:
        typeof window !== "undefined"
          ? `${window.location.origin}/app/dashboard`
          : undefined,
    },
  });

  if (error) return { error: error.message }
  
  await supabase
  .from('candidates')
  .insert({
    user_id: data.user?.id,
    full_name: data.user?.user_metadata.full_name,
    email: data.user?.email,
  })
  return { userId: data.user?.id };
}

