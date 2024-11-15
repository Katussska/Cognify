import { createContext } from 'react';

const AuthContext = createContext(null);

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
}
