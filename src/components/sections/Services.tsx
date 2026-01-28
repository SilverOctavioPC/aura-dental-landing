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
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className={`bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all group ${idx === siteContent.services.items.length - 1 ? 'md:col-span-2 lg:col-span-1 xl:col-span-2' : ''}`}
            >
              <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
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
