/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  /**
   * The blog is an Astro site compiled into `public/blog` (see apps/blog).
   * Next serves the built files statically, but it does not resolve directory
   * indexes on its own, so `/blog` and `/blog/<slug>` are mapped to the
   * generated `index.html` files here.
   *
   * These run in the `afterFiles` phase, so real assets that exist on disk
   * (`/blog/_astro/*.css`, `/blog/rss.xml`, ...) are served before any rewrite
   * is considered.
   */
  async rewrites() {
    return [
      { source: '/blog', destination: '/blog/index.html' },
      { source: '/blog/:path*', destination: '/blog/:path*/index.html' },
    ];
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          {
            key: 'Permissions-Policy',
            value:
              'camera=(), microphone=(), geolocation=(), browsing-topics=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
