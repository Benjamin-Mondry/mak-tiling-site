import path from 'node:path'
import { fileURLToPath } from 'node:url'
import type { NextConfig } from 'next'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    qualities: [60, 75],
  },
  turbopack: {
    root: rootDir,
  },
}

export default nextConfig
