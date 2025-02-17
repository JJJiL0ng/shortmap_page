// src/app/layout.js
import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import FirebaseAnalyticsWrapper from '@/components/newLanding/FirebaseAnalyticsWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://shortmap.xyz'),
  title: 'ShortMap - Experience Places Through Short Videos',
  description: 'Discover and share local experiences through short-form videos. Save your favorite spots and become a creator in our location-based video platform.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
  },
  openGraph: {
    title: 'ShortMap - Experience Places Through Short Videos',
    description: 'Discover and share local experiences through short-form videos',
    type: 'website',
    url: 'https://shortmap.xyz',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ShorstMap Preview'
      }
    ]
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script defer data-domain="shortsmap.xyz" src="https://plausible.io/js/script.hash.outbound-links.pageview-props.tagged-events.js"></script>
      </head>
      <body className={`${inter.className}`}>
        <FirebaseAnalyticsWrapper>
          {children}
          <Analytics debug={true} />
          <SpeedInsights 
            debug={true}
            sampleRate={1}
          />
        </FirebaseAnalyticsWrapper>
      </body>
    </html>
  )
}