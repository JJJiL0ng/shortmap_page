/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: [
                "default-src 'self'",
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' vitals.vercel-insights.com *.vercel-insights.com",
                "style-src 'self' 'unsafe-inline'",
                "img-src 'self' blob: data:",
                "font-src 'self'",
                "connect-src 'self' vitals.vercel-insights.com *.vercel-insights.com",
                "frame-src 'self'"
              ].join('; ')
            }
          ]
        }
      ]
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**'
        }
      ]
    }
  }
  
  export default nextConfig