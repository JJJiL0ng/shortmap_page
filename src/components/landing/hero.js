// components/landing/Hero.js
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
        <div className="min-h-[90vh] bg-black relative overflow-hidden pt-16 sm:pt-8">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

            <div className="container mx-auto px-6 sm:px-6 py-16 sm:py-16 relative z-10">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-12">
                    {/* Left Content */}
                    <div className="max-w-xl lg:max-w-[50%] text-center lg:text-left space-y-8 sm:space-y-6">
                        <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                            Experience Places Through
                            <span className="gradient-text block mt-2 sm:mt-1">Short Videos</span>
                        </h1>

                        <p className="text-gray-300 text-lg sm:text-lg mb-6 px-4 sm:px-0">
                            Discover authentic local experiences through immersive short-form videos.
                            Your next favorite spot is just a short video away.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-3 mb-8 px-4 sm:px-0">
                            <Link href="/contact" className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto px-6 py-4 sm:py-3 bg-gradient-to-r from-[#DC143C] to-[#FF69B4] text-white rounded-lg font-medium hover:opacity-90 transition-colors">
                                    Contact Us
                                </button>
                            </Link>
                            <Link href="/join_creator" className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto px-6 py-4 sm:py-3 border border-gray-600 text-white rounded-lg hover:border-[#DC143C] transition-colors">
                                    Become Creator
                                </button>
                            </Link>
                        </div>

                        {/* Stats Section */}
                        <div className="text-gray-400 text-base sm:text-sm">
                            <p className="font-medium mb-4 sm:mb-3">Trusted by adventurous souls worldwide</p>
                            <div className="flex justify-center lg:justify-start flex-wrap gap-8 sm:gap-6">
                                <div className="flex items-center gap-2">
                                    <span className="text-xl sm:text-lg font-bold text-white">100K+</span>
                                    <span>Active Users</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xl sm:text-lg font-bold text-white">50K+</span>
                                    <span>Places Mapped</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image with Animation */}
                    <div className="lg:block w-full sm:w-[80%] lg:w-[40%] animate-float lg:mt-0">
                        <div className="relative w-full aspect-[4/5] lg:aspect-[3/4]">
                            <Image
                                src="/preview-mockup.png"
                                alt="App Preview"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}