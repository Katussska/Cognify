import { ReactNode } from 'react';

import ChatSection from '@/components/ChatSection.tsx';
import { AppSidebar } from '@/components/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <SidebarTrigger className="absolute" />
        {children}
        {/*<UserCorner />*/}
        <ChatSection />
      </main>
    </SidebarProvider>
  );
}
