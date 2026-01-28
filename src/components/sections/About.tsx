'use client';

import { motion } from 'framer-motion';
import { siteContent } from '@/data/site-content';

export function About() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-2 block">{siteContent.about.sectionTitle}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {siteContent.about.mainHeading}
          </h2>
          <p className="text-lg text-gray-600">
            {siteContent.about.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {siteContent.about.cards.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="mb-6 bg-white p-4 rounded-full shadow-sm">
                <item.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
