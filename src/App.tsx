import ChatSection from '@/components/chat/ChatSection.tsx';
import { Layout } from '@/components/layout.tsx';
import UserBadge from '@/components/userBadge/UserBadge.tsx';
import Profile from '@/routes/profile.tsx';

import { ThemeProvider } from './components/userBadge/theme-provider.tsx';
import { AuthProvider } from './lib/authContext';
import Login from './routes/login';
import ProtectedRoute from './routes/protected-route.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Layout>
          <UserBadge />
          <ChatSection />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/profile',
    element: (
      <ProtectedRoute>
        <Layout>
          <Profile />
        </Layout>
      </ProtectedRoute>
    ),
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
