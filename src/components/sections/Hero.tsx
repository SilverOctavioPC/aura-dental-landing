'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Phone, Calendar, Smile } from 'lucide-react';
import { siteContent } from '@/data/site-content';

export function Hero() {
  return (
    <section id="hero" className="relative pt-28 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-transparent to-white"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-primary bg-blue-50 rounded-full"
            >
              🦷 Tu mejor sonrisa comienza aquí
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6 tracking-tight"
            >
              {siteContent.hero.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">{siteContent.hero.titleHighlight}</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 font-light max-w-lg mx-auto lg:mx-0"
            >
              {siteContent.hero.subtitle}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a 
                href={`tel:${siteContent.general.phoneDisplay.replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-3 bg-white border-2 border-gray-100 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-primary/20 hover:bg-gray-50 hover:text-primary hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <Phone size={20} />
                {siteContent.hero.ctaCall}
              </a>
              <a 
                href={`https://api.whatsapp.com/send?phone=${siteContent.general.whatsappNumber}&text=${encodeURIComponent(siteContent.general.whatsappMessage)}`}
                target="_blank"
                className="flex items-center justify-center gap-3 bg-primary text-white border-2 border-transparent px-8 py-4 rounded-full font-semibold shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <Calendar size={20} />
                {siteContent.hero.ctaWhatsapp}
              </a>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 w-full max-w-lg lg:max-w-xl relative lg:mt-0"
          >
            {/* Decorative blurs */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-blue-100/40 to-purple-100/40 rounded-full blur-[80px]" />
            
             <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/50 ring-1 ring-black/5">
                <Image 
                  src={siteContent.hero.image}
                  alt="Tratamiento dental profesional en Oaxaca"
                  fill
                  className="object-cover"
                  priority
                />
            </div>

            {/* Floating Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -left-4 md:-left-12 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/60 flex items-center gap-4 max-w-xs"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center border border-blue-100 shadow-sm">
                <Smile size={24} className="text-primary" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-gray-900 text-lg">1000+</span>
                </div>
                <span className="text-xs font-medium text-gray-500">Pacientes Felices</span>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
