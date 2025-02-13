// components/landing/MainFeature.js
import { PlayCircle, MapPin, Share2 } from 'lucide-react'

export default function MainFeature() {
  const features = [
    {
      icon: <PlayCircle className="w-10 h-10 text-[var(--pink)]" />,
      title: "Quick Experience Preview",
      description: "Get an authentic feel for restaurants, cafes, and unique spaces through short, engaging videos before you visit."
    },
    {
      icon: <MapPin className="w-10 h-10 text-[var(--pink)]" />,
      title: "Instant Map Save",
      description: "Save your favorite spots directly to your personalized map with one click. Never lose track of places you want to visit."
    },
    {
      icon: <Share2 className="w-10 h-10 text-[var(--pink)]" />,
      title: "Share Your Story",
      description: "Become a creator and share your experiences through engaging review videos. Help others discover hidden gems in your area."
    }
  ]

  return (
    <div className="py-32 bg-[var(--third)] bg-opacity-5 relative overflow-hidden" id="features">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--third)] opacity-10" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-15" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <span className="text-[var(--peach)] font-semibold mb-4 block">FEATURES</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-[var(--black)]">
            Experience Places
            <span className="gradient-text block mt-2">Like Never Before</span>
          </h2>
          <p className="text-[var(--gray-800)] text-lg max-w-2xl mx-auto">
            ShortMap combines the power of short-form videos with location intelligence
            to transform how you discover and share local experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-xl bg-white/80 hover:bg-white border border-[var(--gray-300)] hover:border-[var(--pink)] transition-all hover:-translate-y-1"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[var(--pink)]">
                {feature.title}
              </h3>
              <p className="text-[var(--gray-800)] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}