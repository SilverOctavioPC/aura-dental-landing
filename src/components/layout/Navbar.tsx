'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, CalendarCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteContent } from '@/data/site-content';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#hero', label: 'Inicio' },
    { href: '#about', label: 'Nosotros' }, // Corrected anchor from #nosotros to #about based on previous context if any, but sticking to standardized IDs is good. Let's assume sections have standard IDs.
    { href: '#services', label: 'Servicios' },
    { href: '#team', label: 'Equipo' },
    { href: '#testimonials', label: 'Testimonios' },
    { href: '#contact', label: 'Contacto' },
  ];

  const whatsappLink = `https://api.whatsapp.com/send?phone=${siteContent.general.whatsappNumber}&text=${encodeURIComponent(siteContent.general.whatsappMessage)}`;

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm py-2' 
          : 'bg-transparent border-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
           <div className="text-2xl font-bold text-gray-800 flex items-center gap-1">
            <span className="text-primary group-hover:scale-110 transition-transform duration-300 inline-block origin-center">
              🦷
            </span>
            <span className="text-primary">{siteContent.general.brandName}</span> 
            <span className="font-light text-gray-600">{siteContent.general.brandNameHighlight}</span>
           </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link 
              key={link.label} 
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-gray-600 hover:text-primary' : 'text-gray-700 hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={whatsappLink}
            target="_blank"
            className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full font-semibold shadow-md hover:shadow-xl hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300 text-sm"
          >
            <CalendarCheck size={16} />
            Agenda tu cita
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
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
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col p-4 gap-2">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-600 font-medium py-3 px-4 hover:bg-blue-50 hover:text-primary rounded-xl transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-gray-100 my-2" />
              <Link
                href={whatsappLink}
                target="_blank"
                className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-3.5 rounded-xl font-semibold shadow-md active:scale-95 transition-all duration-200"
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
