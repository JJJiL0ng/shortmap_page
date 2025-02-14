'use client';

import { useState, useEffect } from 'react';
import LoginModal from './loginModal';

export default function MainPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* 배경 비디오 컨테이너 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-contain bg-black"
        >
          <source src="/backgroundVideo.webm" type="video/webm" />
          <source src="/backgroundVideo.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 모달 컨테이너 */}
      <div className="relative z-20">
        <LoginModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </div>

      {/* 메인 콘텐츠 */}
      <div className="relative z-0 h-full">
        {/* 여기에 다른 메인 페이지 콘텐츠를 추가할 수 있습니다 */}
      </div>
    </div>
  );
}