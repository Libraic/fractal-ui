import { NavigationItems } from './NavigationItems';
import { Header } from './Header';

type SidebarProps = {
  isCollapsed: boolean;
  onToggle: () => void;
};

export function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  return (
    <aside
      className={`
        sticky top-0 h-screen shrink-0 overflow-hidden bg-[#1e1a29]
        transition-[width] duration-300 ease-in-out
        border-r border-r-[#3b3550]
        z-50
        ${isCollapsed ? 'w-20' : 'w-64'}
      `}
      aria-label="Primary navigation"
    >
      <div className="flex h-full flex-col">
        <Header onToggle={onToggle} isCollapsed={isCollapsed} />
        <NavigationItems isCollapsed={isCollapsed} />
      </div>
    </aside>
  );
}
