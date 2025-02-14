import { Instagram, Mail, MessageCircle, Twitter } from 'lucide-react'

export default function SorryPage() {
  const contactMethods = [
    {
      icon: <Instagram className="w-6 h-6" />,
      platform: "Instagram",
      handle: "@shortsmap_official",
      link: "https://www.instagram.com/shortsmap_official/",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      platform: "WhatsApp",
      handle: "ShortsMap community",
      link: "https://chat.whatsapp.com/FdHejSjFSUy3qBkLUX0gfq",
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      platform: "X (Twitter)",
      handle: "@shortmap",
      link: "https://x.com/shortsmap?s=21&t=ce4PjMMbTShI46JEllgUTQ",
    }
  ]

  return (
    <div className="min-h-screen py-12 flex items-center justify-center">
      <div className="card max-w-2xl mx-4">
        <h1 className="text-3xl font-bold mb-4 text-center">
          <span className="gradient-text">Coming Soon</span>
        </h1>
        
        <p className="text-center mb-6 text-[var(--gray-800)]">
          Thank you for your interest in our service. 
          We are currently in development to provide the best experience, 
          and we will be launching the app soon.
        </p>

        <p className="text-center mb-8 text-[var(--gray-800)]">
          If you have any feedback or inquiries about our service, 
          please feel free to contact us through the channels below.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/80 hover:bg-white border border-[var(--gray-300)] 
                hover:border-[var(--pink)] transition-all hover:-translate-y-1 text-center"
            >
              <div className="flex items-center justify-center mb-2 text-[var(--pink)]">
                {method.icon}
                <span className="ml-2 font-medium">{method.platform}</span>
              </div>
              <p className="text-[var(--gray-800)] text-sm font-semibold">
                {method.handle}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-6 text-center text-[var(--gray-600)] text-sm">
          Response Time: Within 1 hours
          <span className="block mt-1">
            Available in English, 中文, 日本語, 한국어
          </span>
        </div>
      </div>
    </div>
  )
}
