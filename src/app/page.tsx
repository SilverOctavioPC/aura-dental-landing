import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Team } from '@/components/sections/Team';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
