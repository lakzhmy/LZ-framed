'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  // Don't show navigation on studio pages
  if (pathname?.startsWith('/studio')) {
    return null
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-light tracking-tight hover:opacity-70 transition-opacity"
          >
            LAKZHMY
          </Link>

          <div className="flex gap-8">
            <Link
              href="/works"
              className={`text-sm font-light hover:opacity-70 transition-opacity ${
                pathname === '/works' ? 'opacity-100' : 'opacity-60'
              }`}
            >
              Works
            </Link>
            <Link
              href="/exploration"
              className={`text-sm font-light hover:opacity-70 transition-opacity ${
                pathname === '/exploration' ? 'opacity-100' : 'opacity-60'
              }`}
            >
              Exploration
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
