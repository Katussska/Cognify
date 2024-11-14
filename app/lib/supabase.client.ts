import { createClient } from '@supabase/supabase-js';

if (!process.env.SUPABASE_URL) throw new Error('Missing SUPABASE_URL');
if (!process.env.SUPABASE_ANON_KEY)
  throw new Error('Missing SUPABASE_ANON_KEY');

// todo: idk if this is correct
export const supabaseClient = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY,
);
