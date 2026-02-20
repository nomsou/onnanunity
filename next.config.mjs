/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1920, 2560],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },

  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/fonts/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/about.html", destination: "/about", permanent: true },
      {
        source: "/properties-right-side-bar.html",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/properties-list-right-side-bar.html",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/single-service.html",
        destination: "/services",
        permanent: true,
      },
      { source: "/contact-us.html", destination: "/contact", permanent: true },
      {
        source: "/properties-v2.html",
        destination: "/portfolio",
        permanent: true,
      },
    ];
  },

  ...(process.env.ANALYZE === "true" && {
    experimental: {
      bundleAnalyzer: { enabled: true },
    },
  }),
};

export default nextConfig;
