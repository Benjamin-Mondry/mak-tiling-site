import type { Metadata } from 'next'
import Image from 'next/image'

import { serviceShowcase, services } from '@/src/data'

export const metadata: Metadata = {
  title: 'Tiling Services In Melbourne VIC',
  description:
    'Screeding, waterproofing, caulking, ceramic tiling, porcelain tiling, stone tiling, and mosaic tiling services across Melbourne VIC.',
  alternates: {
    canonical: '/services',
  },
}

export default function ServicesPage() {
  return (
    <section className="section section-grid page-shell">
      <div className="section-heading">
        <p className="eyebrow">Services</p>
        <h1>Tiling services across Melbourne, VIC.</h1>
        <p>
          MAK Tiling provides preparation and tile installation services across Melbourne, VIC with a focus on
          quality workmanship, clean finishes, and detail-driven on-site work.
        </p>
      </div>

      <div className="page-visuals">
        <div className="section-heading page-visuals-heading">
          <h2>{serviceShowcase.title}</h2>
          <p>{serviceShowcase.description}</p>
        </div>

        <div className="page-visual-grid">
          {serviceShowcase.items.map((item) => (
            <figure className="page-visual-card" key={item.title}>
              <div className="page-visual-image">
                <Image src={item.image} alt={item.alt} fill sizes="(max-width: 960px) 100vw, 33vw" quality={60} />
              </div>
              <figcaption>
                <span>{item.category}</span>
                <strong>{item.title}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
