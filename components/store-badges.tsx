type Variant = "dark" | "light"

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.365 1.43c0 1.14-.42 2.2-1.26 3.02-.99.98-2.2 1.55-3.3 1.46-.13-1.13.44-2.3 1.22-3.05.86-.83 2.3-1.44 3.34-1.43zM20.5 17.02c-.55 1.27-.82 1.84-1.53 2.97-.99 1.58-2.39 3.55-4.12 3.56-1.54.02-1.94-1.01-4.03-1-2.09.01-2.53 1.02-4.07 1-1.73-.02-3.05-1.79-4.05-3.37C-.3 17.1-.6 12.2 1.13 9.6c1.02-1.53 2.63-2.5 4.16-2.5 1.55 0 2.53 1.02 3.82 1.02 1.25 0 2.01-1.02 3.81-1.02 1.36 0 2.8.74 3.82 2.02-3.36 1.84-2.81 6.64.26 7.9z" />
    </svg>
  )
}

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#EA4335" d="M3.6 2.2c-.26.28-.4.7-.4 1.25v17.1c0 .55.14.97.4 1.25l.06.05L13 12.58v-.16L3.66 2.15z" />
      <path fill="#FBBC04" d="M16.5 15.9l-3.5-3.32v-.16L16.5 9.1l.08.05 4.15 2.36c1.18.67 1.18 1.77 0 2.44l-4.15 2.36z" />
      <path fill="#4285F4" d="M16.58 15.85L13 12.5 3.6 21.8c.39.41 1.03.46 1.76.05l11.22-6z" />
      <path fill="#34A853" d="M16.58 9.15L5.36 3.2c-.73-.42-1.37-.36-1.76.05L13 12.5z" />
    </svg>
  )
}

export function StoreBadges({ variant = "dark" }: { variant?: Variant }) {
  const base =
    "group inline-flex items-center gap-3 rounded-xl px-5 py-3 shadow-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
  const dark = "bg-wave-700 text-white hover:bg-wave-600 focus-visible:ring-wave-500"
  const light = "bg-white text-wave-700 hover:bg-cream focus-visible:ring-wave-500"
  const cls = `${base} ${variant === "dark" ? dark : light}`

  return (
    <>
      <a href="#" aria-label="Download on the App Store" className={cls}>
        <AppleIcon className="h-7 w-7 flex-shrink-0" />
        <span className="text-left leading-none">
          <span className="block text-[10px] font-medium uppercase tracking-wide opacity-80">Download on the</span>
          <span className="block text-lg font-semibold">App Store</span>
        </span>
      </a>

      <a href="#" aria-label="Get it on Google Play" className={cls}>
        <GooglePlayIcon className="h-7 w-7 flex-shrink-0" />
        <span className="text-left leading-none">
          <span className="block text-[10px] font-medium uppercase tracking-wide opacity-80">Get it on</span>
          <span className="block text-lg font-semibold">Google Play</span>
        </span>
      </a>
    </>
  )
}
