import type { StaticImageData } from 'next/image'

import logo from './assets/mak-gallery/mak-tiling-logo.jpg'
import exteriorHero from './assets/mak-gallery/melbourne-tiling-exterior-herringbone-facade.jpg'
import exteriorWide from './assets/mak-gallery/melbourne-tiling-facade-perspective.jpg'
import exteriorDetail from './assets/mak-gallery/melbourne-tiling-facade-detail.jpg'
import mosaicFeature from './assets/mak-gallery/melbourne-tiling-penny-round-feature-wall.jpg'
import showerBench from './assets/mak-gallery/melbourne-tiling-large-format-shower.jpg'

export type NavLink = {
  label: string
  href: '/' | '/services' | '/gallery' | '/process' | '/contact'
}

export type Service = {
  title: string
  description: string
}

export type GalleryItem = {
  title: string
  category: string
  image: StaticImageData | string
  alt: string
}

export type ProcessStep = {
  title: string
  description: string
}

export type Review = {
  quote: string
  author: string
}

export type ShowcaseGroup = {
  title: string
  description: string
  items: GalleryItem[]
}

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://maktiling.com.au').replace(/\/$/, '')

export const siteMeta = {
  brand: 'MAK Tiling',
  email: 'marildo@maktiling.com',
  formRecipientEmail: 'benmondrywork@gmail.com',
  phone: '+61 0452 647 544',
  location: 'Melbourne, VIC',
  model: 'On-site tiling business',
  siteUrl,
  description:
    'MAK Tiling is a Melbourne, VIC tiling business delivering high-quality on-site tile installation for bathrooms, feature walls, wet areas, and premium residential projects.',
  logo,
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Process', href: '/process' },
  { label: 'Contact', href: '/contact' },
]

export const services: Service[] = [
  {
    title: 'Screeding',
    description:
      'Floor screeding to create a level, stable base before tile installation, with attention to falls, finish quality, and site conditions.',
  },
  {
    title: 'Waterproofing',
    description:
      'Waterproofing for bathrooms, showers, laundries, and wet areas completed carefully to support long-term durability beneath the finished tilework.',
  },
  {
    title: 'Caulking',
    description:
      'Neat caulking to movement joints, internal corners, and transitions for a clean finish that helps protect tiled areas over time.',
  },
  {
    title: 'Ceramic Tiling',
    description:
      'Ceramic tile installation for walls and floors with careful set-out, balanced joints, and a tidy finished result suited to residential spaces.',
  },
  {
    title: 'Porcelain Tiling',
    description:
      'Porcelain tiling for interiors and exteriors with close attention to layout, edge quality, and the heavier demands of denser tile products.',
  },
  {
    title: 'Stone Tiling',
    description:
      'Stone tiling for premium spaces where natural variation, careful handling, and detail-focused installation matter from start to finish.',
  },
  {
    title: 'Mosaic Tiling',
    description:
      'Mosaic tiling for feature areas, splashbacks, niches, and curved or detailed surfaces where precision and finish quality are especially important.',
  },
  {
    title: 'Bathroom Renovations',
    description:
      'Bathroom renovation tiling work delivered with a focus on preparation, waterproofing, finish quality, and a clean end result across the full tiled space.',
  },
]

