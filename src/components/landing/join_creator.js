// components/landing/JoinCreator.js
import { Instagram, Mail, MessageCircle, Star, Twitter } from 'lucide-react'

export default function JoinCreator() {
  const contactMethods = [
    {
      icon: <Instagram className="w-6 h-6" />,
      platform: "Instagram",
      handle: "@shortmap.app",
      link: "https://www.instagram.com/shortsmap.app",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      platform: "WhatsApp",
      handle: "shortsMap community",
      link: "https://chat.whatsapp.com/FdHejSjFSUy3qBkLUX0gfq",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      platform: "Gmail",
      handle: "shortsmap.team@gmail.com",
      link: "mailto:shortsmap.team@gmail.com",
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      platform: "X (Twitter)",
      handle: "@shortmap_official",
      link: "https://x.com/shortsmap?s=21&t=ce4PjMMbTShI46JEllgUTQ",
    }
  ]

  const benefits = [
    {
      icon: <Star className="w-6 h-6 text-primary" />,
      title: "Early Creator Benefits",
      description: "Get exclusive perks, premium features, and revenue sharing opportunities as an early creator."
    },
    {
      icon: <Star className="w-6 h-6 text-primary" />,
      title: "Shape the Future",
      description: "Be part of the next generation Yelp, where short videos meet location intelligence."
    },
    {
      icon: <Star className="w-6 h-6 text-primary" />,
      title: "Global Reach",
      description: "Share your local insights with a global audience and build your personal brand."
    }
  ]

  return (
    <div className="py-24 bg-[var(--third)] bg-opacity-5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--third)] opacity-10" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-15" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[var(--peach)] font-semibold mb-4 block">JOIN THE REVOLUTION</span>
          <h2 className="text-4xl font-bold mb-4 text-[var(--black)]">
            Become a Pioneer of the
            <span className="gradient-text block mt-2">Next-Gen Digital Map</span>
          </h2>
          <p className="text-[var(--gray-800)] text-lg mb-8">
            ShortMap is redefining local discovery for the video-first generation.
            We&apos;re not just another Yelp - we&apos;re the future of experiential mapping.
          </p>
          <div className="inline-block border-2 border-[var(--pink)] text-[var(--pink)] hover:bg-[var(--pink)] hover:text-white px-6 py-3 rounded-full transition-all duration-300">
            Early Creator Applications Now Open
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-6 rounded-xl bg-white/80 hover:bg-white border border-[var(--gray-300)] transition-all hover:-translate-y-1">
              <div className="mb-4 text-[var(--peach)]">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-[var(--pink)]">{benefit.title}</h3>
              <p className="text-[var(--gray-800)]">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6 text-[var(--black)]">Ready to Join?</h3>
          <p className="text-[var(--gray-800)] mb-8">
            Contact us through any of the following platforms. 
            Mention &quot;EARLY CREATOR&quot; to fast-track your application.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/80 hover:bg-white rounded-xl border border-[var(--gray-300)] hover:border-[var(--pink)] transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-center text-[var(--pink)] mb-2">
                  {method.icon}
                </div>
                <p className="text-sm text-[var(--gray-800)]">{method.handle}</p>
              </a>
            ))}
          </div>

          <div className="mt-12">
            <p className="text-sm text-[var(--gray-800)]">
              Limited spots available for early creators.
              <span className="block mt-1">
                First 100 verified creators receive exclusive benefits package.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}