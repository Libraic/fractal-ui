import type { LucideIcon } from 'lucide-react';

type PaginationArrowButtonProps = {
  icon: LucideIcon;
  label: string;
  disabled: boolean;
  onClick: () => void;
};

export function PaginationArrowButton({
  icon: Icon,
  label,
  disabled,
  onClick,
}: PaginationArrowButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="inline-flex size-7 items-center justify-center rounded-md text-[var(--color-text-muted)] transition hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text)] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent"
    >
      <Icon className="size-4" aria-hidden="true" />
    </button>
  );
}
