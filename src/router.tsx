import { useEffect, useState } from 'react';
import {
  Link,
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';
import './App.css';
import {
  galleryItems,
  navLinks,
  processSteps,
  reviews,
  services,
  siteMeta,
} from './data';

function RootLayout() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="topbar">
        <div className="brand-lockup">
          <img className="brand-mark" src={siteMeta.logo} alt="MAK Tiling logo" />
          <div>
            <p className="brand-name">{siteMeta.brand}</p>
            <p className="brand-subtitle">Luxury tile finishes with no shortcuts</p>
          </div>
        </div>

        <nav className="main-nav" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="nav-link"
              activeProps={{ className: 'nav-link nav-link-active' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>

      <main id="main-content">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <div>
            <p className="site-footer-brand">{siteMeta.brand}</p>
            <p className="site-footer-copy">Cheltenham, Victoria</p>
          </div>
          <div className="site-footer-links">
            <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
            <a href="tel:+61">{siteMeta.phone}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeReview, setActiveReview] = useState(0);
  const slide = galleryItems[activeSlide];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % galleryItems.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveReview((current) => (current + 1) % reviews.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  function showPreviousSlide() {
    setActiveSlide((current) => (current - 1 + galleryItems.length) % galleryItems.length);
  }

  function showNextSlide() {
    setActiveSlide((current) => (current + 1) % galleryItems.length);
  }

  return (
    <>
      <section className="home-slider" aria-label="Featured tiling work">
        <div className="home-slider-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
          {galleryItems.map((item) => (
            <div className="home-slide" key={item.title}>
              <div
                className="home-slide-image"
                style={{
                  backgroundImage: `linear-gradient(rgba(8, 14, 22, 0.36), rgba(8, 14, 22, 0.62)), url(${item.image})`,
                }}
                role="img"
                aria-label={item.alt}
              />
            </div>
          ))}
        </div>

        <div className="home-slider-inner">
          <div className="home-slider-card">
            <p className="eyebrow">MAK Tiling</p>
            <h1>Quality tiling. Simple finishes. Real work.</h1>
            <p className="home-slider-caption">{slide.title}</p>

            <div className="home-slider-links" aria-label="Quick links">
              <Link className="button button-primary" to="/gallery">
                Gallery
              </Link>
              <Link className="button button-secondary" to="/services">
                Services
              </Link>
              <Link className="button button-secondary" to="/contact">
                Contact
              </Link>
            </div>
          </div>

          <div className="slider-controls" aria-label="Slider controls">
            <button className="slider-arrow" type="button" onClick={showPreviousSlide} aria-label="Previous image">
              Prev
            </button>
            <div className="slider-dots" aria-label="Slide selection">
              {galleryItems.map((item, index) => (
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
          <h2>Simple, clean, high-quality tile work.</h2>
        </div>

        <div className="home-links-grid">
          {galleryItems.slice(0, 2).map((item) => (
            <figure className="home-feature-card" key={item.title}>
              <img src={item.image} alt={item.alt} loading="lazy" />
            </figure>
          ))}

          <div className="home-link-list">
            <Link className="home-link-row" to="/services">
              <strong>Our Services</strong>
              <span>Bathrooms, wet areas, feature walls, and large format work</span>
            </Link>
            <Link className="home-link-row" to="/gallery">
              <strong>Project Gallery</strong>
              <span>Browse recent examples and finished details</span>
            </Link>
            <Link className="home-link-row" to="/contact">
              <strong>Contact</strong>
              <span>Get in touch for your project</span>
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
          <div
            className="reviews-track"
            style={{ transform: `translateX(-${activeReview * 100}%)` }}
          >
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
  );
}

function ServicesPage() {
  return (
    <section className="section section-grid page-shell">
      <div className="section-heading">
        <p className="eyebrow">Services</p>
        <h1>Detailed tiling services for premium residential projects.</h1>
        <p>
          From wet areas to architectural features, MAK Tiling focuses on tidy
          set-outs, strong preparation, and finishes that look considered from every
          angle.
        </p>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function GalleryPage() {
  return (
    <section className="section page-shell">
      <div className="section-heading">
        <p className="eyebrow">Gallery</p>
        <h1>Selected MAK Tiling work</h1>
        <p>
          A focused look at exterior feature work, wet areas, and finish quality
          that reflects Marildo&apos;s standard on site.
        </p>
      </div>

      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <figure
            className={`gallery-card ${index === 0 ? 'gallery-card-featured' : ''}`}
            key={item.title}
          >
            <img src={item.image} alt={item.alt} loading="lazy" />
            <figcaption>
              <span>{item.category}</span>
              <strong>{item.title}</strong>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function ProcessPage() {
  return (
    <section className="section section-grid process-section page-shell">
      <div className="section-heading">
        <p className="eyebrow">Process</p>
        <h1>Careful workmanship starts well before the final tile is set.</h1>
        <p>
          The best result comes from planning, proper substrate prep, consistent
          installation, and a clean finish. That is the MAK Tiling approach on every
          project.
        </p>
      </div>

      <div className="process-grid">
        {processSteps.map((step, index) => (
          <article className="process-card" key={step.title}>
            <p className="process-number">0{index + 1}</p>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="section contact-section page-shell">
      <div className="contact-copy">
        <p className="eyebrow">Contact</p>
        <h1>Ready to talk about your tiling project?</h1>
        <p>
          Reach out to discuss a renovation, new build, feature wall, or premium wet
          area install. MAK Tiling is based in {siteMeta.location} and works on-site
          for clients who care about a high-end result.
        </p>
      </div>

      <div className="contact-card">
        <dl className="contact-list">
          <div>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
            </dd>
          </div>
          <div>
            <dt>Phone</dt>
            <dd>
              <a href="tel:+61">{siteMeta.phone}</a>
            </dd>
          </div>
          <div>
            <dt>Base</dt>
            <dd>{siteMeta.location}</dd>
          </div>
          <div>
            <dt>Service style</dt>
            <dd>On-site tradie service for residential projects</dd>
          </div>
        </dl>

        <a className="button button-primary contact-button" href={`mailto:${siteMeta.email}`}>
          Email MAK Tiling
        </a>
      </div>
    </section>
  );
}

const rootRoute = createRootRoute({
  component: RootLayout,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: ServicesPage,
});

const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/gallery',
  component: GalleryPage,
});

const processRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/process',
  component: ProcessPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  servicesRoute,
  galleryRoute,
  processRoute,
  contactRoute,
]);

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export function AppRouterProvider() {
  return <RouterProvider router={router} />;
}
