import React from 'react';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { CheckCircle, Clock, CreditCard, Activity } from 'lucide-react';

const data = [
  { name: '1', value: 1000 },
  { name: '2', value: 2400 },
  { name: '3', value: 4000 },
  { name: '4', value: 7800 },
  { name: '5', value: 12000 },
  { name: '6', value: 18500 },
];

export const Analytics: React.FC = () => {
  return (
    <section className="py-24">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Analytics made for<br/>productized services.</h2>
               <p className="text-gray-400">Stay alert and make informed decisions with the only platform<br/>giving you all the metrics needed for your productized service.</p>
           </div>

           {/* Chart Card */}
           <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-1 shadow-2xl relative overflow-hidden">
                {/* Glow */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-green-500/10 blur-[100px] rounded-full pointer-events-none"></div>

               <div className="bg-[#0E0E0E] rounded-xl p-8">
                   <div className="flex justify-between items-end mb-8 relative z-10">
                       <div>
                           <div className="text-xs text-gray-500 font-medium mb-1">MRR</div>
                           <div className="text-3xl font-bold text-white flex items-end gap-2">
                               $18500 <span className="text-sm text-green-500 font-medium mb-1.5">68% ↗</span>
                           </div>
                       </div>
                   </div>

                   <div className="h-48 w-full relative z-10">
                       <ResponsiveContainer width="100%" height="100%">
                           <AreaChart data={data}>
                               <defs>
                                   <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                       <stop offset="5%" stopColor="#22c55e" stopOpacity={0.1}/>
                                       <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                                   </linearGradient>
                               </defs>
                               <Area type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
                           </AreaChart>
                       </ResponsiveContainer>
                   </div>
                   
                   {/* Stats Grid */}
                   <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 border-t border-white/5 pt-8">
                       {[
                           { label: 'Active subscribers', val: '7', change: '40% ↗', neutral: false },
                           { label: 'Paused subscribers', val: '3', change: '-25% ↗', neutral: false },
                           { label: 'Tasks worked on', val: '75', change: '39% ↗', neutral: false },
                           { label: 'Task completion time', val: '3d', change: '30% ↘', neutral: true },
                       ].map((stat, i) => (
                           <div key={i}>
                               <div className="flex items-center gap-2 mb-2">
                                   <span className="text-xs text-gray-500">{stat.label}</span>
                                   <span className={`text-[10px] ${stat.neutral ? 'text-red-400' : 'text-green-500'}`}>{stat.change}</span>
                               </div>
                               <div className="text-xl font-bold text-white">{stat.val}</div>
                               <div className="text-[10px] text-gray-600 mt-1">4 previous period</div>
                           </div>
                       ))}
                   </div>
               </div>
           </div>
           
           {/* Bottom Grid Features */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
                <div className="p-6 border border-white/5 rounded-xl bg-white/[0.02]">
                    <Activity className="w-5 h-5 text-gray-400 mb-4" />
                    <h3 className="text-sm font-bold text-white mb-2">Real-time alerts</h3>
                    <p className="text-sm text-gray-500">Receive emails when a client pays, subscribes, pauses or resumes their subscription</p>
                </div>
                 <div className="p-6 border border-white/5 rounded-xl bg-white/[0.02]">
                    <CheckCircle className="w-5 h-5 text-gray-400 mb-4" />
                    <h3 className="text-sm font-bold text-white mb-2">Real-time updates</h3>
                    <p className="text-sm text-gray-500">Get real-time insights and know exactly where you're at as the story unfolds</p>
                </div>
                 <div className="p-6 border border-white/5 rounded-xl bg-white/[0.02]">
                    <CreditCard className="w-5 h-5 text-gray-400 mb-4" />
                    <h3 className="text-sm font-bold text-white mb-2">Payments schedule</h3>
                    <p className="text-sm text-gray-500">Know exactly when subscription payments are expected to hit your bank account.</p>
                </div>
                 <div className="p-6 border border-white/5 rounded-xl bg-white/[0.02]">
                    <Clock className="w-5 h-5 text-gray-400 mb-4" />
                    <h3 className="text-sm font-bold text-white mb-2">Key team metrics</h3>
                    <p className="text-sm text-gray-500">Know how your agency and your team perform to provide a better service</p>
                </div>
           </div>
       </div>
    </section>
  );
};