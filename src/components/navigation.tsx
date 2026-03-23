import { Link } from '@tanstack/react-router'
import { Button } from './ui/button'
import { MenuIcon } from 'lucide-react'

export function Navigation() {
  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/discover', label: 'DISCOVER' },
    { path: '/explore', label: 'EXPLORE' },
    { path: '/library', label: 'LIBRARY' },
  ]

  return (
    <nav className="flex items-center justify-between px-4 py-4 border-b">
      <Link
        to="/"
        className="font-serif text-[17px] tracking-[0.14em] text-[#1A1814]"
      >
        CINEMATCH
      </Link>

      <div className="hidden lg:flex gap-4">
        {navLinks.map((link) => {
          return (
            <Link key={link.path} to={link.path} className="text-sm">
              {link.label}
            </Link>
          )
        })}
      </div>

      <div className="hidden lg:block space-x-2">
        <Button className="uppercase" variant="outline">
          Sign Up
        </Button>
        <Button className="uppercase" variant="default">
          Get Started
        </Button>
      </div>

      <Button className="lg:hidden" size="icon" variant="outline">
        <MenuIcon className="size-4" />
      </Button>
    </nav>
  )
}
