import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { ArrowRight, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className={`fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
        <nav 
          className={`
            pointer-events-auto
            flex items-center justify-between
            w-full max-w-5xl
            rounded-full
            border
            transition-all duration-500 ease-in-out
            px-4 py-2.5 sm:px-6
            ${scrolled 
              ? 'bg-black/70 backdrop-blur-md border-white/10 shadow-lg shadow-black/20' 
              : 'bg-transparent border-transparent shadow-none'}
          `}
        >
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-black"></div>
            </div>
            <span className="text-white font-bold text-lg tracking-tight block">Orchestra</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Pricing</a>
            <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Blog</a>
            <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Help Center</a>
          </div>

          {/* Actions (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">Sign in</a>
            <Button variant="primary" size="sm" className="rounded-full px-5">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Menu (Hamburger) */}
          <div className="md:hidden flex items-center">
               <button onClick={() => setIsMenuOpen(true)} className="focus:outline-none">
                  <Menu className="text-gray-300 w-6 h-6 cursor-pointer hover:text-white transition-colors" />
               </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[60] bg-[#050505] transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6">
             <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-black"></div>
                </div>
                <span className="text-white font-bold text-lg tracking-tight block">Orchestra</span>
             </div>
             <button onClick={() => setIsMenuOpen(false)} className="p-2 -mr-2 text-gray-400 hover:text-white focus:outline-none">
                 <X className="w-6 h-6" />
             </button>
        </div>

        {/* Mobile Menu Links */}
        <div className="flex-1 flex flex-col p-6 space-y-6 overflow-y-auto">
            <nav className="flex flex-col space-y-6">
                <a href="#" className="text-2xl font-medium text-gray-200 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Features</a>
                <a href="#" className="text-2xl font-medium text-gray-200 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Pricing</a>
                <a href="#" className="text-2xl font-medium text-gray-200 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Blog</a>
                <a href="#" className="text-2xl font-medium text-gray-200 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Help Center</a>
            </nav>

            <div className="mt-auto space-y-4 pt-8">
                <a href="#" onClick={() => setIsMenuOpen(false)} className="block w-full py-3 text-center text-white border border-white/10 rounded-full hover:bg-white/5 font-medium transition-colors">
                    Sign in
                </a>
                <Button variant="primary" size="lg" className="w-full rounded-full justify-center" onClick={() => setIsMenuOpen(false)}>
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
            </div>
        </div>
      </div>
    </>
  );
};