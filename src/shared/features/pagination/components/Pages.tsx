import { Fragment } from 'react';

function getPaginationPages(currentPage: number, totalPages: number) {
  if (totalPages <= 6) return Array.from({ length: totalPages }, (_, index) => index + 1);
  if (currentPage < 3) return [1, 2, 3, totalPages];
  if (currentPage > totalPages - 3) return [1, totalPages - 2, totalPages - 1, totalPages];
  return [1, currentPage - 1, currentPage, currentPage + 1, totalPages];
}

type PagesProps = {
  currentPage: number;
  totalPages: number;
  goToPage: (page: number) => void;
};

export function Pages({ currentPage, totalPages, goToPage }: PagesProps) {
  const paginationPages = getPaginationPages(currentPage, totalPages);

  return (
    <Fragment>
      {paginationPages.map((page, index) => (
        <div key={page} className="flex items-center gap-1">
          {index > 0 && page - paginationPages[index - 1] > 1 ? (
            <span className="px-2 text-[var(--color-text-subtle)]">...</span>
          ) : null}
          <button
            type="button"
            aria-label={`Page ${page}`}
            aria-current={currentPage === page ? 'page' : undefined}
            onClick={() => goToPage(page)}
            className={`inline-flex size-7 items-center justify-center rounded-md text-sm font-medium transition ${
              currentPage === page
                ? 'bg-[var(--color-accent)] text-white'
                : 'text-[var(--color-text-muted)] hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text)]'
            }`}
          >
            {page}
          </button>
        </div>
      ))}
    </Fragment>
  );
}
