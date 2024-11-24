import { Layout } from '@/components/layout.tsx';

import ProtectedRoute from './components/protected-route';
import { ThemeProvider } from './components/theme-provider';
import { AuthProvider } from './lib/authContext';
import Login from './routes/login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Layout children={undefined} />
      </ProtectedRoute>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  );
}
