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
          border border-[#3b3550] bg-[#262236]
          p-6 shadow-[0_6px_18px_rgba(0,0,0,0.22)]
          transition-all duration-200 ease-out
          hover:-translate-y-0.5 hover:border-[#8b5cf6] hover:bg-[#302b42] hover:shadow-[0_14px_32px_rgba(0,0,0,0.35)] hover:cursor-pointer
      "
    >
      <div
        className="
          mb-5 h-1 w-14 rounded-full bg-linear-to-r
          from-[#4e4861] to-[#272233] group-hover:from-[#8b5cf6] group-hover:to-[#c084fc]
          transition-all duration-300 ease-out
        "
      />
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#8b5cf6]/15 text-[#c084fc]">
            <span className="material-symbols-outlined text-xl">{icon}</span>
          </div>
          <h2 className="text-xl font-bold text-[#f4f2ff]">{title}</h2>
        </div>
        <button
          type="button"
          aria-label={`More options for ${title}`}
          className="
              rounded-lg px-2 py-1 text-xl text-[#8f89a5]
              leading-none transition-colors
              hover:bg-[#3b3550] hover:text-[#f4f2ff]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5cf6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#262236]
          "
        >
          ⋮
        </button>
      </div>
      <p className="mt-4 min-h-20 font-light leading-6 text-[#b7b2cc]">
        {description}
      </p>
      <div className="mt-5">
        <ProgressBar completed={completedExerciseCount} total={exerciseCount} />
      </div>
      <div className="mt-6 flex items-center justify-between gap-4 text-sm text-[#8f89a5]">
        <span>
          {exerciseCount} {exerciseCount === 1 ? 'exercițiu' : 'exerciții'}
        </span>
        <span className="rounded-full border border-[#3b3550] bg-[#1e1a29] px-3 py-1 text-[#b7b2cc]">
          {difficulty}
        </span>
      </div>
    </article>
  );
}
