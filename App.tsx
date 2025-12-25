import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoTicker } from './components/LogoTicker';
import { Testimonial } from './components/Testimonial';
import { Features } from './components/Features';
import { Analytics } from './components/Analytics';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white/20">
      <Navbar />
      <main>
        <Hero />
        <LogoTicker />
        <Testimonial 
          quote="It's quickly becoming insane to even consider using any other software if you're a productized agency. No one else is doing it like Orchestra."
          author="Lucas"
        />
        <Features />
        <Testimonial 
          quote="From seamless payments to efficient task management, it's been a game-changer."
          author="Keegan"
        />
        <Analytics />
      </main>
      <Footer />
    </div>
  );
}

export default App;