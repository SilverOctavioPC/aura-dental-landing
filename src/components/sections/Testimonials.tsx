'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { siteContent } from '@/data/site-content';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-blue-50/50">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {siteContent.testimonials.title}
            </h2>
            <p className="text-lg text-gray-600">
              {siteContent.testimonials.description}
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteContent.testimonials.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-blue-100">
                <Quote size={40} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 text-yellow-400">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 mb-6 italic relative z-10">
                &quot;{item.text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{item.name}</div>
                  <div className="text-xs text-gray-500">Paciente verificado</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
