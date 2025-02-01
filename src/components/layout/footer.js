// components/layout/Footer.js
import Link from 'next/link'
import { Instagram, Mail, MessageCircle, Globe } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About', href: '/about' },
      { name: 'Creators', href: '/creators' },
      { name: 'Contact', href: '/contact' }
    ],
    legal: [
      { name: 'Terms', href: '/terms' },
      { name: 'Privacy', href: '/privacy' },
      { name: 'Guidelines', href: '/guidelines' }
    ],
    social: [
      { 
        name: 'Instagram',
        icon: <Instagram className="w-5 h-5" />,
        href: 'https://instagram.com/shortmap.global' 
      },
      { 
        name: 'WhatsApp',
        icon: <MessageCircle className="w-5 h-5" />,
        href: 'https://wa.me/15550123456' 
      },
      { 
        name: 'Email',
        icon: <Mail className="w-5 h-5" />,
        href: 'mailto:hello@shortmap.com' 
      }
    ]
  }

  return (
    <footer className="bg-black border-t border-gray-800 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <Globe className="w-6 h-6 text-primary" />
            <span className="text-white font-semibold">ShortMap</span>
          </div>

          <div className="grid grid-cols-2 gap-8 md:flex md:space-x-12">
            <div>
              <h3 className="text-white font-semibold mb-3">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-primary text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-3">Legal</h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-primary text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            {footerLinks.social.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © {currentYear} ShortsMap Inc. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-1">
              Made with ❤️ in Seoul
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
