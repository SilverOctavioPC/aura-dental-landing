'use client';

import { motion } from 'framer-motion';
import { siteContent } from '@/data/site-content';

export function Services() {
  return (
    <section id="services" className="relative py-24 overflow-hidden bg-gray-50">
       {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[40%] left-[-10%] w-[600px] h-[600px] bg-purple-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
             <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-primary font-bold tracking-wide text-xs uppercase mb-4">
              Nuestros Tratamientos
            </span>
             <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
              {siteContent.services.title}
            </h2>
            <p className="text-gray-600 text-lg font-light leading-relaxed">
              {siteContent.services.description}
            </p>
          </div>
          <a href="#contact" className="group inline-flex items-center gap-2 text-primary font-bold hover:text-blue-700 transition-colors bg-white/50 hover:bg-white px-5 py-2.5 rounded-full backdrop-blur-sm shadow-sm hover:shadow-md border border-white/50">
            Ver todos los tratamientos 
            <span className="group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
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
              className={`group relative bg-white/60 backdrop-blur-md p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-blue-500/10 border border-white hover:border-blue-100/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden ${idx === siteContent.services.items.length - 1 ? 'md:col-span-2 lg:col-span-1 xl:col-span-1' : ''}`}
            >
              {/* Inner Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-white border border-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:rotate-3 group-hover:from-primary group-hover:to-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300">
                  <service.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
