export default function StrawberryIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        d="M22 18c2-6 8-10 10-10s8 4 10 10"
        fill="none"
        stroke="#5fb26a"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M32 22c12 0 20 9 20 20 0 12-10 20-20 20s-20-8-20-20c0-11 8-20 20-20z"
        fill="currentColor"
      />
      <g fill="#ffd9df">
        <circle cx="24" cy="32" r="1.6" />
        <circle cx="32" cy="28" r="1.6" />
        <circle cx="40" cy="32" r="1.6" />
        <circle cx="21" cy="42" r="1.6" />
        <circle cx="30" cy="40" r="1.6" />
        <circle cx="39" cy="42" r="1.6" />
        <circle cx="26" cy="50" r="1.6" />
        <circle cx="35" cy="50" r="1.6" />
        <circle cx="32" cy="58" r="1.6" />
      </g>
    </svg>
  );
}
