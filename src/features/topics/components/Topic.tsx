import ProgressBar from './ProgressBar.tsx';

type LearningCardProps = {
  title: string;
  description: string;
  completedExerciseCount: number;
  exerciseCount: number;
  labels: string[];
  icon: string;
};

export default function Topic({
  title,
  description,
  completedExerciseCount,
  exerciseCount,
  labels,
  icon,
}: LearningCardProps) {
  return (
    <article
      className="
          w-full max-w-90 group rounded-[18px]
          border border-(--color-border) bg-(--color-surface)
          p-6 shadow-(--shadow-raised)
          transition-all duration-200 ease-out
          hover:-translate-y-0.5 hover:border-(--color-border-strong) hover:bg-(--color-surface-raised) hover:shadow-(--shadow-raised-strong) hover:cursor-pointer
      "
    >
      <div
        className="
          mb-5 h-1 w-14 rounded-full bg-linear-to-r
          from-(--color-border) to-(--color-surface-hover) group-hover:from-(--color-accent-strong) group-hover:to-(--color-accent)
          transition-all duration-300 ease-out
        "
      />
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-(--color-accent-soft) text-(--color-accent) shadow-(--shadow-raised)">
            <span className="material-symbols-outlined text-xl">{icon}</span>
          </div>
          <h2 className="text-xl font-bold text-(--color-text)">{title}</h2>
        </div>
        <button
          type="button"
          aria-label={`More options for ${title}`}
          className="
              rounded-lg px-2 py-1 text-xl text-(--color-text-subtle) shadow-(--shadow-raised)
              leading-none transition-colors
              hover:bg-(--color-surface-hover) hover:text-(--color-text)
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface)
          "
        >
          ⋮
        </button>
      </div>
      <p className="mt-4 min-h-20 font-light leading-6 text-(--color-text-muted)">{description}</p>
      <div className="mt-5">
        <ProgressBar completed={completedExerciseCount} total={exerciseCount} />
      </div>
      <div className="mt-6 flex items-center justify-between gap-4 text-sm text-(--color-text-subtle)">
        <span>
          {exerciseCount} {exerciseCount === 1 ? 'exercițiu' : 'exerciții'}
        </span>
        <div className="flex flex-row gap-x-2">
          {labels.map((label) => (
            <span className="rounded-full border border-(--color-border) bg-(--color-sidebar-background) px-3 py-1 text-(--color-text-muted) shadow-(--shadow-raised) text-[0.75rem]">
              {label}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
