'use client';

import { motion } from 'framer-motion';
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
                <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                    {/* Placeholder for real team images */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100">
                      Foto {doc.name}
                    </div>
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
