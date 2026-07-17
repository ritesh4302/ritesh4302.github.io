interface StarRatingProps {
  rating: number;
  className?: string;
  size?: number;
}

/** Row of 5 stars, filled proportionally to `rating` (0–5). Decorative — pair with visible text. */
export default function StarRating({ rating, className = "", size = 20 }: StarRatingProps) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`} aria-hidden="true">
      {[1, 2, 3, 4, 5].map((i) => {
        const fill = Math.max(0, Math.min(1, rating - (i - 1)));
        return (
          <svg key={i} width={size} height={size} viewBox="0 0 24 24" className="shrink-0">
            <defs>
              <linearGradient id={`star-${i}-${size}`} x1="0" x2="1" y1="0" y2="0">
                <stop offset={`${fill * 100}%`} stopColor="var(--color-accent-400)" />
                <stop offset={`${fill * 100}%`} stopColor="#d8dee4" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#star-${i}-${size})`}
              d="M12 2l2.9 6.26 6.85.7-5.13 4.61 1.44 6.73L12 16.9 5.94 20.3l1.44-6.73L2.25 8.96l6.85-.7L12 2z"
            />
          </svg>
        );
      })}
    </span>
  );
}
