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
        flex h-16 items-center border-b border-[#3b3550] 
        ${isCollapsed ? 'justify-center pl-1' : 'justify-between pr-2 pl-5'}
      `}
    >
      <span
        className={`
          whitespace-nowrap text-lg font-bold text-[#f4f2ff] transition-[opacity,transform,width] duration-200 tracking-[2px]
          ${isCollapsed ? 'pointer-events-none w-0 -translate-x-2 opacity-0' : 'opacity-100'}
        `}
      >
        FRACTAL
      </span>
      <button
        type="button"
        className="
          grid size-11 shrink-0 place-items-center rounded-md
          text-[#b7b2cc] transition
          hover:bg-[#3b3550] hover:text-[#f4f2ff] hover:cursor-pointer
          focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5cf6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e1a29]
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
