'use client'

import { useState } from 'react'

import { siteMeta } from '@/src/data'

export function SiteFooter() {
  const [showPhone, setShowPhone] = useState(false)

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div>
          <p className="site-footer-brand">{siteMeta.brand}</p>
          <p className="site-footer-copy">
            {siteMeta.location} · {siteMeta.model}
          </p>
        </div>

        <div className="site-footer-links">
          <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
          {showPhone ? (
            <a href="tel:+610452647544">{siteMeta.phone}</a>
          ) : (
            <button className="footer-phone-reveal" type="button" onClick={() => setShowPhone(true)}>
              Reveal phone number
            </button>
          )}
        </div>
      </div>
    </footer>
  )
}
