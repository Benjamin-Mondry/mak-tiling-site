import logo from './assets/mak-gallery/logo.jpg';
import exteriorHero from './assets/mak-gallery/IMG_0104.jpg';
import exteriorWide from './assets/mak-gallery/IMG_0102.jpg';
import exteriorDetail from './assets/mak-gallery/IMG_0106.jpg';
import mosaicFeature from './assets/mak-gallery/IMG_0096.jpg';
import showerBench from './assets/mak-gallery/IMG_0153.jpg';

type NavLink = {
  label: string;
  to: '/' | '/services' | '/gallery' | '/process' | '/contact';
};

type Service = {
  title: string;
  description: string;
};

type GalleryItem = {
  title: string;
  category: string;
  image: string;
  alt: string;
};

type ProcessStep = {
  title: string;
  description: string;
};

type Review = {
  quote: string;
  author: string;
};

export const siteMeta = {
  brand: 'MAK Tiling',
  email: 'marildo@maktiling.com',
  phone: '+61 XXX XXX XXX',
  location: 'Cheltenham, Victoria',
  logo,
};

export const navLinks: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Process', to: '/process' },
  { label: 'Contact', to: '/contact' },
];

export const services: Service[] = [
  {
    title: 'Bathrooms & Wet Areas',
    description:
      'Clean set-outs, well-balanced joints, careful falls, and sharp detailing for showers, powder rooms, and laundry spaces.',
  },
  {
    title: 'Feature Walls',
    description:
      'Statement tilework for entry facades, living spaces, splashbacks, and architectural finishes that need visual impact.',
  },
  {
    title: 'Large Format Installation',
    description:
      'Thoughtful planning for oversized tiles, tight lines, and a premium result that reads straight and calm from every angle.',
  },
  {
    title: 'Premium Residential Projects',
    description:
      'A dependable on-site tiler for custom builds and renovations where quality, material selection, and finish matter.',
  },
];

export const galleryItems: GalleryItem[] = [
  {
    title: 'Exterior Herringbone Facade',
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
];

export const processSteps: ProcessStep[] = [
  {
    title: 'Measure & Plan',
    description: 'Every job starts with layout thinking, material suitability, and a finish strategy that avoids rushed decisions.',
  },
  {
    title: 'Prepare Properly',
    description: 'Substrates, levels, alignment, and wet-area details are handled carefully because the finish is only as good as the base.',
  },
  {
    title: 'Install With Care',
    description: 'Tiles are laid with consistency, crisp spacing, and close attention to edges, corners, and transitions.',
  },
  {
    title: 'Leave It Clean',
    description: 'The final result is checked, cleaned, and left presentation-ready so the workmanship speaks for itself.',
  },
];

export const reviews: Review[] = [
  {
    quote: 'Great finish, easy to deal with, and the work was done properly.',
    author: 'Local client',
  },
  {
    quote: 'Very happy with the quality. Clean lines, solid detail, no shortcuts.',
    author: 'Bathroom renovation',
  },
  {
    quote: 'Reliable, tidy on site, and the final result looked premium.',
    author: 'Custom home project',
  },
];
