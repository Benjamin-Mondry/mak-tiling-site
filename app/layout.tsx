import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'

import { GoogleAnalytics } from '@/components/google-analytics'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { siteMeta } from '@/src/data'

import './globals.css'

const siteUrl = siteMeta.siteUrl
const googleVerification = process.env.GOOGLE_SITE_VERIFICATION

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: siteMeta.brand,
  image: `${siteUrl}${siteMeta.logo.src}`,
  url: siteUrl,
  email: siteMeta.email,
  telephone: siteMeta.phone,
  areaServed: 'Melbourne, VIC',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Melbourne',
    addressRegion: 'VIC',
    addressCountry: 'AU',
  },
  description: siteMeta.description,
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteMeta.brand,
  url: siteUrl,
  description: siteMeta.description,
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': websiteSchema['@type'],
      name: websiteSchema.name,
      url: websiteSchema.url,
      description: websiteSchema.description,
    },
    {
      '@type': localBusinessSchema['@type'],
      name: localBusinessSchema.name,
      image: localBusinessSchema.image,
      url: localBusinessSchema.url,
      email: localBusinessSchema.email,
      telephone: localBusinessSchema.telephone,
      areaServed: localBusinessSchema.areaServed,
      address: localBusinessSchema.address,
      description: localBusinessSchema.description,
    },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: 'MAK Tiling',
  title: {
    default: 'MAK Tiling | Melbourne VIC Tiling Business',
    template: '%s | MAK Tiling',
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  description: siteMeta.description,
  category: 'construction',
  keywords: [
    'tiler Melbourne',
    'Melbourne tiling business',
    'bathroom tiler Melbourne',
    'feature wall tiling Melbourne',
    'large format tiling Melbourne',
    'on-site tiler Melbourne',
  ],
  authors: [{ name: 'MAK Tiling' }],
  alternates: {
    canonical: '/',
  },
  verification: {
    google: googleVerification,
  },
  openGraph: {
    title: 'MAK Tiling | Melbourne VIC Tiling Business',
    description: siteMeta.description,
    siteName: siteMeta.brand,
    url: siteUrl,
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: `${siteUrl}${siteMeta.logo.src}`,
        width: 456,
        height: 450,
        alt: 'MAK Tiling logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MAK Tiling | Melbourne VIC Tiling Business',
    description: siteMeta.description,
    images: [`${siteUrl}${siteMeta.logo.src}`],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        <Script
          id="mak-tiling-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <div className="site-shell">
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
