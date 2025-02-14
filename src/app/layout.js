// app/layout.js
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/header'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Footer from '@/components/layout/footer'

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
        alt: 'ShortMap Preview'
      }
    ]
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Header />
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  )
}