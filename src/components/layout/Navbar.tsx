'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, CalendarCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteContent } from '@/data/site-content';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '#hero', label: 'Inicio' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#services', label: 'Servicios' },
    { href: '#team', label: 'Equipo' },
    { href: '#contact', label: 'Contacto' },
  ];

  const whatsappLink = `https://api.whatsapp.com/send?phone=${siteContent.general.whatsappNumber}&text=${encodeURIComponent(siteContent.general.whatsappMessage)}`;

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
           {/* Placeholder for Logo Image - In real app use Next Image */}
           <div className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <span className="text-primary">{siteContent.general.brandName}</span> {siteContent.general.brandNameHighlight}
           </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link 
              key={link.label} 
              href={link.href}
              className="text-gray-600 hover:text-primary font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={whatsappLink}
            target="_blank"
            className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full font-semibold shadow-md hover:shadow-xl hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <CalendarCheck size={18} />
            Agenda tu cita
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-600 font-medium py-2 px-4 hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={whatsappLink}
                target="_blank"
                className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-xl font-semibold shadow-md active:scale-95 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                <CalendarCheck size={18} />
                Agenda tu cita
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
