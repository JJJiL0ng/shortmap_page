// app/layout.js
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/header'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Footer from '@/components/layout/footer'
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { useEffect } from 'react';

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

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Firebase 초기화는 클라이언트 사이드에서만 실행되어야 합니다
function FirebaseAnalytics() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const app = initializeApp(firebaseConfig);
      getAnalytics(app);
    }
  }, []);

  return null;
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script defer data-domain="shortsmap.xyz" src="https://plausible.io/js/script.hash.outbound-links.pageview-props.tagged-events.js"></script>
      </head>
      <body className={`${inter.className} `}>
        <FirebaseAnalytics />
        {/* <Header /> */}
        {children}
        <Analytics debug={true} />
        <SpeedInsights 
          debug={true}
          sampleRate={1}
        />
        {/* <Footer /> */}
      </body>
    </html>
  )
}