'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { siteContent } from '@/data/site-content';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const items = siteContent.testimonials.items;

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [items.length, currentIndex, isPaused]);

  const paginate = (newDirection: number) => {
    setCurrentIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = items.length - 1;
      if (next >= items.length) next = 0;
      return next;
    });
  };

  return (
    <section id="testimonials" className="py-20 bg-blue-50/30 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
          >
            {siteContent.testimonials.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            {siteContent.testimonials.description}
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div 
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* Navigation Buttons */}
          <button 
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-500 hover:text-primary hover:scale-110 transition-all focus:outline-none"
            aria-label="Anterior testimonio"
          >
             <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-500 hover:text-primary hover:scale-110 transition-all focus:outline-none"
             aria-label="Siguiente testimonio"
          >
             <ChevronRight size={24} />
          </button>

          {/* Card Slider */}
          <div className="relative h-[300px] md:h-[250px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                  <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-blue-900/5 border border-blue-50 h-full flex flex-col items-center justify-center text-center mx-4 md:mx-0">
                    
                    <div className="absolute top-6 right-8 text-blue-50">
                       <Quote size={60} />
                    </div>

                    <div className="flex gap-1 mb-6 text-yellow-400">
                      {[...Array(items[currentIndex].rating)].map((_, i) => (
                        <Star key={i} size={20} fill="currentColor" />
                      ))}
                    </div>

                    <p className="text-gray-700 text-lg md:text-xl font-medium mb-6 italic relative z-10 max-w-2xl">
                      &quot;{items[currentIndex].text}&quot;
                    </p>

                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                          {items[currentIndex].name.charAt(0)}
                       </div>
                       <div className="text-left">
                          <div className="font-bold text-gray-900">{items[currentIndex].name}</div>
                          <div className="text-xs text-blue-500 font-semibold uppercase tracking-wide">Paciente Verificado</div>
                       </div>
                    </div>

                  </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir al testimonio ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
