import React from 'react';

export const LogoTicker: React.FC = () => {
  return (
    <section className="py-20 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-lg text-gray-400 mb-2">Powering the world's best productized services.</p>
        <p className="text-sm text-gray-500 mb-12">From one-man agencies to big studios.</p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Mock Logos - Using text representation styled to look like logos as per strict instruction not to use external image assets unless strictly needed */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded-full"></div>
            <span className="text-xl font-bold text-white tracking-tight">OrangeStudio</span>
          </div>
          
          <div className="flex items-center gap-2">
             <span className="text-2xl font-black text-white tracking-widest uppercase">OFFMENU</span>
          </div>

          <div className="flex items-center gap-2">
             <span className="text-xl font-light text-white tracking-tight">baked design</span>
          </div>
        </div>
        
        <p className="text-xs text-gray-600 mt-12">*plus more than 500 other awesome productized services</p>
      </div>
    </section>
  );
};