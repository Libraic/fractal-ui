import { ProblemDefinition } from '../components/definition/ProblemDefinition.tsx';

export function ProblemPage() {
  return (
    <section className="flex min-h-screen w-full flex-wrap items-center justify-center gap-10 bg-(--color-background) p-8 text-(--color-text)">
      <ProblemDefinition />
    </section>
  );
}
