import Link from 'next/link'
import { ReactNode } from 'react'

// ─── BUTTON ───────────────────────────────────────────────────────────────────
interface BtnProps {
  href: string
  children: ReactNode
  variant?: 'fill' | 'ghost'
  external?: boolean
  className?: string
}

export function Btn({ href, children, variant = 'fill', external, className = '' }: BtnProps) {
  const base = 'inline-flex items-center gap-2 font-[500] text-[13px] rounded-[9px] px-[18px] py-[8px] transition-all duration-200 cursor-pointer whitespace-nowrap no-underline'
  const styles = {
    fill:  'bg-[var(--fg)] text-[var(--bg)] border border-transparent hover:opacity-85 hover:-translate-y-px font-[600]',
    ghost: 'text-[var(--fg-2)] border border-[var(--border-2)] bg-transparent hover:text-[var(--fg)] hover:border-[var(--border-3)] hover:bg-[var(--glass-bg)]',
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles[variant]} ${className}`}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  )
}

// ─── SECTION TAG ──────────────────────────────────────────────────────────────
export function SectionTag({ children }: { children: ReactNode }) {
  return <div className="sec-tag">{children}</div>
}

// ─── SVG ICON ─────────────────────────────────────────────────────────────────
export function SvgIcon({
  path,
  size = 18,
  strokeWidth = 1.6,
}: {
  path: string
  size?: number
  strokeWidth?: number
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      stroke="currentColor"
      fill="none"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      dangerouslySetInnerHTML={{ __html: path }}
    />
  )
}
