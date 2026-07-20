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
                border border-[#3B3550] bg-[#262236]
                p-6 shadow-[0_6px_18px_rgba(0,0,0,0.22)]
                transition-all duration-200 ease-out
                hover:-translate-y-0.5 hover:border-[#8B5CF6] hover:bg-[#302B42] hover:shadow-[0_14px_32px_rgba(0,0,0,0.35)]
                hover:cursor-pointer
            "
    >
      <div
        className="
                mb-5 h-1 w-14 rounded-full
                bg-linear-to-r
                from-[#4E4861] to-[#272233]
                transition-all duration-300 ease-out
                group-hover:from-[#8B5CF6]
                group-hover:to-[#C084FC]
              "
      />
      <header className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#8B5CF6]/15 text-[#C084FC]">
            <span className="material-symbols-outlined text-xl">{icon}</span>
          </div>
          <h2 className="text-xl font-bold text-[#F4F2FF]">{title}</h2>
        </div>
        <button
          type="button"
          aria-label={`More options for ${title}`}
          className="
                        rounded-lg px-2 py-1 text-xl text-[#8F89A5]
                        leading-none transition-colors
                        hover:bg-[#3B3550] hover:text-[#F4F2FF]
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#262236]
                    "
        >
          ⋮
        </button>
      </header>
      <p className="mt-4 min-h-20 font-light leading-6 text-[#B7B2CC]">
        {description}
      </p>
      <div className="mt-5">
        <ProgressBar completed={completedExerciseCount} total={exerciseCount} />
      </div>
      <div className="mt-6 flex items-center justify-between gap-4 text-sm text-[#8F89A5]">
        <span>
          {exerciseCount} {exerciseCount === 1 ? 'exercițiu' : 'exerciții'}
        </span>
        <span className="rounded-full border border-[#3B3550] bg-[#1E1A29] px-3 py-1 text-[#B7B2CC]">
          {difficulty}
        </span>
      </div>
    </article>
  );
}
