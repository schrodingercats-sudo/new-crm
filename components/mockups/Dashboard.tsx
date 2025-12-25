import React from 'react';
import { Search, Bell, Plus, MoreHorizontal, User, BarChart2, Layout, Settings, Hash, CheckSquare } from 'lucide-react';

export const DashboardMockup: React.FC = () => {
  return (
    <div className="relative w-full rounded-xl bg-[#0F0F0F] border border-white/10 shadow-2xl overflow-hidden select-none">
      {/* Top Bar */}
      <div className="h-14 border-b border-white/5 flex items-center justify-between px-4 bg-[#0F0F0F]">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-white font-semibold">
            <div className="w-5 h-5 bg-white rounded-md flex items-center justify-center text-black text-xs font-bold">O</div>
            OFFMENU <span className="text-xs bg-white/10 text-gray-400 px-1.5 py-0.5 rounded ml-2 font-normal">Starter</span>
          </div>
          <div className="h-4 w-px bg-white/10 mx-2"></div>
           <div className="flex items-center gap-2 text-gray-400 text-sm bg-black/50 px-2 py-1 rounded-md border border-white/5">
            <Search size={14} />
            <span>Search</span>
            <span className="ml-4 text-xs bg-white/10 px-1 rounded">⌘ K</span>
           </div>
        </div>
        <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
                 <div className="w-6 h-6 rounded-full bg-blue-500 border border-[#0F0F0F]"></div>
                 <div className="w-6 h-6 rounded-full bg-purple-500 border border-[#0F0F0F]"></div>
            </div>
            <Bell size={16} className="text-gray-400" />
            <button className="bg-white text-black text-xs font-medium px-2 py-1 rounded flex items-center gap-1">
                <Plus size={12} /> New task
            </button>
        </div>
      </div>

      <div className="flex h-[500px]">
        {/* Sidebar */}
        <div className="w-60 border-r border-white/5 bg-[#0A0A0A] p-3 hidden md:block">
            <div className="space-y-4">
                <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-semibold text-gray-500 px-2 mb-2">
                        <span>Tasks</span>
                    </div>
                    {['Assigned to me', 'Subscribers', 'Internal', 'Analytics'].map((item, i) => (
                         <div key={i} className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-sm ${i === 0 ? 'bg-white/5 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
                            {i === 3 ? <BarChart2 size={14} /> : i === 0 ? <CheckSquare size={14} /> : <Hash size={14} />}
                            {item}
                         </div>
                    ))}
                </div>
                 <div className="space-y-1 pt-4">
                    <div className="flex items-center justify-between text-xs font-semibold text-gray-500 px-2 mb-2">
                        <span>Workspace</span>
                    </div>
                     {['Subscribers', 'Unordinary', 'Upstash', 'Splincid'].map((item, i) => (
                         <div key={i} className="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-400 hover:text-white hover:bg-white/5 cursor-pointer">
                             <div className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-red-500' : i === 2 ? 'bg-green-500' : 'bg-gray-600'}`}></div>
                            {item}
                         </div>
                    ))}
                 </div>
            </div>
        </div>

        {/* Main Content - Kanban */}
        <div className="flex-1 bg-[#0F0F0F] p-6 overflow-x-auto mockup-scroll">
            <div className="flex gap-6 min-w-max">
                {/* Column 1 */}
                <div className="w-72">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 border-2 border-gray-600 rounded-full"></div>
                            <span className="text-sm font-medium text-white">Not started</span>
                            <span className="text-xs text-gray-500 bg-white/5 px-1.5 rounded">6</span>
                        </div>
                        <Plus size={14} className="text-gray-500 cursor-pointer" />
                    </div>
                    <div className="space-y-3">
                        <KanbanCard title="Create a new logo for Orchestra" tag="Unordinary" tagColor="bg-orange-500" />
                        <KanbanCard title="Create a Default Asset Sharing Folders added to Project Template" tag="Unordinary" tagColor="bg-orange-500" />
                        <KanbanCard title="Add descriptions to database properties" tag="Upstash" tagColor="bg-green-500" />
                         <KanbanCard title="Ordering Project Tasks" tag="Unordinary" tagColor="bg-orange-500" />
                    </div>
                </div>

                {/* Column 2 */}
                <div className="w-72">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                             <div className="w-3 h-3 border-2 border-yellow-500 rounded-full"></div>
                            <span className="text-sm font-medium text-white">To do</span>
                            <span className="text-xs text-gray-500 bg-white/5 px-1.5 rounded">4</span>
                        </div>
                        <Plus size={14} className="text-gray-500 cursor-pointer" />
                    </div>
                     <div className="space-y-3">
                        <KanbanCard title="Lock Down all Databases" tag="Upstash" tagColor="bg-green-500" image={true} />
                        <KanbanCard title="Create a new resurfacing mechanism" tag="Upstash" tagColor="bg-green-500" />
                        <KanbanCard title="Create Custom views for Paulina using new Metadata" tag="Upstash" tagColor="bg-green-500" />
                    </div>
                </div>

                {/* Column 3 */}
                <div className="w-72">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                             <div className="w-3 h-3 border-2 border-blue-500 rounded-full"></div>
                            <span className="text-sm font-medium text-white">Awaiting feedback</span>
                            <span className="text-xs text-gray-500 bg-white/5 px-1.5 rounded">2</span>
                        </div>
                         <Plus size={14} className="text-gray-500 cursor-pointer" />
                    </div>
                     <div className="space-y-3">
                        <KanbanCard title="Create 3 distinct emails for different workflows" tag="Upstash" tagColor="bg-green-500" />
                        <KanbanCard title="Clean up task statuses" tag="Upstash" tagColor="bg-green-500" subtext="Sub task: Create 3 distinct emails for..." />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

const KanbanCard = ({ title, tag, tagColor, image = false, subtext = "" }: any) => (
    <div className="bg-[#1A1A1A] border border-white/5 rounded-lg p-3 hover:border-white/10 transition-colors cursor-pointer group">
        <div className="flex items-center gap-2 mb-2">
            <div className={`w-1.5 h-1.5 rounded-full ${tagColor}`}></div>
            <span className="text-xs text-gray-400">{tag}</span>
        </div>
        <h4 className="text-sm text-gray-200 font-medium leading-snug mb-2">{title}</h4>
        {subtext && <p className="text-xs text-gray-500 mb-2">{subtext}</p>}
        {image && <div className="h-24 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-md mb-2 border border-white/5"></div>}
        <div className="flex items-center justify-between mt-2">
             <div className="flex -space-x-1">
                 <div className="w-4 h-4 rounded-full bg-gray-600 border border-[#1A1A1A]"></div>
             </div>
             <div className="w-4 h-4 rounded-full border border-gray-600 border-dashed"></div>
        </div>
    </div>
);