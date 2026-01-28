import { siteContent } from '@/data/site-content';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-2xl font-bold text-white">
            <span className="text-primary">{siteContent.general.brandName}</span>{siteContent.general.brandNameHighlight}
          </div>

          <div className="flex gap-6 text-sm font-medium">
            <a href="#hero" className="hover:text-white transition-colors">Inicio</a>
            <a href="#services" className="hover:text-white transition-colors">Servicios</a>
            <a href="#contact" className="hover:text-white transition-colors">Contacto</a>
          </div>

          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {siteContent.general.brandName} {siteContent.general.brandNameHighlight}. Todos los derechos reservados.
          </div>

        </div>
      </div>
    </footer>
  );
}
