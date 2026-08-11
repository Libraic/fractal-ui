import { getProblems } from '../api/problem.api';
import { ProblemRow } from '../components/table/ProblemRow';
import { ProblemsTableHeader } from '../components/table/ProblemsTableHeader';
import type { GetProblemResponse } from '../types/problem.api.types';
import { fromGetProblemResponseToProblemRecord } from '../utils/problems.utils';
import type { ApiError, GetPaginatedData, Result } from '../../../shared/api/api.types';
import { Pagination } from '../../../shared/features/pagination/components/Pagination';
import { usePagination } from '../../../shared/features/pagination/hooks/usePagination';
import {
  DEFAULT_PROBLEM_SORTING_CRITERIA,
  ITEMS_PER_PAGE,
} from '../../../shared/constants/constants';
import { useParams } from 'react-router-dom';

export function ProblemsPage() {
  const { topicId } = useParams();
  async function fetchData(): Promise<Result<GetPaginatedData<GetProblemResponse>, ApiError>> {
    return getProblems({
      page: currentPage - 1,
      size: ITEMS_PER_PAGE,
      sort: DEFAULT_PROBLEM_SORTING_CRITERIA,
      filters: [
        {
          field: 'topic.uuid',
          operation: 'equals',
          value: topicId!,
        },
      ],
    });
  }

  const { data, currentPage, totalItems, totalPages, error, isLoading, setCurrentPage } =
    usePagination(fetchData, fromGetProblemResponseToProblemRecord);

  return (
    <main className="flex min-h-screen w-full flex-col items-center px-6 py-10">
      <section className="flex w-full max-w-6xl flex-col items-center gap-y-16">
        <p className="border-b border-(--color-border) p-3 text-xl font-semibold">Exerciții</p>

        <div className="flex w-full flex-col gap-5">
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <input
              type="search"
              aria-label="Search problems"
              placeholder="Search by title"
              className="h-11 w-80 rounded-md border border-(--color-border) bg-(--color-surface) px-4 text-sm text-(--color-text) outline-none transition focus:ring-2 focus:ring-(--color-accent-soft) sm:max-w-md"
            />
          </div>

          {error ? (
            <p
              role="alert"
              className="rounded-md border border-red-400/35 bg-red-500/15 px-4 py-3 text-sm text-red-300"
            >
              {error.message}
            </p>
          ) : null}

          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-225 border-separate border-spacing-y-2 text-left">
              <ProblemsTableHeader />
              <tbody>
                {data.map((problem) => (
                  <ProblemRow key={problem.id} problem={problem} />
                ))}
              </tbody>
            </table>
            {isLoading ? (
              <p className="py-8 text-center text-sm text-(--color-text-subtle)">
                Loading problems...
              </p>
            ) : null}
            {!isLoading && !error && data.length === 0 ? (
              <p className="py-8 text-center text-sm text-(--color-text-subtle)">
                No problems found.
              </p>
            ) : null}
          </div>

          <Pagination
            totalItems={totalItems}
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </section>
    </main>
  );
}
