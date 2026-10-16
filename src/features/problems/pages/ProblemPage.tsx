import { Problem } from '../components/definition/Problem.tsx';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { ProblemDefinition } from '../types/Problems.types.ts';
import { getProblemById } from '../api/problem.api.ts';
import { Breadcrumbs } from '../../../shared/ui/Breadcrumbs/Breadcrumbs';
import { COURSES, getTopicProblemsPath, PROBLEMS } from '../../../app/routes';

export function ProblemPage() {
  const { problemId, topicId } = useParams();
  const location = useLocation();
  const navigationState = location.state as { topicTitle?: string } | null;
  const topicTitle = navigationState?.topicTitle;
  const [problem, setProblem] = useState<ProblemDefinition>({});

  useEffect(() => {
    let cancelled = false;
    setProblem({});
    const problemFetcher = async () => {
      if (problemId) {
        const response = await getProblemById(problemId);
        if (response.ok && !cancelled) {
          const data = response.data;
          setProblem({ title: data.title, paragraphs: data.paragraphs });
        }
      }
    };

    void problemFetcher();
    return () => {
      cancelled = true;
    };
  }, [problemId]);

  return (
    <section className="flex min-h-screen w-full items-start justify-center bg-(--color-background) px-4 py-6 text-(--color-text) sm:p-8">
      <div className="flex w-full max-w-xl flex-col gap-4">
        <Breadcrumbs
          items={[
            ...(topicId ? [{ label: 'Cursuri', to: COURSES }] : []),
            {
              label: topicTitle ?? 'Exerciții',
              to: topicId ? getTopicProblemsPath(topicId) : PROBLEMS,
              state: { topicTitle },
            },
            { label: problem.title ?? 'Exercițiu' },
          ]}
        />
        <Problem problem={problem} />
      </div>
    </section>
  );
}
