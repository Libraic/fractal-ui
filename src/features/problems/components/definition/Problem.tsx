import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

type ProblemProps = {
  title?: string;
};

export function Problem({ title }: ProblemProps) {
  return (
    <div
      className="
      w-full max-w-xl
      rounded-lg border border-(--color-border)
      bg-(--color-surface)
      p-5
    "
    >
      {title && (
        <h2 className="m-0 pb-5 text-md leading-5 [&_.katex]:text-[1em]">
          <InlineMath math={String.raw`\textsf{\textbf{${title}}}`} />
        </h2>
      )}
      <p className="font-light">
        Fie <InlineMath math={String.raw`\textit{a}`} /> un număr real, astfel încât ecuația{' '}
        <BlockMath math="x^4 +ax^3 + 54x^2 -108x + 81 = 0" /> are 4 soluții reale distincte{' '}
        <InlineMath math="r_{1}" />, <InlineMath math="r_{2}" />, <InlineMath math="r_{3}" />,{' '}
        <InlineMath math="r_{4}" />. Ținând cont că{' '}
        <BlockMath
          math={String.raw`r_{1}r_{2}r_{3}r_{4} = \left(\frac{r_{1} + r_{2} + r_{3} + r_{4}}{4}\right)^{4}.`}
        />
        Determinați valoarea parametrului <InlineMath math="a" />.
      </p>
    </div>
  );
}