export const galleryItems: GalleryItem[] = [
  {
    title: 'Sandstone',
    category: 'Luxury exterior finish',
    image: exteriorHero,
    alt: 'Modern double-storey home with a light herringbone tiled facade and black framed windows.',
  },
  {
    title: 'Facade Perspective',
    category: 'Architectural tilework',
    image: exteriorWide,
    alt: 'Wide streetside view of a home with tiled feature cladding across the front elevation.',
  },
  {
    title: 'Facade Detail',
    category: 'Precision set-out',
    image: exteriorDetail,
    alt: 'Closer view of an exterior tiled facade with repeating angled pattern lines.',
  },
  {
    title: 'Penny-Round Feature Wall',
    category: 'Statement mosaic work',
    image: mosaicFeature,
    alt: 'Feature wall with circular penny-round mosaic tiles in warm neutral tones and dark accents.',
  },
  {
    title: 'Large-Format Shower',
    category: 'Wet area installation',
    image: showerBench,
    alt: 'Dark grey large-format tiled shower area with a built-in bench seat and floor falls to the drain.',
  },
  {
    title: 'Blue Stone',
    category: 'Architectural exterior tiling',
    image: '/gallery/melbourne-tiling-charcoal-exterior-cladding.jpg',
    alt: 'Dark charcoal large-format cladding wrapped around an exterior corner on a residential build.',
  },
  {
    title: 'Textured Wall Niche',
    category: 'Bathroom feature detail',
    image: '/gallery/melbourne-tiling-textured-wall-niche.jpg',
    alt: 'White textured wall tiles with an inset niche detail.',
  },
  {
    title: 'Vertical Finger Tile Bathroom',
    category: 'Precision bathroom finish',
    image: '/gallery/melbourne-tiling-vertical-finger-tile-bathroom.jpg',
    alt: 'Bathroom with large-format light floor tiles and narrow vertical wall tiles in the shower zone.',
  },
  {
    title: 'Freestanding Bath Wet Area',
    category: 'Premium bathroom installation',
    image: '/gallery/melbourne-tiling-freestanding-bath-wet-area.jpg',
    alt: 'Bathroom with a freestanding bath, twin shower layout, and vertically stacked wall tiles.',
  },
  {
    title: 'Terrazzo Shower Room',
    category: 'Feature material pairing',
    image: '/gallery/melbourne-tiling-terrazzo-shower-room.jpg',
    alt: 'Bathroom with terrazzo floor and wall finishes framed by green tiles around a window.',
  },
  {
    title: 'Entry Stone Feature Wall',
    category: 'Interior statement tilework',
    image: '/gallery/melbourne-tiling-stone-stair-feature-wall.jpg',
    alt: 'Floating timber staircase set against a full-height grey stone-look tiled feature wall.',
  },
  {
    title: 'Linear Brick Exterior',
    category: 'Exterior tilework',
    image: '/gallery/melbourne-tiling-linear-brick-exterior.jpg',
    alt: 'Exterior wall finished in slim horizontal light-toned brick-style tiles.',
  },
  {
    title: 'Fireplace Hearth Detail',
    category: 'Custom interior feature',
    image: '/gallery/melbourne-tiling-fireplace-hearth-detail.jpg',
    alt: 'Fireplace base detailed with black irregular-cut stone tiles.',
  },
  {
    title: 'Soft Grey Bathroom',
    category: 'Bathroom renovation finish',
    image: '/gallery/melbourne-tiling-soft-grey-bathroom.jpg',
    alt: 'Soft grey bathroom with large-format tiles and a mosaic feature wall inside the shower zone.',
  },
  {
    title: 'Curved Kitchen Island Tiling',
    category: 'Kitchen feature detail',
    image: '/gallery/melbourne-tiling-curved-kitchen-island.jpg',
    alt: 'Kitchen with a curved island clad in narrow vertical feature tiles.',
  },
  {
    title: 'Mosaic Bath Nook',
    category: 'Luxury wet area detail',
    image: '/gallery/melbourne-tiling-mosaic-bath-nook.jpg',
    alt: 'Freestanding bath set in front of a dark mosaic feature wall under a skylight.',
  },
  {
    title: 'Scallop Vanity Wall',
    category: 'Decorative wall tiling',
    image: '/gallery/melbourne-tiling-scallop-vanity-wall.jpg',
    alt: 'Vanity wall finished with white scallop-pattern feature tiles around two windows.',
  },
  {
    title: 'Grid Tile Shower',
    category: 'Clean bathroom set-out',
    image: '/gallery/melbourne-tiling-grid-tile-shower.jpg',
    alt: 'Shower with square light tiles wrapping walls, seat, and return corners.',
  },
  {
    title: 'Terrazzo Partition Shower',
    category: 'Custom shower detail',
    image: '/gallery/melbourne-tiling-terrazzo-partition-shower.jpg',
    alt: 'Shower with white floor mosaics and a terrazzo partition wall with a built-in niche.',
  },
]

export const serviceShowcase: ShowcaseGroup = {
  title: 'A wider mix of residential work',
  description: 'Bathrooms, kitchens, feature surfaces, and custom details pulled from a broader project set.',
  items: [galleryItems[9], galleryItems[14], galleryItems[12]],
}

export const processShowcase: ShowcaseGroup = {
  title: 'Detail matters at every stage',
  description: 'The site photos below show the kind of finish quality, alignment, and material variety MAK Tiling works through.',
  items: [galleryItems[7], galleryItems[8], galleryItems[10]],
}

export const homeSlides = [
  galleryItems[0],
  galleryItems[3],
  galleryItems[5],
  galleryItems[7],
  galleryItems[8],
  galleryItems[10],
  galleryItems[14],
  galleryItems[15],
]

export const processSteps: ProcessStep[] = [
  {
    title: 'Plan The Layout',
    description:
      'Every project starts with practical planning so the finished tilework feels clean, balanced, and properly resolved.',
  },
  {
    title: 'Prepare Properly',
    description:
      'Substrates, levels, and wet-area details are handled carefully because the final quality depends on the base.',
  },
  {
    title: 'Install With Precision',
    description:
      'Tiles are installed with close attention to straight lines, detail work, edge conditions, and a premium finish.',
  },
  {
    title: 'Leave It Clean',
    description:
      'The completed work is checked, cleaned, and presented properly so the quality is obvious from the final handover.',
  },
]

export const reviews: Review[] = [
  {
    quote: 'Great finish, easy to deal with, and the work was done properly.',
    author: 'Melbourne client',
  },
  {
    quote: 'Very happy with the quality. Clean lines, solid detail, no shortcuts.',
    author: 'Bathroom renovation',
  },
  {
    quote: 'Reliable, tidy on site, and the final result looked premium.',
    author: 'Custom residential project',
  },
]
