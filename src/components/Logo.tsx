type LogoProps = {
  className?: string
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 72 72"
      width="48"
      height="48"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="36" cy="36" r="36" fill="var(--brand)" />
      <text
        x="36"
        y="30"
        textAnchor="middle"
        fill="#fff"
        fontFamily="var(--font-display), sans-serif"
        fontSize="14"
        fontWeight="700"
        letterSpacing="0.04em"
      >
        снова
      </text>
      <line x1="20" y1="36" x2="52" y2="36" stroke="#fff" strokeWidth="1.5" />
      <text
        x="36"
        y="52"
        textAnchor="middle"
        fill="#fff"
        fontFamily="var(--font-display), sans-serif"
        fontSize="14"
        fontWeight="700"
        letterSpacing="0.04em"
      >
        новое
      </text>
    </svg>
  )
}
