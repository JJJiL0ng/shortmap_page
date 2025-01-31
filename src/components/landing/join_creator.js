// components/landing/JoinCreator.js
import { Instagram, Mail, MessageCircle, Star } from 'lucide-react'

export default function JoinCreator() {
  const contactMethods = [
    {
      icon: <Instagram className="w-6 h-6" />,
      platform: "Instagram",
      handle: "@shortmap.global",
      link: "https://instagram.com/shortmap.global",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      platform: "WhatsApp",
      handle: "+1 (555) 0123-4567",
      link: "https://wa.me/15550123456",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      platform: "Gmail",
      handle: "hello@shortmap.com",
      link: "mailto:hello@shortmap.com",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      platform: "LINE",
      handle: "@shortmap_official",
      link: "https://line.me/ti/p/@shortmap_official",
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
    <div className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold mb-4 block">JOIN THE REVOLUTION</span>
          <h2 className="text-4xl font-bold mb-4">
            Become a Pioneer of the
            <span className="gradient-text block mt-2">Next-Gen Digital Map</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            ShortMap is redefining local discovery for the video-first generation.
            We&apos;re not just another Yelp - we&apos;re the future of experiential mapping.
          </p>
          <div className="inline-block border border-primary text-primary px-6 py-3 rounded-lg">
            Early Creator Applications Now Open
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-black border border-gray-800"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Ready to Join?</h3>
          <p className="text-gray-400 mb-8">
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
                className="p-4 rounded-lg bg-black border border-gray-800 hover:border-primary transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-center text-primary mb-2">
                  {method.icon}
                </div>
                <p className="text-sm text-gray-400">{method.handle}</p>
              </a>
            ))}
          </div>

          <div className="mt-12">
            <p className="text-sm text-gray-400">
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