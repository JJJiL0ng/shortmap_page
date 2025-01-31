// app/layout.js
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ShortMap - Experience Places Through Short Videos',
  description: 'Discover and share local experiences through short-form videos. Save your favorite spots and become a creator in our location-based video platform.',
  openGraph: {
    title: 'ShortMap - Experience Places Through Short Videos',
    description: 'Discover and share local experiences through short-form videos',
    type: 'website',
    url: 'https://shortmap.com',
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
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}