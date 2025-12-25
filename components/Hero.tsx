import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';
import { DashboardMockup } from './mockups/Dashboard';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10 text-left md:text-center">
        
        {/* Tagline */}
        <div className="mb-6 md:mb-8">
             <span className="text-sm text-gray-500 font-medium">Free until your first customer</span>
        </div>

        <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-6 max-w-5xl md:mx-auto leading-[1.1]">
          Start growing your <br className="hidden md:block" />
          agency today.
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl md:mx-auto mb-10 leading-relaxed">
          Accept payments, manage tasks, and communicate with your clients with your very own white-labelled client portal. <span className="text-white font-medium block md:inline mt-2 md:mt-0">5-min setup, ready to go this morning.</span>
        </p>

        <div className="flex flex-row items-center justify-start md:justify-center gap-4 mb-20">
          <Button size="lg" className="rounded-full h-12 px-6 md:px-8 text-sm md:text-base whitespace-nowrap">
            Set up your agency
          </Button>
          <button className="flex items-center gap-2 text-white font-medium hover:text-gray-300 transition-colors text-sm md:text-base whitespace-nowrap">
            Book a demo
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Dashboard Mockup Container */}
        <div className="relative mx-auto max-w-6xl transform perspective-1000">
           {/* Glow behind mockup */}
           <div className="absolute -inset-4 bg-gradient-to-t from-transparent via-white/5 to-transparent blur-xl rounded-xl opacity-50"></div>
           <DashboardMockup />
        </div>
      </div>
    </section>
  );
};