// components/landing/Hero.js
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
        <div className="min-h-[90vh] bg-black relative overflow-hidden pt-8">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

            <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                    {/* Left Content */}
                    <div className="max-w-xl lg:max-w-[50%] text-center lg:text-left">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                            Experience Places Through
                            <span className="gradient-text block mt-1">Short Videos</span>
                        </h1>

                        <p className="text-gray-300 text-base sm:text-lg mb-6">
                            Discover authentic local experiences through immersive short-form videos.
                            Your next favorite spot is just a short video away.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 mb-8">
                            <Link href="/contact">
                                <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
                                    Contact to us
                                </button>
                            </Link>
                            <Link href="/join_creator">
                                <button className="px-6 py-3 border border-gray-600 text-white rounded-lg hover:border-primary transition-colors">
                                    Become Creator
                                </button>
                            </Link>
                        </div>

                        {/* Stats Section */}
                        <div className="text-gray-400 text-sm">
                            <p className="font-medium mb-3">Trusted by adventurous souls worldwide</p>
                            <div className="flex flex-wrap gap-6">
                                <div className="flex items-center gap-2">
                                    <span className="text-lg font-bold text-white">100K+</span>
                                    <span>Active Users</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-lg font-bold text-white">50K+</span>
                                    <span>Places Mapped</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image with Animation */}
                    <div className="hidden lg:block w-[40%] animate-float">
                        <div className="relative w-full aspect-[3/4]">
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