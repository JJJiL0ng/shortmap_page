// components/landing/Contact.js
import { Instagram, Mail, MessageCircle, Twitter } from 'lucide-react'

export default function Contact() {
  const contactMethods = [
    {
      icon: <Instagram className="w-6 h-6" />,
      platform: "Instagram",
      handle: "@shortmap.app",
      link: "https://www.instagram.com/shortsmap.app",
      description: "Follow our journey and daily updates"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      platform: "WhatsApp",
      handle: "+82 10-5475-6097",
      link: "https://wa.me/821054756097",
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
    <div className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Let&apos;s Stay
            <span className="gradient-text"> Connected</span>
          </h2>
          <p className="text-gray-400 text-lg">
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
              className="p-6 rounded-xl bg-gray-800 border border-gray-700 hover:border-primary transition-all hover:-translate-y-1 group"
            >
              <div className="flex items-center mb-4 text-primary">
                {method.icon}
                <span className="ml-2 font-medium">{method.platform}</span>
              </div>
              <p className="text-white font-semibold mb-2">
                {method.handle}
              </p>
              <p className="text-gray-400 text-sm">
                {method.description}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400">
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