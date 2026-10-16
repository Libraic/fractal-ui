import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

type ProblemProps = {
  title?: string;
};

export function Problem({ title }: ProblemProps) {
  return (
    <div className="
      w-full max-w-xl
      rounded-lg border border-(--color-border)
      bg-(--color-surface)
      p-5
    ">
      {title && (
        <h2 className="m-0 text-md leading-5 [&_.katex]:text-[1em]">
          <InlineMath math={String.raw`\textsf{\textbf{${title}}}`} />
        </h2>
      )}
      <BlockMath math="x^2 - 5x + 6 = 0" />
    </div>
  );
}
