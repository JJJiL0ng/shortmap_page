// components/landing/Hero.js
'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    const imageRef = useRef(null);
    const [showScroll, setShowScroll] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (!imageRef.current) return;
            
            const scrolled = window.scrollY;
            const rate = Math.min(scrolled / 500, 1); // 500px 스크롤까지 애니메이션 진행
            const translateY = Math.min(scrolled * 0.5, 200); // 최대 200px까지 이동
            
            imageRef.current.style.transform = `translateY(${translateY}px)`;
            imageRef.current.style.opacity = Math.max(1 - rate, 0.3); // 최소 0.3 불투명도 유지

            // Hide scroll indicator after 100px of scroll
            if (scrolled > 100) {
                setShowScroll(false);
            } else {
                setShowScroll(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-[150vh] sm:min-h-screen bg-black relative overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

            <div className="container mx-auto px-6 mt-16 sm:mt-40 py-12 relative z-10">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-4 sm:gap-8 lg:gap-16">
                    {/* Left Content */}
                    <div className="max-w-xl lg:max-w-[45%] text-center lg:text-left space-y-8 mt-4 sm:mt-8 lg:mt-0">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                            Experience Places Through
                            <span className="gradient-text block mt-3">Short Videos</span>
                        </h1>

                        <p className="text-gray-300 text-lg sm:text-xl mb-8 max-w-lg mx-auto lg:mx-0">
                            Discover authentic local experiences through immersive short-form videos.
                            Your next favorite spot is just a short video away.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-10">
                            <Link href="/contact" className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#DC143C] to-[#FF69B4] text-white rounded-xl font-medium hover:opacity-90 transition-all hover:scale-105">
                                    Contact Us
                                </button>
                            </Link>
                            <Link href="/join_creator" className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto px-8 py-4 border-2 border-gray-600 text-white rounded-xl hover:border-[#DC143C] transition-all hover:scale-105">
                                    Become Creator
                                </button>
                            </Link>
                        </div>

                        {/* Stats Section */}
                        <div className="text-gray-400">
                            <p className="font-medium mb-4 text-lg">Trusted by adventurous souls worldwide</p>
                            <div className="flex justify-center lg:justify-start gap-12">
                                <div className="flex flex-col items-center lg:items-start">
                                    <span className="text-2xl font-bold text-white mb-1">100K+</span>
                                    <span className="text-sm">Active Users(Hope)</span>
                                </div>
                                <div className="flex flex-col items-center lg:items-start">
                                    <span className="text-2xl font-bold text-white mb-1">50K+</span>
                                    <span className="text-sm">Places Mapped(Hope)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="lg:block w-full sm:w-[90%] lg:w-[65%] -mt-6 sm:mt-0">
                        {/* Mobile Version - Apple Style */}
                        <div className="block sm:hidden w-full mt-8">
                            <div className="sticky top-0 pt-12 h-screen overflow-hidden">
                                <div 
                                    ref={imageRef} 
                                    className="relative w-full h-[550px] transition-transform duration-100 ease-out"
                                >
                                    <Image
                                        src="/mockup_mobile_appleStyle.png"
                                        alt="Mobile App Preview"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                                {/* Scroll Down Indicator */}
                                <div className={`absolute bottom-28 left-1/2 transform -translate-x-1/2 text-center transition-opacity duration-300 ${showScroll ? 'opacity-100' : 'opacity-0'}`}>
                                    <div className="animate-bounce mb-2">
                                        <svg 
                                            className="w-6 h-6 text-white mx-auto"
                                            fill="none" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="2" 
                                            viewBox="0 0 24 24" 
                                            stroke="currentColor"
                                        >
                                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                        </svg>
                                    </div>
                                    <span className="text-sm text-gray-300">Scroll to explore</span>
                                </div>
                            </div>
                        </div>

                        {/* Desktop/Tablet Version */}
                        <div className="hidden sm:block">
                            <div className="relative w-full flex justify-center">
                                <Image
                                    src="/preview-mockup_forPc.png"
                                    alt="Desktop App Preview"
                                    width={800}
                                    height={1000}
                                    className="w-[500px] md:w-[650px] lg:w-[800px] h-auto"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Bottom Spacing */}
            <div className="h-20 sm:h-32 lg:h-40"></div>
        </div>
    )
}