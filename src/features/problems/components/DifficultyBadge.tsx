import type { ProblemDifficulty } from '../types/problem.api.types';

const difficultyStyles = {
  Simplu: 'border-emerald-400/35 bg-emerald-500/15 text-emerald-300',
  Mediu: 'border-amber-400/35 bg-amber-500/15 text-amber-300',
  Dificil: 'border-red-400/35 bg-red-500/15 text-red-300',
};

export function DifficultyBadge({ difficulty }: { difficulty: ProblemDifficulty }) {
  return (
    <span
      className={`inline-flex h-7 min-w-20 items-center justify-center rounded-md border px-3 text-xs font-semibold ${difficultyStyles[difficulty]}`}
    >
      {difficulty}
    </span>
  );
}
