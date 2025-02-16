'use client'
import React, { useEffect, useState } from 'react';
import { Users } from 'lucide-react';
import { track } from '@vercel/analytics';

export default function LoadingPage() {
  // 초기값을 0으로 설정
  const [queueCount, setQueueCount] = useState(0);

  // 컴포넌트가 마운트될 때 한 번만 랜덤 숫자 설정
  useEffect(() => {
    setQueueCount(Math.floor(Math.random() * (2000 - 1700 + 1)) + 1700);
  }, []);

  useEffect(() => {
    const startTime = Date.now();
    
    // 로딩 페이지 진입 추적
    track('404_Loading_Page_Enter');
    
    return () => {
      const duration = Math.floor((Date.now() - startTime) / 1000);
      track('404_Loading_Page_Exit', { 
        durationInSeconds: duration
      });
    };
  }, []);

  useEffect(() => {
    const decreaseQueue = () => {
      setQueueCount(prevCount => {
        // 87 이하면 더 이상 감소하지 않음
        if (prevCount <= 87) return 87;
        
        // 현재 숫자에 따라 감소량 조절
        const decrease = prevCount > 500 ? 
          Math.floor(Math.random() * 20) + 10 : // 500 초과: 10-29 감소
          Math.floor(Math.random() * 5) + 3;    // 500 이하: 3-7 감소
        
        return prevCount - decrease;
      });
    };

    // queueCount가 0이 아닐 때만 인터벌 시작
    if (queueCount > 0) {
      const interval = setInterval(decreaseQueue, 3000);
      return () => clearInterval(interval);
    }
  }, [queueCount]);

  // 초기 로딩 상태일 때는 숫자를 표시하지 않음
  const displayCount = queueCount === 0 ? '-' : queueCount.toLocaleString();

  return (
    <div className="py-12 md:py-24 bg-[var(--third)] bg-opacity-5 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-15 animate-pulse" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-md md:max-w-2xl mx-auto mb-12 md:mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(- -black)] animate-slideDown">
            High Traffic
            <span className="gradient-text block mt-3 animate-slideUp">
              Please Wait
            </span>
          </h2>
          
          <div className="relative mb-8 flex justify-center items-center">
            <div className="w-16 h-16 md:w-20 md:h-20 border-4 md:border-[6px] border-[var(--pink)] border-t-transparent rounded-full animate-[spin_2s_linear_infinite]"></div>
          </div>
          
          <p className="text-[var(--gray-800)] text-lg md:text-xl leading-relaxed mb-10 animate-fadeIn opacity-0 px-4" 
             style={{ animationDelay: '0.3s' }}>
            We&apos;re experiencing<br className="hidden sm:block" /> unprecedented traffic levels.<br />
            Our servers are processing<br className="hidden sm:block" /> requests as fast as possible!
          </p>
          
          <div className="p-6 md:p-8 rounded-xl bg-white/80 border border-[var(--gray-300)] mx-auto max-w-[320px] md:max-w-md
                          hover:shadow-lg transition-all duration-300 animate-fadeIn opacity-0" 
               style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center justify-center gap-3 mb-4 text-[var(--pink)]">
              <Users className="w-7 h-7 md:w-8 md:h-8" />
              <span className="font-medium text-lg md:text-xl animate-pulse">Current Queue</span>
            </div>
            <p className="text-[var(--gray-800)] font-semibold mb-3 text-2xl md:text-3xl animate-fadeIn opacity-0" 
               style={{ animationDelay: '0.9s' }}>
              {displayCount} users in line
            </p>
            <p className="text-[var(--gray-800)] text-base md:text-lg animate-fadeIn opacity-0" 
               style={{ animationDelay: '1.2s' }}>
              We&apos;re optimizing your experience
            </p>
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center animate-fadeIn opacity-0" 
             style={{ animationDelay: '1.5s' }}>
          <p className="text-[var(--gray-800)] text-base md:text-lg">
            Your spot in line is secured
            <span className="block mt-3 text-sm md:text-base text-[var(--gray-600)]">
              The page will automatically refresh<br className="sm:hidden" /> when it&apos;s your turn
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
