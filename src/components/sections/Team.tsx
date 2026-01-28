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
                className="bg-gray-50 rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="aspect-[4/5] relative overflow-hidden bg-gray-100">
                    {/* Image with fallback capability could be complex, for now assuming images exist or using standard Next Image behavior */}
                    <Image 
                      src={doc.image} 
                      alt={doc.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <div className="p-6">
                  <span className="text-primary text-sm font-bold uppercase tracking-wide">{doc.role}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3">{doc.name}</h3>
                  <p className="text-gray-600 text-sm">
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
