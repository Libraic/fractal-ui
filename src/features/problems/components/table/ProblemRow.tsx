import type { ProblemRecord } from '../../types/Problems.types';
import { useLocation, useNavigate } from 'react-router-dom';

type ProblemRowProps = { problem: ProblemRecord };

const difficultyStyles = {
  Simplu: 'border-emerald-400/35 bg-emerald-500/15 text-emerald-300',
  Mediu: 'border-amber-400/35 bg-amber-500/15 text-amber-300',
  Dificil: 'border-red-400/35 bg-red-500/15 text-red-300',
};

export function ProblemRow({ problem }: ProblemRowProps) {
  const currentLocation = useLocation();
  const problemPagePath = `${currentLocation.pathname}/${encodeURIComponent(problem.id)}`;
  const navigate = useNavigate();
  return (
    <tr
      className="
        bg-(--color-surface-raised) hover:bg-(--color-surface-hover)
        text-sm text-(--color-text-muted)
        shadow-(--shadow-lower) transition
        hover:cursor-pointer
      "
      onClick={() => navigate(problemPagePath)}
    >
      <td className="rounded-l-md px-6 py-3.5">
        <input
          type="checkbox"
          aria-label={`Select ${problem.title}`}
          className="size-4 rounded border-(--color-border) bg-(--color-background) accent-(--color-accent)"
        />
      </td>
      <td className="px-6 py-3.5 text-(--color-text-subtle)">{problem.id.split('-')[0]}</td>
      <td className="px-6 py-3.5 font-medium text-(--color-text)">{problem.title}</td>
      <td className="px-6 py-3.5">
        <span
          className={`inline-flex h-7 min-w-20 items-center justify-center rounded-md border px-3 text-xs font-semibold ${difficultyStyles[problem.difficulty]}`}
        >
          {problem.difficulty}
        </span>
      </td>
      <td className="max-w-80 px-6 py-3.5 text-(--color-text-muted)">
        {problem.prerequisites.length > 0 ? problem.prerequisites.join(', ') : '—'}
      </td>
      <td className="rounded-r-md px-6 py-3.5 text-(--color-text-subtle)">{problem.createdAt}</td>
    </tr>
  );
}
