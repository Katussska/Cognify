import { ReactNode, useEffect, useState } from 'react';

import { supabase } from '@/supabase';

import { useNavigate } from 'react-router-dom';

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  //   const { session } = useAuthContext();
  const navigate = useNavigate();
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    // if (!session) {
    //   navigate('/login');
    // }
    setIsAuthed(false);
    supabase.auth.getSession().then(({ data, error }) => {
      if (error || !data.session) navigate('/login');
      else setIsAuthed(true);
    });
  }, [navigate]);

  return isAuthed ? children : null;
}
