// components/landing/Contact.js
import { Instagram, Mail, MessageCircle, Twitter } from 'lucide-react'


export default function Contact() {
  const contactMethods = [
    {
      icon: <Instagram className="w-6 h-6" />,
      platform: "Instagram",
      handle: "@shortsmap_official",
      link: "https://www.instagram.com/shortsmap_official/",
      description: "Follow our journey and daily updates"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      platform: "WhatsApp",
      handle: "ShortsMap community",
      link: "https://chat.whatsapp.com/FdHejSjFSUy3qBkLUX0gfq",
      description: "Available for quick chats and inquiries"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      platform: "Gmail",
      handle: "shortsmap.team@gmail.com",
      link: "mailto:shortsmap.team@gmail.com",
      description: "For partnerships and detailed discussions"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      platform: "X (Twitter)",
      handle: "@shortmap",
      link: "https://x.com/shortsmap?s=21&t=ce4PjMMbTShI46JEllgUTQ",
      description: "Connect with our global community"
    }
  ]

  return (
    <div className="py-24 bg-[var(--third)] bg-opacity-5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--third)] opacity-10" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-15" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[var(--black)]">
            Let&apos;s Stay
            <span className="gradient-text block mt-2">Connected</span>
          </h2>
          <p className="text-[var(--gray-800)] text-lg">
            Have questions or want to collaborate? We&apos;re just a message away. 
            Choose your preferred platform and let&apos;s create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl bg-white/80 hover:bg-white border border-[var(--gray-300)] hover:border-[var(--pink)] transition-all hover:-translate-y-1 group"
            >
              <div className="flex items-center mb-4 text-[var(--pink)]">
                {method.icon}
                <span className="ml-2 font-medium">{method.platform}</span>
              </div>
              <p className="text-[var(--gray-800)] font-semibold mb-2">
                {method.handle}
              </p>
              <p className="text-[var(--gray-800)] text-sm">
                {method.description}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[var(--gray-800)]">
            Response Time: Usually within 24 hours
            <span className="block mt-2 text-sm">
              Available in English, 한국어, 日本語
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}