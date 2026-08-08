import { BookOpen } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { COURSES } from '../../../app/routes';

const navigationItems = [{ label: 'Cursuri', icon: BookOpen, path: COURSES }];

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
              ${isActive ? 'bg-[#8b5cf6]/15 text-[#f4f2ff]' : 'text-[#b7b2cc] hover:bg-[#3b3550] hover:text-[#f4f2ff]'}`
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
