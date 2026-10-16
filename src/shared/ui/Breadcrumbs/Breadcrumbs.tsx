import { Fragment } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type BreadcrumbItem = {
  label: string;
  to?: string;
  state?: { topicTitle?: string };
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-(--color-text-muted)">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => (
          <Fragment key={item.to ?? 'current'}>
            {index > 0 && (
              <li aria-hidden="true">
                <ChevronRight className="size-3.5 text-(--color-text-subtle)" />
              </li>
            )}
            <li>
              {item.to ? (
                <Link
                  to={item.to}
                  state={item.state}
                  className="rounded-sm transition-colors hover:text-(--color-text) hover:underline focus-visible:outline-2 focus-visible:outline-(--color-accent)"
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className="font-medium text-(--color-text)">
                  {item.label}
                </span>
              )}
            </li>
          </Fragment>
        ))}
      </ol>
    </nav>
  );
}
