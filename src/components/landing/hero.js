// components/landing/Hero.js
'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import ScrollIndicator from '@/ui/common/scroll_indicatior';

export default function Hero() {
    const imageRef = useRef(null);
    const [showScroll, setShowScroll] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (!imageRef.current) return;
            
            const scrolled = window.scrollY;
            const rate = Math.min(scrolled / 500, 1);
            const translateY = Math.min(scrolled * 0.5, 200);
            
            imageRef.current.style.transform = `translateY(${translateY}px)`;
            imageRef.current.style.opacity = Math.max(1 - rate, 0.3);

            // 스크롤 인디케이터를 점진적으로 페이드 아웃
            if (scrolled > 50) {
                const scrollOpacity = Math.max(1 - ((scrolled - 50) / 50), 0);
                setShowScroll(scrollOpacity);
            } else {
                setShowScroll(1);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-[150vh] sm:min-h-screen bg-[var(--third)] bg-opacity-5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--third)] opacity-10" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-15" />

            <div className="container mx-auto px-6 mt-16 sm:mt-40 py-12 relative z-10">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-4 sm:gap-8 lg:gap-16">
                    {/* Left Content */}
                    <div className="max-w-xl lg:max-w-[45%] text-center lg:text-left space-y-8 mt-4 sm:mt-8 lg:mt-0">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[var(--black)]">
                            Experience Places Through
                            <span className="gradient-text block mt-3">
                                Short Videos!
                            </span>
                        </h1>

                        <p className="text-[var(--gray-800)] text-lg sm:text-xl mb-8 max-w-lg mx-auto lg:mx-0">
                            Map your favorite spot in one tap.
                            Discover the real vibe that photos and text can’t capture.                        </p>

                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                            <Link href="/getstartApple" className="w-full sm:w-auto">
                                <Image
                                    src="/app-store-badge.png"
                                    alt="Download on the App Store"
                                    width={120}
                                    height={40}
                                    className="w-full sm:w-[200px] hover:opacity-80 transition-opacity duration-300"
                                />
                            </Link>
                            <Link href="/getstartGoogle" className="w-full sm:w-auto">
                                <Image
                                    src="/google-play-badge.png"
                                    alt="Get it on Google Play"
                                    width={120}
                                    height={40}
                                    className="w-full sm:w-[200px] hover:opacity-80 transition-opacity duration-300"
                                />
                            </Link>
                        </div>

                        {/* Stats Section */}
                        <div className="text-[var(--gray-800)]">
                            <p className="font-medium mb-4 text-lg">Trusted by adventurous souls worldwide</p>
                            <div className="flex justify-center lg:justify-start gap-12">
                                <div className="flex flex-col items-center lg:items-start">
                                    <span className="text-2xl font-bold text-[var(--primary)] mb-1">100K+</span>
                                    <span className="text-sm">Active Users(Hope)</span>
                                </div>
                                <div className="flex flex-col items-center lg:items-start">
                                    <span className="text-2xl font-bold text-[var(--third)] mb-1">50K+</span>
                                    <span className="text-sm">Places Mapped(Hope)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="lg:block w-full sm:w-[90%] lg:w-[75%] -mt-6 sm:mt-0">
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
                                <ScrollIndicator show={showScroll} />
                            </div>
                        </div>

                        {/* Desktop/Tablet Version */}
                        <div className="hidden sm:block">
                            <div className="relative w-full flex justify-center">
                                <Image
                                    src="/preview-mockup_forPc.png"
                                    alt="Desktop App Preview"
                                    width={900}
                                    height={1100}
                                    className="w-[600px] md:w-[750px] lg:w-[900px] h-auto transition-transform duration-300 hover:scale-105"
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