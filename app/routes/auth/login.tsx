import { json, redirect } from "@remix-run/node"; // Remix utility funkce pro HTTP odpovědi
import { supabase } from "~/lib/supabase"; // Náš Supabase klient

export const action = async ({ request }) => {
  // Získání dat z formuláře
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  // Pokus o přihlášení pomocí Supabase
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  // Pokud nastala chyba, vrátíme ji
  if (error) {
    return json({ error: error.message });
  }

  // Pokud vše proběhlo úspěšně, přesměrujeme na dashboard
  return redirect("/dashboard");
};
