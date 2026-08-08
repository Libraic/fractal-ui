import ProgressBar from './ProgressBar.tsx';

type LearningCardProps = {
  title: string;
  description: string;
  completedExerciseCount: number;
  exerciseCount: number;
  difficulty: string;
  icon: string;
};

export default function Subject({
  title,
  description,
  completedExerciseCount,
  exerciseCount,
  difficulty,
  icon,
}: LearningCardProps) {
  return (
    <article
      className="
          w-full max-w-90 group rounded-[18px]
          border border-[var(--color-border)] bg-[var(--color-surface)]
          p-6 shadow-[var(--shadow-raised)]
          transition-all duration-200 ease-out
          hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-raised)] hover:shadow-[var(--shadow-raised-strong)] hover:cursor-pointer
      "
    >
      <div
        className="
          mb-5 h-1 w-14 rounded-full bg-linear-to-r
          from-[var(--color-border)] to-[var(--color-surface-hover)] group-hover:from-[var(--color-accent-strong)] group-hover:to-[var(--color-accent)]
          transition-all duration-300 ease-out
        "
      />
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent-soft)] text-[var(--color-accent)] shadow-[var(--shadow-raised)]">
            <span className="material-symbols-outlined text-xl">{icon}</span>
          </div>
          <h2 className="text-xl font-bold text-[var(--color-text)]">{title}</h2>
        </div>
        <button
          type="button"
          aria-label={`More options for ${title}`}
          className="
              rounded-lg px-2 py-1 text-xl text-[var(--color-text-subtle)] shadow-[var(--shadow-raised)]
              leading-none transition-colors
              hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text)]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]
          "
        >
          ⋮
        </button>
      </div>
      <p className="mt-4 min-h-20 font-light leading-6 text-[var(--color-text-muted)]">
        {description}
      </p>
      <div className="mt-5">
        <ProgressBar completed={completedExerciseCount} total={exerciseCount} />
      </div>
      <div className="mt-6 flex items-center justify-between gap-4 text-sm text-[var(--color-text-subtle)]">
        <span>
          {exerciseCount} {exerciseCount === 1 ? 'exercițiu' : 'exerciții'}
        </span>
        <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-sidebar-background)] px-3 py-1 text-[var(--color-text-muted)] shadow-[var(--shadow-raised)]">
          {difficulty}
        </span>
      </div>
    </article>
  );
}
