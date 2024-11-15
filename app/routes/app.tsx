import { Outlet } from '@remix-run/react';
import { Layout } from '@/layout';
import { LoaderFunctionArgs, redirect } from '@remix-run/node';
import { createSupabaseServerClient } from '@/lib/supabase.server';

export async function loader({ request }: LoaderFunctionArgs) {
  const { supabase } = createSupabaseServerClient(request);

  const userResponse = await supabase.client.auth.getUser();

  if (!userResponse.data.user)
    return redirect('/login');

  return {
    user: userResponse?.data?.user,
    env: {
      SUPABASE_URL: process.env.SUPABASE_URL!,
      SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY!,
    },
  };
}

export default function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};