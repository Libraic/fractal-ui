import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';

type HeaderProps = {
  onToggle: () => void;
  isCollapsed: boolean;
};

export function Header({ onToggle, isCollapsed }: HeaderProps) {
  const ToggleIcon = isCollapsed ? PanelLeftOpen : PanelLeftClose;

  return (
    <div
      className={`
        flex h-16 items-center border-b border-[var(--color-border)] 
        ${isCollapsed ? 'justify-center pl-1' : 'justify-between pr-2 pl-5'}
      `}
    >
      <span
        className={`
          whitespace-nowrap text-lg font-bold text-[var(--color-text)] transition-[opacity,transform,width] duration-200 tracking-[2px]
          ${isCollapsed ? 'pointer-events-none w-0 -translate-x-2 opacity-0' : 'opacity-100'}
        `}
      >
        FRACTAL
      </span>
      <button
        type="button"
        className="
          grid size-11 shrink-0 place-items-center rounded-md
          text-[var(--color-text-muted)] transition
          hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text)] hover:cursor-pointer
          focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-sidebar-background)]
        "
        onClick={onToggle}
        aria-label={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
        aria-expanded={!isCollapsed}
      >
        <ToggleIcon className="size-5" aria-hidden="true" />
      </button>
    </div>
  );
}
