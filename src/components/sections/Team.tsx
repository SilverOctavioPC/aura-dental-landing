'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { siteContent } from '@/data/site-content';

export function Team() {
  return (
    <section id="team" className="relative py-24 overflow-hidden bg-gray-50">
       {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] bg-teal-50/40 rounded-full blur-3xl" />
      </div>

       <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-primary font-bold tracking-wide text-xs uppercase mb-4">
              {siteContent.team.title}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight max-w-3xl mx-auto">
               Expertos dedicados a tu salud bucal
            </h2>
            <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto leading-relaxed">
              {siteContent.team.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {siteContent.team.members.map((doc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative bg-white/60 backdrop-blur-md rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 border border-white hover:border-blue-100/50 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="aspect-[4/5] relative overflow-hidden bg-gray-200">
                    <Image 
                      src={doc.image} 
                      alt={doc.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                    
                    {/* Floating Role Badge */}
                    <div className="absolute bottom-4 left-4 right-4">
                       <span className="inline-block px-4 py-1.5 text-xs font-bold text-primary bg-blue-50/90 backdrop-blur-md border border-blue-100 rounded-full tracking-wide">
                        {doc.role}
                      </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 text-center relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{doc.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">
                    {doc.bio}
                  </p>
                  
                  {/* Decorative faint glow behind text on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
       </div>
    </section>
  );
}
