'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { navLinks, siteMeta } from '@/src/data'

export function SiteHeader() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="topbar">
      <Link className="brand-lockup" href="/" aria-label="Go to MAK Tiling home page">
        <Image className="brand-mark" src={siteMeta.logo} alt="MAK Tiling logo" width={68} height={68} />
        <div>
          <p className="brand-name">{siteMeta.brand}</p>
          <p className="brand-subtitle">{siteMeta.model}</p>
        </div>
      </Link>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <span className="menu-toggle-bar" />
        <span className="menu-toggle-bar" />
        <span className="menu-toggle-bar" />
      </button>

      <nav
        id="primary-navigation"
        className={isMenuOpen ? 'main-nav main-nav-open' : 'main-nav'}
        aria-label="Primary"
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? 'nav-link nav-link-active' : 'nav-link'}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          className="button button-brand header-quote-button"
          href="/contact#quote-form"
          onClick={() => setIsMenuOpen(false)}
        >
          Get a quote
        </Link>
      </nav>
    </header>
  )
}
