/** @type {import('next').NextConfig} */
const nextConfig = {
  // RIMOSSO output: 'export' — con Vercel non serve e blocca le API routes
  images: {
    unoptimized: false, // Vercel ottimizza le immagini automaticamente
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
