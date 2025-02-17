// src/components/newLanding/FirebaseAnalyticsWrapper.js
'use client'

import { initializeApp } from 'firebase/app';
import { useEffect } from 'react';

export default function FirebaseAnalyticsWrapper({ children }) {
  const firebaseConfig = {
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        initializeApp(firebaseConfig);
      } catch (error) {
        console.warn('Firebase 초기화 실패:', error.message);
      }
    }
  }, []);

  return children;
}