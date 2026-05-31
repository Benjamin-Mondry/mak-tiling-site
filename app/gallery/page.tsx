import type { Metadata } from 'next'
import Image from 'next/image'

import { galleryItems } from '@/src/data'

export const metadata: Metadata = {
  title: 'Tiling Project Gallery',
  description:
    'Browse MAK Tiling project images including bathrooms, feature walls, wet areas, and premium architectural tilework in Melbourne VIC.',
  alternates: {
    canonical: '/gallery',
  },
}

export default function GalleryPage() {
  return (
    <section className="section page-shell">
      <div className="section-heading">
        <p className="eyebrow">Gallery</p>
        <h1>Recent MAK Tiling work</h1>
        <p>Selected project images showing premium finishes, detail work, and high-quality residential installations.</p>
      </div>

      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <figure className={`gallery-card ${index === 0 ? 'gallery-card-featured' : ''}`} key={item.title}>
            <div className="gallery-image-shell">
              <Image src={item.image} alt={item.alt} fill sizes="(max-width: 960px) 100vw, 33vw" />
            </div>
            <figcaption>
              <span>{item.category}</span>
              <strong>{item.title}</strong>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
