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
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' vitals.vercel-insights.com *.vercel-insights.com *.vercel-scripts.com va.vercel-scripts.com *.shortsmap.xyz plausible.io *.googletagmanager.com apis.google.com *.googleapis.com",
                "style-src 'self' 'unsafe-inline'",
                "img-src 'self' blob: data: https:",
                "font-src 'self' https: data:",
                "connect-src 'self' vitals.vercel-insights.com *.vercel-insights.com *.vercel-scripts.com va.vercel-scripts.com *.shortsmap.xyz plausible.io *.googleapis.com *.google-analytics.com *.firebase.com *.firebaseio.com *.firebaseapp.com firebaseinstallations.googleapis.com identitytoolkit.googleapis.com securetoken.googleapis.com",
                "frame-src 'self' apis.google.com accounts.google.com *.firebaseapp.com"
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