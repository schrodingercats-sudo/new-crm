import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="pt-20 pb-10 border-t border-white/5 bg-[#050505] text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* CTA Card */}
            <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-10 md:p-16 mb-20 relative overflow-hidden">
                 <div className="relative z-10 max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Discover how Orchestra can help<br/>with your productized service</h2>
                    <p className="text-gray-400 mb-10 text-base leading-relaxed">Not sure how to best grow your agency with Orchestra? Book a free demo to learn more, we are here to help you take the first step towards your productized service journey.</p>
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                         <Button variant="primary" className="rounded-full px-6">Book a free demo call <ArrowRight className="ml-2 w-4 h-4" /></Button>
                         
                         <div className="flex items-center gap-3">
                             <div className="flex -space-x-3">
                                 {[1,2,3].map(i => (
                                     <div key={i} className="w-8 h-8 rounded-full bg-gray-700 border-2 border-[#0A0A0A]"></div>
                                 ))}
                             </div>
                             <div className="text-xs text-gray-400">
                                 <div className="flex text-yellow-500 mb-0.5">★★★★★</div>
                                 powers 500+ productized services
                             </div>
                         </div>
                    </div>
                 </div>
                 {/* Decorative gradient */}
                 <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
                <div className="col-span-2">
                     <div className="flex items-center gap-2 mb-6">
                        <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                            <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
                        </div>
                        <span className="text-white font-bold text-lg">Orchestra</span>
                    </div>
                </div>
                
                <div className="col-span-1 space-y-4">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Legal</h4>
                    <ul className="space-y-3">
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
                    </ul>
                </div>

                <div className="col-span-1 space-y-4">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Links</h4>
                    <ul className="space-y-3">
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Become an affiliate</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Leave us a testimonial</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Join our discord</a></li>
                         <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Public roadmap</a></li>
                    </ul>
                </div>

                <div className="col-span-2 space-y-4">
                     <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Free tools</h4>
                     <ul className="space-y-3">
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Productized service ideas generator</a></li>
                    </ul>
                </div>
            </div>
            
            <div className="mt-20 pt-8 border-t border-white/5 flex justify-between items-center">
               <div className="text-gray-600 text-xs">© 2024 Orchestra. All rights reserved.</div>
            </div>
        </div>
    </footer>
  );
};