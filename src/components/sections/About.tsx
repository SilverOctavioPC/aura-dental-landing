'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { siteContent } from '@/data/site-content';

export function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const images = siteContent.about.images;

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, [images.length, currentImageIndex, isPaused]);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-gray-50">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-teal-50/40 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        
        {/* Top Section: Text + Image Carousel */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-20">
          
          {/* Text Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-primary font-bold tracking-wide text-xs uppercase mb-4">
              {siteContent.about.sectionTitle}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              {siteContent.about.mainHeading}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
              {siteContent.about.description}
            </p>
          </motion.div>

          {/* Image Carousel */}
          <motion.div 
            className="flex-1 w-full max-w-lg lg:max-w-none"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/10 border-4 border-white group">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[currentImageIndex]}
                    alt={`Instalaciones Aura Dental ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation Arrows */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full border border-white/50 flex items-center justify-center text-white transition-all hover:scale-110 z-20"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft size={28} />
                </button>
                
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full border border-white/50 flex items-center justify-center text-white transition-all hover:scale-110 z-20"
                  aria-label="Siguiente imagen"
                >
                  <ChevronRight size={28} />
                </button>
              </div>
              
              {/* Carousel Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10 px-4 py-2 rounded-full bg-black/10 backdrop-blur-sm">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex ? 'w-8 bg-white' : 'w-2 bg-white/60 hover:bg-white/80'
                    }`}
                    aria-label={`Ir a imagen ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        
        </div>

        {/* Bento Grid Cards - Glassmorphism */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {siteContent.about.cards.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
               {/* Glass Background */}
              <div className="absolute inset-0 bg-white/60 backdrop-blur-lg border border-white/60 shadow-lg shadow-gray-200/50 group-hover:shadow-xl group-hover:shadow-blue-500/10 transition-all duration-300 z-0 rounded-3xl" />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 w-16 h-16 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-sm border border-blue-100 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <item.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
