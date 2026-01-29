'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import { siteContent } from '@/data/site-content';

export function Contact() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-gray-50">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-teal-50/40 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-primary font-bold tracking-wide text-xs uppercase mb-4">
              {siteContent.contact.sectionTitle}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
              {siteContent.contact.heading}
            </h2>
            
            <div className="space-y-6">
              {/* Address Card */}
              <div className="group bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white max-w-md shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/80">
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Dirección</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
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
              </div>

              {/* Phone Card */}
              <div className="group bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white max-w-md shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/80">
                <div className="flex gap-5 items-start">
                   <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Teléfonos</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      <a href={`tel:${siteContent.general.phoneDisplay.replace(/\s/g, '')}`} className="hover:text-primary transition-colors block">{siteContent.general.phoneDisplay}</a>
                      {siteContent.general.phoneSecondary && (
                          <a href={`tel:${siteContent.general.phoneSecondary.replace(/\s/g, '')}`} className="hover:text-primary transition-colors block">{siteContent.general.phoneSecondary}</a>
                      )}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="group bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white max-w-md shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/80">
                <div className="flex gap-5 items-start">
                   <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Horarios</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {siteContent.general.schedule.weekdays}<br />
                      <span className="text-primary font-medium">{siteContent.general.schedule.saturday}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

             <div className="mt-10">
               <a 
                href={`https://api.whatsapp.com/send?phone=${siteContent.general.whatsappNumber}&text=${encodeURIComponent(siteContent.general.whatsappMessage)}`}
                target="_blank"
                className="inline-flex items-center justify-center w-full sm:w-auto bg-green-500 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:bg-green-600 hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
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
            className="h-[400px] lg:h-[600px] w-full bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 border-4 border-white relative group"
          >
              {/* Map Glow */}
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] pointer-events-none z-10 rounded-[2.5rem]" />
              
             {/* Map Iframe */}
             <iframe
                src={siteContent.general.address.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
              />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
