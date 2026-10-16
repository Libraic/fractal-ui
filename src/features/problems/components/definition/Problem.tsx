import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ProblemStatement } from './ProblemStatement.tsx';
import type { ProblemDefinition } from '../../types/Problems.types.ts';

type ProblemProps = {
  problem: ProblemDefinition;
};

export function Problem({ problem }: ProblemProps) {
  return (
    <div
      className="
      w-full max-w-xl
      rounded-lg border border-(--color-border)
      bg-(--color-surface)
      p-5
    "
    >
      {problem.title && (
        <h2 className="m-0 pb-5 text-md leading-5 [&_.katex]:text-[1em]">
          <InlineMath math={String.raw`\textsf{\textbf{${problem.title}}}`} />
        </h2>
      )}
      <ProblemStatement paragraphs={problem.paragraphs} />
    </div>
  );
}
