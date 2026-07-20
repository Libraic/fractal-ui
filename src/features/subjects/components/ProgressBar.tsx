type ProgressBarProps = {
  completed: number;
  total: number;
};

export default function ProgressBar({ completed, total }: ProgressBarProps) {
  const boundedTotal = Math.max(total, 0);
  const boundedCompleted = Math.min(Math.max(completed, 0), boundedTotal);
  const progressPercentage =
    boundedTotal > 0 ? Math.round((boundedCompleted / boundedTotal) * 100) : 0;

  return (
    <div
      aria-label={`${boundedCompleted} of ${boundedTotal} exercises completed`}
      aria-valuemax={boundedTotal}
      aria-valuemin={0}
      aria-valuenow={boundedCompleted}
      className="relative h-9 overflow-hidden rounded-md border border-[#3b3550] bg-[#1e1a29]"
      role="progressbar"
    >
      <div
        className="h-full rounded-md bg-linear-to-r from-[#7c3aed] via-[#8B5cf6] to-[#c084fc] transition-[width] duration-300 ease-out"
        style={{ width: `${progressPercentage}%` }}
      />
      <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-[#f4f2ff]">
        {boundedCompleted}/{boundedTotal}
      </span>
    </div>
  );
}
