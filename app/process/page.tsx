import type { Metadata } from 'next'
import Image from 'next/image'

import { processShowcase, processSteps } from '@/src/data'

export const metadata: Metadata = {
  title: 'How MAK Tiling Works',
  description:
    'Learn how MAK Tiling approaches planning, preparation, installation, and handover for premium on-site tiling projects in Melbourne VIC.',
  alternates: {
    canonical: '/process',
  },
}

export default function ProcessPage() {
  return (
    <section className="section section-grid process-section page-shell">
      <div className="section-heading">
        <p className="eyebrow">Process</p>
        <h1>A quality-first approach to on-site tiling.</h1>
        <p>
          MAK Tiling is built around practical planning, careful preparation, and finish quality that holds up in real
          homes and high-end residential projects.
        </p>
      </div>

      <div className="page-visuals">
        <div className="section-heading page-visuals-heading">
          <h2>{processShowcase.title}</h2>
          <p>{processShowcase.description}</p>
        </div>

        <div className="page-visual-grid">
          {processShowcase.items.map((item) => (
            <figure className="page-visual-card" key={item.title}>
              <div className="page-visual-image">
                <Image src={item.image} alt={item.alt} fill sizes="(max-width: 960px) 100vw, 33vw" />
              </div>
              <figcaption>
                <span>{item.category}</span>
                <strong>{item.title}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="process-grid">
        {processSteps.map((step, index) => (
          <article className="process-card" key={step.title}>
            <p className="process-number">0{index + 1}</p>
            <h2>{step.title}</h2>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
