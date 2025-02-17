// src/components/newLanding/FirebaseAnalyticsWrapper.js
'use client'

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { useEffect } from 'react';

export default function FirebaseAnalyticsWrapper({ children }) {
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const app = initializeApp(firebaseConfig);
        getAnalytics(app);
      } catch (error) {
        console.warn('Firebase Analytics 초기화 실패:', error.message);
        // 프로덕션 환경에서는 에러 로깅 서비스를 사용하는 것을 권장합니다
      }
    }
  }, []);

  return children;
}