import { BookOpen, ListChecks } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { COURSES, PROBLEMS } from '../../../app/routes';

const navigationItems = [
  { label: 'Cursuri', icon: BookOpen, path: COURSES },
  { label: 'Exerciții', icon: ListChecks, path: PROBLEMS },
];

type ElementProps = {
  isCollapsed: boolean;
};

export function NavigationItems({ isCollapsed }: ElementProps) {
  return (
    <nav className="flex flex-1 flex-col gap-1 px-3 py-4">
      {navigationItems.map(({ label, icon: Icon, path }) => (
        <NavLink
          key={label}
          to={path}
          className={({ isActive }) =>
            `flex h-11 items-center rounded-md px-3 text-sm font-medium transition
              ${isCollapsed ? 'justify-center' : 'gap-3'}
              ${isActive ? 'bg-(--color-accent-soft) text-(--color-text)' : 'text-(--color-text-muted) hover:bg-(--color-surface-hover) hover:text-(--color-text)'}`
          }
          title={isCollapsed ? label : undefined}
        >
          <Icon className="size-5 shrink-0" aria-hidden="true" />
          <span
            className={`
            min-w-0 whitespace-nowrap transition-[opacity,transform] duration-200
            ${isCollapsed ? 'w-0 translate-x-2 opacity-0' : 'opacity-100'}
            `}
          >
            {label}
          </span>
        </NavLink>
      ))}
    </nav>
  );
}
