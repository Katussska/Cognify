import { ReactNode } from 'react';

import { AppSidebar } from '@/components/sidebar/app-sidebar.tsx';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <SidebarTrigger className="absolute" />
        {children}
      </main>
    </SidebarProvider>
  );
}
