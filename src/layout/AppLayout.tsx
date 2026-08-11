import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../shared/ui/Sidebar/Sidebar';

export function AppLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-(--color-background) text-(--color-text)">
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onToggle={() => setIsSidebarCollapsed((value) => !value)}
      />

      <main className="min-w-0 flex-1 transition-[padding] duration-300 ease-in-out">
        <Outlet />
      </main>
    </div>
  );
}
