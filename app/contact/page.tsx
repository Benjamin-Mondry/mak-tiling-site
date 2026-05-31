import type { Metadata } from 'next'

import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact A Melbourne Tiling Business',
  description:
    'Contact MAK Tiling for on-site tiling work across Melbourne VIC including bathrooms, wet areas, feature walls, and premium residential projects.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <section className="section contact-section page-shell">
      <div className="contact-copy">
        <p className="eyebrow">Contact</p>
        <h1>Get a quote for your tiling project.</h1>
        <p>
          MAK Tiling is a Melbourne, VIC tiling business that travels to site and delivers high-quality work for
          bathrooms, wet areas, feature walls, and premium residential projects.
        </p>
        <p>Send through the basics and we can review the job, location, and type of tilework.</p>
      </div>

      <div className="contact-card">
        <ContactForm />
      </div>
    </section>
  )
}
