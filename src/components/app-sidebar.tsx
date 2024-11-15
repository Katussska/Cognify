import { useTranslation } from 'react-i18next';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
} from '@/components/ui/sidebar';
import { LogOut, Plus } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';


export function AppSidebar() {
  const { t } = useTranslation();

  return (
    <Sidebar>
      <SidebarHeader>
        <ModeToggle />
        <Plus />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{t('sidebar.chats')}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              // chats
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>{t('sidebar.groupChats')}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              // group chats
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <LogOut />
        {t('sidebar.logout')}
      </SidebarFooter>
    </Sidebar>
  );
}