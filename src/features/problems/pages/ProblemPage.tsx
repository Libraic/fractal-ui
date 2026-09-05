import { useParams } from 'react-router-dom';

export function ProblemPage() {
  const { problemId } = useParams<{ problemId: string }>();
  return (
    <section className="flex min-h-screen w-full flex-wrap items-center justify-center gap-10 bg-(--color-background) p-8 text-(--color-text)">
      <div>{problemId}</div>
    </section>
  );
}
