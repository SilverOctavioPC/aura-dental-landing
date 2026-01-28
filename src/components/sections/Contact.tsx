'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import { siteContent } from '@/data/site-content';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-bold tracking-wide uppercase mb-2 block">{siteContent.contact.sectionTitle}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {siteContent.contact.heading}
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary shrink-0">
                  <MapPin />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Dirección</h3>
                  <p className="text-gray-600">
                    <a 
                      href={siteContent.general.address.googleMapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {siteContent.general.address.line1}<br />
                      {siteContent.general.address.line2}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary shrink-0">
                  <Phone />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Teléfonos</h3>
                  <p className="text-gray-600">
                    <a href={`tel:${siteContent.general.phoneDisplay.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">{siteContent.general.phoneDisplay}</a>
                    {siteContent.general.phoneSecondary && (
                        <>
                        <br />
                        <a href={`tel:${siteContent.general.phoneSecondary.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">{siteContent.general.phoneSecondary}</a>
                        </>
                    )}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary shrink-0">
                  <Clock />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Horarios</h3>
                  <p className="text-gray-600">
                    {siteContent.general.schedule.weekdays}<br />
                    {siteContent.general.schedule.saturday}
                  </p>
                </div>
              </div>
            </div>

             <div className="mt-10">
               <a 
                href={`https://api.whatsapp.com/send?phone=${siteContent.general.whatsappNumber}&text=${encodeURIComponent(siteContent.general.whatsappMessage)}`}
                target="_blank"
                className="inline-flex items-center justify-center w-full sm:w-auto bg-green-500 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-green-500/40 hover:bg-green-600 hover:scale-105 active:scale-95 transition-all duration-300"
               >
                 {siteContent.contact.ctaButton}
               </a>
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[400px] lg:h-[500px] w-full bg-gray-200 rounded-3xl overflow-hidden shadow-lg border border-gray-200 relative"
          >
             {/* Map Iframe for simplicity/robustness over complex Leaflet setup in V1, as requested in prompt often fails with SSR without dynamic import */}
             <iframe
                src={siteContent.general.address.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
