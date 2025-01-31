// components/landing/Hero.js
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
        <div className="min-h-screen bg-black relative overflow-hidden flex items-center">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

            <div className="container mx-auto px-6 py-12 relative z-10">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-16">
                    {/* Left Content */}
                    <div className="max-w-xl lg:max-w-[45%] text-center lg:text-left space-y-8">
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
                                    <span className="text-sm">Active Users</span>
                                </div>
                                <div className="flex flex-col items-center lg:items-start">
                                    <span className="text-2xl font-bold text-white mb-1">50K+</span>
                                    <span className="text-sm">Places Mapped</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="lg:block w-full sm:w-[80%] lg:w-[55%]">
                        {/* Mobile Version */}
                        <div className="block sm:hidden w-full">
                            <div className="relative w-full h-[500px] mx-auto">
                                <Image
                                    src="/mockup_mobile.png"
                                    alt="Mobile App Preview"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Desktop/Tablet Version */}
                        <div className="hidden sm:flex items-center justify-center gap-6 lg:gap-8">
                            {/* First Mockup */}
                            <div className="relative w-full max-w-[160px] sm:max-w-[180px] lg:max-w-[200px] shadow-lg rounded-3xl overflow-hidden">
                                <Image
                                    src="/preview-mockup1.png"
                                    alt="App Preview 1"
                                    width={200}
                                    height={400}
                                    className="object-contain w-full h-auto"
                                    priority
                                />
                            </div>
                            
                            {/* Second Mockup */}
                            <div className="relative w-full max-w-[160px] sm:max-w-[180px] lg:max-w-[200px] shadow-lg rounded-3xl overflow-hidden">
                                <Image
                                    src="/preview-mockup2.png"
                                    alt="App Preview 2"
                                    width={200}
                                    height={400}
                                    className="object-contain w-full h-auto"
                                />
                            </div>
                            
                            {/* Third Mockup */}
                            <div className="relative w-full max-w-[160px] sm:max-w-[180px] lg:max-w-[200px] shadow-lg rounded-3xl overflow-hidden">
                                <Image
                                    src="/preview-mockup3.png"
                                    alt="App Preview 3"
                                    width={200}
                                    height={400}
                                    className="object-contain w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}