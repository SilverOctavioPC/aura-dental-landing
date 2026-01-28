'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { siteContent } from '@/data/site-content';

export function Team() {
  return (
    <section id="team" className="py-20 bg-white">
       <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{siteContent.team.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {siteContent.team.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {siteContent.team.members.map((doc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl overflow-hidden group shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 border-b-4 border-b-transparent hover:border-b-primary"
              >
                <div className="aspect-[4/5] relative overflow-hidden bg-gray-100">
                    <Image 
                      src={doc.image} 
                      alt={doc.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Gradient overlay for better text contrast if we wanted text over image, but here just for polish */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-bold text-primary bg-blue-50 rounded-full tracking-wide">
                    {doc.role}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{doc.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {doc.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
       </div>
    </section>
  );
}
