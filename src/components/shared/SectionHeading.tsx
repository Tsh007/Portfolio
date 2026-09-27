type Props = {
  index: string;
  title: string;
  description?: string;
};

/**
 * `index` is a short section tag (e.g. "02"). It's justified here because
 * the scroll page genuinely is a sequence of sections — not decoration.
 */
export function SectionHeading({ index, title, description }: Props) {
  return (
    <div className="mb-10 flex items-start gap-4 sm:mb-14">
      <span className="mt-1 font-mono text-xs text-ink-faint">{index}</span>
      <div>
        <h2 className="text-2xl font-semibold text-ink sm:text-3xl">{title}</h2>
        {description && (
          <p className="mt-2 max-w-prose text-sm text-ink-muted sm:text-base">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
