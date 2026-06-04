'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { galleryItems, homeSlides, reviews } from '@/src/data'

export function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [activeReview, setActiveReview] = useState(0)
  const slide = homeSlides[activeSlide]

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % homeSlides.length)
    }, 4500)

    return () => window.clearInterval(intervalId)
  }, [])

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveReview((current) => (current + 1) % reviews.length)
    }, 5000)

    return () => window.clearInterval(intervalId)
  }, [])

  function showPreviousSlide() {
    setActiveSlide((current) => (current - 1 + homeSlides.length) % homeSlides.length)
  }

  function showNextSlide() {
    setActiveSlide((current) => (current + 1) % homeSlides.length)
  }

  function getImageSrc(image: (typeof homeSlides)[number]['image']) {
    return typeof image === 'string' ? image : image.src
  }

  return (
    <>
      <section className="home-slider" aria-label="Featured tiling work">
        <div className="home-slider-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
          {homeSlides.map((item) => (
            <div className="home-slide" key={item.title}>
              <div
                className="home-slide-image"
                style={{
                  backgroundImage: `linear-gradient(rgba(8, 14, 22, 0.38), rgba(8, 14, 22, 0.64)), url(${getImageSrc(item.image)})`,
                }}
                role="img"
                aria-label={item.alt}
              />
            </div>
          ))}
        </div>

        <div className="home-slider-inner">
          <div className="home-slider-card">
            <p className="eyebrow">Melbourne, VIC</p>
            <h1>High-quality tiling for Melbourne</h1>
            <p className="home-slider-caption">{slide.title}</p>

            <div className="home-slider-links" aria-label="Quick links">
              <Link className="button button-brand" href="/contact#quote-form">
                Get a quote
              </Link>
              <Link className="button button-primary" href="/gallery">
                Gallery
              </Link>
              <Link className="button button-secondary" href="/services">
                Services
              </Link>
              <Link className="button button-secondary" href="/contact">
                Contact
              </Link>
            </div>
          </div>

          <div className="slider-controls" aria-label="Slider controls">
            <button className="slider-arrow" type="button" onClick={showPreviousSlide} aria-label="Previous image">
              Prev
            </button>
            <div className="slider-dots" aria-label="Slide selection">
              {homeSlides.map((item, index) => (
                <button
                  key={item.title}
                  className={index === activeSlide ? 'slider-dot slider-dot-active' : 'slider-dot'}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Show ${item.title}`}
                  aria-pressed={index === activeSlide}
                />
              ))}
            </div>
            <button className="slider-arrow" type="button" onClick={showNextSlide} aria-label="Next image">
              Next
            </button>
          </div>
        </div>
      </section>

      <section className="home-links section">
        <div className="section-heading home-links-heading">
          <p className="eyebrow">MAK Tiling</p>
          <h2>Tiling work across Melbourne, VIC.</h2>
          <p>
            A tiling business focused on residential quality. Mak Tiling has delivered finishes on high-end builds, bathrooms, and detail-driven projects.
          </p>
        </div>

        <div className="home-links-grid">
          {galleryItems.slice(0, 2).map((item) => (
            <figure className="home-feature-card" key={item.title}>
              <Image src={item.image} alt={item.alt} fill sizes="(max-width: 960px) 100vw, 33vw" quality={60} />
            </figure>
          ))}

          <div className="home-link-list">
            <Link className="home-link-row" href="/services">
              <strong>Our Services</strong>
              <span>Bathrooms, wet areas, feature walls, and large format tiling</span>
            </Link>
            <Link className="home-link-row" href="/gallery">
              <strong>Project Gallery</strong>
              <span>See examples of premium residential and architectural tilework</span>
            </Link>
            <Link className="home-link-row" href="/contact">
              <strong>Contact MAK Tiling</strong>
              <span>Melbourne-based tiling business for quality-driven work</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="reviews-strip section">
        <div className="section-heading reviews-heading">
          <p className="eyebrow">Reviews</p>
          <h2>What clients say</h2>
        </div>

        <div className="reviews-slider">
          <div className="reviews-track" style={{ transform: `translateX(-${activeReview * 100}%)` }}>
            {reviews.map((review) => (
              <article className="review-card" key={`${review.author}-${review.quote}`}>
                <p className="review-quote">&quot;{review.quote}&quot;</p>
                <p className="review-author">{review.author}</p>
              </article>
            ))}
          </div>

          <div className="slider-dots" aria-label="Review selection">
            {reviews.map((review, index) => (
              <button
                key={review.author}
                className={index === activeReview ? 'slider-dot slider-dot-active' : 'slider-dot'}
                type="button"
                onClick={() => setActiveReview(index)}
                aria-label={`Show review ${index + 1}`}
                aria-pressed={index === activeReview}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
