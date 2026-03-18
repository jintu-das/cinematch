import { Link, useLocation } from '@tanstack/react-router'
import { Button } from './ui/button'

export function Navigation() {
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/discover', label: 'DISCOVER' },
    { path: '/explore', label: 'EXPLORE' },
    { path: '/library', label: 'LIBRARY' },
  ]

  return (
    <nav className="h-13 bg-white border-b border-[#C8C2B8] px-6 flex items-center justify-between sticky top-0 z-50">
      <Link
        to="/"
        className="font-serif text-[17px] tracking-[0.14em] text-[#1A1814]"
      >
        CINEMATCH
      </Link>

      <div className="flex items-center gap-8">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[11px] uppercase tracking-widest transition-colors relative ${
                isActive
                  ? 'text-[#1A1814]'
                  : 'text-[#9A9388] hover:text-[#5A554E]'
              }`}
            >
              {link.label}
              {isActive && (
                <span className="absolute -bottom-4.25 left-0 right-0 h-0.5 bg-[#1A1814]" />
              )}
            </Link>
          )
        })}
      </div>

      <div className="flex items-center gap-3">
        <Button className="uppercase" variant="outline">
          Sign Up
        </Button>
        <Button className="uppercase" variant="default">
          Join free
        </Button>
      </div>
    </nav>
  )
}
