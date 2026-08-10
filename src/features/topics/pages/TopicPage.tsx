import Topic from '../components/Topic.tsx';
import type { ApiError, GetPaginatedData, Result } from '../../../shared/api/api.types.ts';
import {
  DEFAULT_PROBLEM_SORTING_CRITERIA,
  ITEMS_PER_PAGE,
} from '../../../shared/constants/constants.ts';
import { usePagination } from '../../../shared/features/pagination/hooks/usePagination.ts';
import type { GetTopicResponse } from '../types/topic.api.types.ts';
import { getTopics } from '../api/topic.api.ts';
import { fromGetTopicResponseToTopic } from '../utils/topics.utils.ts';

export function TopicPage() {
  async function fetchData(): Promise<Result<GetPaginatedData<GetTopicResponse>, ApiError>> {
    return getTopics({
      page: currentPage - 1,
      size: ITEMS_PER_PAGE,
      sort: DEFAULT_PROBLEM_SORTING_CRITERIA,
    });
  }

  const { data, currentPage } = usePagination(fetchData, fromGetTopicResponseToTopic);

  return (
    <section className="flex min-h-screen w-full flex-wrap items-center justify-center gap-10 bg-(--color-background) p-8 text-(--color-text)">
      {data.map((item) => (
        <Topic
          key={item.id}
          title={item.title}
          description={item.description}
          completedExerciseCount={item.numberOfSolvedProblems}
          exerciseCount={item.numberOfProblems}
          labels={item.labels}
          icon={item.icon}
        />
      ))}
    </section>
  );
}
