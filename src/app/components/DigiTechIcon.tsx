interface DigiTechIconProps {
  size?: number;
  className?: string;
}

export function DigiTechIcon({ size = 64, className = '' }: DigiTechIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M50 6H14C9.58172 6 6 9.58172 6 14V50C6 54.4183 9.58172 58 14 58H50C54.4183 58 58 54.4183 58 50V14C58 9.58172 54.4183 6 50 6Z"
        stroke="#2563EB"
        strokeWidth="2"
      />
      <path
        d="M26 32H17M17 32L22 24M17 32L22 40"
        stroke="#3B82F6"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38 32H47M47 32L42 24M47 32L42 40"
        stroke="#3B82F6"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35 22L29 42"
        stroke="#0EA5E9"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M51.5 48H48.5C48.2239 48 48 48.2239 48 48.5V51.5C48 51.7761 48.2239 52 48.5 52H51.5C51.7761 52 52 51.7761 52 51.5V48.5C52 48.2239 51.7761 48 51.5 48Z"
        fill="#0EA5E9"
      />
    </svg>
  );
}
