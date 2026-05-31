'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { navLinks, siteMeta } from '@/src/data'

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="topbar">
      <Link className="brand-lockup" href="/" aria-label="Go to MAK Tiling home page">
        <Image className="brand-mark" src={siteMeta.logo} alt="MAK Tiling logo" width={68} height={68} priority />
        <div>
          <p className="brand-name">{siteMeta.brand}</p>
          <p className="brand-subtitle">{siteMeta.model}</p>
        </div>
      </Link>

      <nav className="main-nav" aria-label="Primary">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? 'nav-link nav-link-active' : 'nav-link'}
          >
            {link.label}
          </Link>
        ))}
        <Link className="button button-brand header-quote-button" href="/contact#quote-form">
          Get a quote
        </Link>
      </nav>
    </header>
  )
}
