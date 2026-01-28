'use client';

import { motion } from 'framer-motion';
import { siteContent } from '@/data/site-content';

export function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {siteContent.services.title}
            </h2>
            <p className="text-gray-600 text-lg">
              {siteContent.services.description}
            </p>
          </div>
          <a href="#contact" className="text-primary font-semibold hover:text-green-700 hover:underline underline-offset-4">
            Ver todos los tratamientos &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {siteContent.services.items.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`group bg-white p-8 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-2 border border-transparent hover:border-blue-100 transition-all duration-300 ${idx === siteContent.services.items.length - 1 ? 'md:col-span-2 lg:col-span-1 xl:col-span-1' : ''}`}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-white border border-blue-100 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:from-primary group-hover:to-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
