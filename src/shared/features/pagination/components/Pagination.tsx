import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { ITEMS_PER_PAGE } from '../../../constants/constants';
import { Pages } from './Pages';
import { PaginationArrowButton } from './PaginationArrowButton';

type PaginationProps = {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

export function Pagination({
  totalItems,
  totalPages,
  currentPage,
  setCurrentPage,
}: PaginationProps) {
  const normalizedTotalPages = Math.max(1, totalPages);
  const pageStartIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageEndIndex = Math.min(pageStartIndex + ITEMS_PER_PAGE, totalItems);

  function goToPage(page: number) {
    setCurrentPage(Math.min(Math.max(page, 1), normalizedTotalPages));
  }

  return (
    <div className="flex w-full flex-col gap-3 rounded-md border border-(--color-border) bg-(--color-surface) px-6 py-3 text-sm text-(--color-text-muted) shadow-(--shadow-raised) sm:flex-row sm:items-center sm:justify-between">
      <p>
        Elementele {totalItems === 0 ? 0 : pageStartIndex + 1}-{pageEndIndex} din {totalItems}
      </p>
      <div className="flex items-center gap-1">
        <PaginationArrowButton
          icon={ChevronsLeft}
          label="First page"
          disabled={currentPage === 1}
          onClick={() => goToPage(1)}
        />
        <PaginationArrowButton
          icon={ChevronLeft}
          label="Previous page"
          disabled={currentPage === 1}
          onClick={() => goToPage(currentPage - 1)}
        />
        <Pages currentPage={currentPage} totalPages={normalizedTotalPages} goToPage={goToPage} />
        <PaginationArrowButton
          icon={ChevronRight}
          label="Next page"
          disabled={currentPage === normalizedTotalPages}
          onClick={() => goToPage(currentPage + 1)}
        />
        <PaginationArrowButton
          icon={ChevronsRight}
          label="Last page"
          disabled={currentPage === normalizedTotalPages}
          onClick={() => goToPage(normalizedTotalPages)}
        />
      </div>
    </div>
  );
}
