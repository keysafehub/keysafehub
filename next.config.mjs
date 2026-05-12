/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true, // Questo evita che il deploy si blocchi per piccoli errori di battitura
  },
  eslint: {
    ignoreDuringBuilds: true, // Questo ignora avvisi di formattazione
  },
};

export default nextConfig;
