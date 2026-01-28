import Link from 'next/link';
import { siteContent } from '@/data/site-content';
import { Facebook, Instagram } from 'lucide-react';

const TikTok = ({ size = 24 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export function Footer() {
  const socialConfig = [
    { icon: <Facebook size={20} />, href: siteContent.general.socials.facebook, label: "Facebook" },
    { icon: <Instagram size={20} />, href: siteContent.general.socials.instagram, label: "Instagram" },
    { icon: <TikTok size={20} />, href: siteContent.general.socials.tiktok, label: "TikTok" }, 
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-6 pb-4 text-gray-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="md:flex md:items-start md:justify-between">
          
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-x-2 transition-opacity hover:opacity-80"
            aria-label={siteContent.general.brandName}
          >
            {/* Logo placeholder - using text for now as per previous design */}
             <div className="text-2xl font-bold text-white">
              <span className="text-primary">{siteContent.general.brandName}</span> {siteContent.general.brandNameHighlight}
            </div>
          </Link>

          {/* Social Icons */}
          <ul className="flex list-none mt-4 md:mt-0 space-x-3">
            {socialConfig.map((link, i) => (
              <li key={i}>
                <a 
                  href={link.href} 
                  target="_blank" 
                  aria-label={link.label}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 border border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors shadow-sm"
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-gray-800 mt-4 pt-4 md:mt-6 md:pt-6 lg:grid lg:grid-cols-10">
          
          {/* Main Navigation */}
          <nav className="lg:mt-0 lg:col-[4/11]">
            <ul className="list-none flex flex-wrap -my-1 -mx-2 lg:justify-end">
              <li className="my-1 mx-2 shrink-0">
                <a href="#hero" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Inicio</a>
              </li>
              <li className="my-1 mx-2 shrink-0">
                <a href="#about" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Nosotros</a>
              </li>
              <li className="my-1 mx-2 shrink-0">
                <a href="#services" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Servicios</a>
              </li>
              <li className="my-1 mx-2 shrink-0">
                <a href="#contact" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Contacto</a>
              </li>
            </ul>
          </nav>

          {/* Copyright */}
          <div className="mt-6 text-sm leading-6 text-gray-500 whitespace-nowrap lg:mt-0 lg:row-[1/3] lg:col-[1/4]">
            <div>&copy; {new Date().getFullYear()} {siteContent.general.brandName} {siteContent.general.brandNameHighlight}.</div>
            <div>Todos los derechos reservados.</div>
          </div>

        </div>
      </div>
    </footer>
  );
}
