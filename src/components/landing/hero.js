// components/landing/Hero.js
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
        <div className="min-h-screen bg-black relative overflow-hidden pt-10">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

            <div className="container mx-auto px-6 py-20 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left Content */}
                    <div className="max-w-2xl lg:max-w-[45%] text-center lg:text-left lg:pl-8">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-0">
                            Experience Places Through
                            <span className="gradient-text block mt-2">Short Videos</span>
                        </h1>

                        <p className="text-gray-300 text-lg md:text-xl mb-8">
                            Discover authentic local experiences through immersive short-form videos.
                            Your next favorite spot is just a short video away.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Link href="/contact">
                                <button className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
                                    Contact to us
                                </button>
                            </Link>
                            <Link href="/join_creator">
                                <button className="px-8 py-4 border border-gray-600 text-white rounded-lg hover:border-primary transition-colors">
                                    Become Creator
                                </button>
                            </Link>

                        </div>

                        {/* Stats Section */}
                        <div className="text-gray-400">
                            <p className="font-medium mb-4">Trusted by adventurous souls worldwide(hope)</p>
                            <div className="flex flex-wrap gap-8">
                                <div className="flex items-center gap-2">
                                    <span className="text-xl font-bold text-white">100K+</span>
                                    <span>Active Users(hope)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xl font-bold text-white">50K+</span>
                                    <span>Places Mapped(hope)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image with Animation */}
                    <div className="hidden lg:block w-[45%] animate-float">
                        <div className="relative w-full aspect-[4/5]">
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