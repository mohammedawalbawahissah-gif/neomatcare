/**
 * src/components/ui/Logo.jsx
 *
 * NeoMatCare's mark: a heart (maternal care) cradling a small ringed
 * circle at its point (the newborn), crossed by a short vitals/pulse
 * line (the app's danger-red, used everywhere for alerts and urgency)
 * through its upper lobes. Replaces the plain lucide `Heart` icon that
 * previously stood in for a logo across the sidebar, auth pages, and AI
 * widget.
 *
 * `LogoMark` draws just the glyph (heart white, pulse + baby ring in
 * danger red) for dropping into a chip the caller already colors —
 * drop-in replacement for `<Heart ... fill="white" />`.
 *
 * `LogoTile` draws the full square mark with its own rounded, colored
 * background — for standalone placements (favicon-style use inside the
 * app, if ever needed) that don't already have a chip.
 */

const HEART_PATH =
  'M50,32 C50,17 31,8 18,21 C4,35 13,56 50,84 C87,56 96,35 82,21 C69,8 50,17 50,32 Z'

export function LogoMark({ size = 24, pulseColor = '#f75336', className, style }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="NeoMatCare"
      className={className}
      style={{ display: 'block', flexShrink: 0, ...style }}
    >
      <path d={HEART_PATH} fill="#FFFFFF" />
      <path
        d="M20,34 L33,34 L39,20 L47,46 L53,28 L60,34 L80,34"
        fill="none"
        stroke={pulseColor}
        strokeWidth="4.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="50" cy="66" r="9.5" fill="#FFFFFF" stroke={pulseColor} strokeWidth="2.5" />
    </svg>
  )
}

export default function LogoTile({ size = 36, bgColor = '#207652', rounded = true, className, style }) {
  const r = size >= 48 ? 22 : size >= 36 ? 18 : 14
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="NeoMatCare"
      className={className}
      style={{ display: 'block', flexShrink: 0, ...style }}
    >
      <rect width="100" height="100" rx={rounded ? r : 0} fill={bgColor} />
      <path d={HEART_PATH} fill="#f0f9f4" />
      <path
        d="M20,34 L33,34 L39,20 L47,46 L53,28 L60,34 L80,34"
        fill="none"
        stroke="#f75336"
        strokeWidth="4.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="50" cy="66" r="9.5" fill={bgColor} />
      <circle cx="50" cy="66" r="5.5" fill="#f0f9f4" />
    </svg>
  )
}
