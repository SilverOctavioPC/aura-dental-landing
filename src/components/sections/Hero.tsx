'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Phone, Calendar } from 'lucide-react';
import { siteContent } from '@/data/site-content';

export function Hero() {
  return (
    <section id="hero" className="pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              {siteContent.hero.title} <span className="text-primary">{siteContent.hero.titleHighlight}</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 font-light"
            >
              {siteContent.hero.subtitle}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a 
                href={`tel:${siteContent.general.phoneDisplay.replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-3 bg-white border-2 border-primary text-primary hover:bg-primary/5 px-8 py-3.5 rounded-full font-semibold transition-all"
              >
                <Phone size={20} />
                {siteContent.hero.ctaCall}
              </a>
              <a 
                href={`https://api.whatsapp.com/send?phone=${siteContent.general.whatsappNumber}&text=${encodeURIComponent(siteContent.general.whatsappMessage)}`}
                target="_blank"
                className="flex items-center justify-center gap-3 bg-primary text-white border-2 border-transparent px-8 py-3.5 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-primary/30"
              >
                <Calendar size={20} />
                {siteContent.hero.ctaWhatsapp}
              </a>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex-1 w-full max-w-lg lg:max-w-none relative"
          >
            {/* Abstract Background Shapes */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-3xl opacity-60" />
            
            {/* Placeholder for SVG content from original site */}
             <div className="relative aspect-square bg-gray-100 rounded-3xl overflow-hidden shadow-2xl skew-y-1">
                <Image 
                  src={siteContent.hero.image}
                  alt="Tratamiento dental profesional en Oaxaca"
                  fill
                  className="object-cover"
                  priority
                />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
