import { Problem } from '../components/definition/Problem.tsx';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { ProblemDefinition } from '../types/Problems.types.ts';
import { getProblemById } from '../api/problem.api.ts';

export function ProblemPage() {
  const { problemId } = useParams();
  const [problem, setProblem] = useState<ProblemDefinition>({});

  useEffect(() => {
    const problemFetcher = async () => {
      if (problemId) {
        const response = await getProblemById(problemId);
        if (response.ok) {
          const data = response.data;
          setProblem({ title: data.title });
        }
      }
    };

    void problemFetcher();
  }, []);

  return (
    <section className="flex min-h-screen w-full items-start justify-center bg-(--color-background) px-4 py-6 text-(--color-text) sm:p-8">
      <Problem title={problem.title} />
    </section>
  );
}
