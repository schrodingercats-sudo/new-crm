import React, { useState } from 'react';
import { Layout, Users, Workflow, Bell, FolderTree, Lock, Share2, Radio, CheckCircle, Clock, CreditCard, Activity, ArrowRight, FileText, CheckSquare, Plus } from 'lucide-react';
import { DashboardMockup } from './mockups/Dashboard';

// --- Mockups for the new section ---

const BrowserFrame = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => (
  <div className={`relative rounded-xl border border-white/10 bg-[#0F0F0F] shadow-2xl overflow-hidden w-full flex flex-col ${className}`}>
    <div className="h-8 md:h-10 border-b border-white/5 bg-[#0F0F0F] flex items-center px-4 gap-2 flex-shrink-0">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
      </div>
    </div>
    <div className="flex-1 bg-[#050505] relative overflow-hidden flex flex-col">
        {children}
    </div>
  </div>
);

const TasksMockup = () => (
    <div className="w-full h-full p-6 text-white font-sans overflow-hidden">
        <div className="flex items-center justify-between mb-6">
             <div className="flex items-center gap-2">
                <CheckSquare className="text-blue-500" size={20} />
                <h3 className="text-lg font-bold">Tasks</h3>
             </div>
             <div className="flex gap-2">
                 <div className="px-3 py-1 rounded bg-white/10 text-xs text-gray-400">Filter</div>
                 <div className="px-3 py-1 rounded bg-blue-600 text-xs flex items-center gap-1"><Plus size={12}/> New Task</div>
             </div>
        </div>
        <div className="space-y-3">
             {[
               { title: 'Design System Review', tag: 'Internal', color: 'border-yellow-500' },
               { title: 'Client Onboarding', tag: 'Client', color: 'border-green-500' },
               { title: 'Weekly Report', tag: 'Recurring', color: 'border-purple-500' },
               { title: 'Update Landing Page', tag: 'Dev', color: 'border-blue-500' },
             ].map((task, i) => (
                 <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-[#1A1A1A] border border-white/5 hover:border-white/10 transition-colors cursor-default">
                     <div className="flex items-center gap-3">
                         <div className={`w-4 h-4 rounded-full border-2 ${task.color}`}></div>
                         <div className="text-sm font-medium text-gray-200">
                             {task.title}
                         </div>
                     </div>
                     <div className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">{task.tag}</div>
                 </div>
             ))}
        </div>
    </div>
);

const DocumentsMockup = () => (
    <div className="w-full h-full p-8 text-gray-300 font-sans overflow-hidden relative">
        <div className="max-w-xl mx-auto space-y-6">
             <div className="flex items-center gap-2 text-gray-500 mb-8">
                <FileText size={16} />
                <span className="text-xs">/ workspace / documents / brief</span>
             </div>
             <div className="h-10 w-3/4 bg-white/10 rounded mb-8 animate-pulse"></div>
             <div className="space-y-3">
                <div className="h-4 w-full bg-white/5 rounded"></div>
                <div className="h-4 w-full bg-white/5 rounded"></div>
                <div className="h-4 w-2/3 bg-white/5 rounded"></div>
             </div>
             <div className="flex gap-4 my-8">
                 <div className="h-32 w-1/2 bg-white/5 rounded border border-white/5 p-4 flex flex-col justify-end">
                    <div className="w-8 h-8 rounded bg-blue-500/20 mb-2"></div>
                    <div className="h-2 w-12 bg-white/10 rounded"></div>
                 </div>
                 <div className="h-32 w-1/2 bg-white/5 rounded border border-white/5 p-4 flex flex-col justify-end">
                    <div className="w-8 h-8 rounded bg-purple-500/20 mb-2"></div>
                    <div className="h-2 w-16 bg-white/10 rounded"></div>
                 </div>
             </div>
             <div className="space-y-3">
                <div className="h-4 w-full bg-white/5 rounded"></div>
                <div className="h-4 w-5/6 bg-white/5 rounded"></div>
             </div>
        </div>
        
        {/* Floating comment */}
        <div className="absolute bottom-12 right-12 bg-[#1A1A1A] border border-white/10 p-3 rounded-lg shadow-xl max-w-[200px] text-xs">
            <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
                <span className="font-bold text-white">Sarah</span>
            </div>
            Can we add the new brand assets here?
        </div>
    </div>
);

// --- New Workflow Section Component ---

const WorkflowSection = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      id: 1,
      number: "1",
      title: "A space designed for agencies and their teams",
      description: "Offer each customer a dedicated client portal while managing all clients, team members, and collaborators in one place. No more switching apps or tabs—boost your agency's efficiency instantly.",
      mockup: <DashboardMockup />
    },
    {
      id: 2,
      number: "2",
      title: "Stay organized and work with tasks",
      description: "Stay organized and efficient when working with customers by creating tasks and sub-tasks.",
      link: "/features/task-management",
      linkText: "Learn about stay organized and work with tasks",
      mockup: <TasksMockup />
    },
    {
      id: 3,
      number: "3",
      title: "Share knowledge with documents",
      description: "Sometimes you need to share documents with your customers. With Orchestra, you can easily share notion-like documents.",
      mockup: <DocumentsMockup />
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Column: Content */}
        <div className="flex flex-col">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Working with clients<br/>can get messy.<br/>Not with Orchestra.
            </h2>
          </div>

          <div className="flex flex-col">
            {tabs.map((tab) => (
              <div key={tab.id} className="border-b border-white/5 last:border-b-0">
                <button 
                  onClick={() => setActiveTab(tab.id)}
                  className="w-full text-left py-6 group focus:outline-none"
                >
                  <div className={`flex items-center gap-4 text-lg md:text-xl font-medium transition-colors duration-300 ${activeTab === tab.id ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                    <span className={`flex items-center justify-center w-6 h-6 rounded text-xs border transition-colors duration-300 ${activeTab === tab.id ? 'border-white text-white' : 'border-white/20 text-gray-500'}`}>
                      {tab.number}
                    </span>
                    {tab.title}
                    {activeTab === tab.id && (
                       <ArrowRight className="w-5 h-5 ml-auto text-white hidden md:block animate-fade-in" />
                    )}
                  </div>
                </button>
                
                {/* Desktop Content (Description only) */}
                <div 
                  className={`hidden md:block overflow-hidden transition-all duration-500 ease-in-out ${activeTab === tab.id ? 'max-h-[200px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-400 leading-relaxed pl-10 max-w-lg">
                    {tab.description}
                  </p>
                  {tab.link && (
                    <div className="pl-10 mt-4">
                        <button className="inline-flex items-center justify-center rounded-xl text-sm font-medium transition-colors gap-2 border border-white/10 hover:border-white/20 text-white bg-white/5 hover:bg-white/10 h-9 py-2 px-4">
                            Learn more
                        </button>
                    </div>
                  )}
                </div>

                {/* Mobile Content (Description + Image) */}
                <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${activeTab === tab.id ? 'max-h-[1000px] opacity-100 pb-8' : 'max-h-0 opacity-0'}`}>
                    <p className="text-gray-400 leading-relaxed pl-10 mb-6 text-sm">
                        {tab.description}
                    </p>
                    <div className="pl-0 sm:pl-10">
                         <div className="relative h-[300px] w-full">
                            <BrowserFrame className="h-full">
                                {tab.mockup}
                            </BrowserFrame>
                         </div>
                         {tab.link && (
                             <div className="mt-4">
                                <button className="w-full inline-flex items-center justify-center rounded-xl text-sm font-medium transition-colors gap-2 border border-white/10 hover:border-white/20 text-white bg-white/5 hover:bg-white/10 h-10 py-2 px-4">
                                    {tab.linkText}
                                </button>
                             </div>
                         )}
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Sticky Image (Desktop Only) */}
        <div className="hidden md:block sticky top-24 h-[600px]">
           <div className="relative w-full h-full">
              {tabs.map((tab) => (
                  <div 
                    key={tab.id}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                        activeTab === tab.id 
                        ? 'opacity-100 translate-y-0 scale-100 z-10' 
                        : activeTab > tab.id 
                            ? 'opacity-0 -translate-y-8 scale-95 z-0'
                            : 'opacity-0 translate-y-8 scale-95 z-0'
                    }`}
                  >
                      <BrowserFrame className="h-full">
                          {tab.mockup}
                      </BrowserFrame>
                  </div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
};


// --- Main Features Component ---

const FeatureCard = ({ title, description, icon: Icon }: any) => (
  <div className="flex flex-col items-start p-6 border border-white/5 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
    <Icon className="w-5 h-5 text-gray-400 mb-4" />
    <h3 className="text-sm font-bold text-white mb-2">{title}</h3>
    <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
  </div>
);

export const Features: React.FC = () => {
  return (
    <div className="space-y-32 py-12">
      
      {/* SECTION 1: Portal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Your own first-class<br/>client portal experience</h2>
                <p className="text-gray-400 mb-12 max-w-md">Orchestra comes out-of-the-box with a customizable client portal with your domain name and branding. A place you can call your own.</p>
                
                <div className="space-y-8 relative">
                    {/* Vertical line connector */}
                    <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gradient-to-b from-white/20 via-white/10 to-transparent"></div>
                    
                    {[
                        { title: 'Fully white-labelled', desc: 'From logo, colors to domain name, customize everything to fit your brand. Run your business your way.' },
                        { title: 'Work with tasks, files and comments', desc: 'Communication starts with a well defined task. Orchestra allows you to write a meaningful description and add comments.' },
                        { title: 'Subscription management', desc: 'Easily offer a way for your clients to control their subscription. From pausing, canceling to resuming.' }
                    ].map((item, i) => (
                        <div key={i} className="pl-8 relative">
                            {/* Active indicator */}
                            {i === 0 && <div className="absolute left-[-2px] top-1 w-1.5 h-8 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>}
                            <h3 className={`text-lg font-bold mb-2 ${i === 0 ? 'text-white' : 'text-gray-500'}`}>{item.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Visual for Section 1 - Portal Login Mockup */}
            <div className="relative">
                 <div className="bg-[#111] rounded-xl border border-white/10 p-1 shadow-2xl overflow-hidden">
                    <div className="bg-[#050505] rounded-lg p-8 aspect-[4/3] flex flex-col items-center justify-center relative border border-white/5">
                        
                        {/* URL Bar Mockup */}
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#1A1A1A] px-4 py-1.5 rounded-full border border-white/10 text-[10px] text-gray-500 flex items-center gap-2">
                             <Lock size={8} /> https://portal.yourdomain.com
                        </div>

                        {/* Annotation Tooltip */}
                        <div className="absolute top-12 left-12 bg-white text-black p-3 rounded-lg shadow-xl text-xs max-w-[150px] z-20 hidden md:block">
                            Add a custom logo and brand colors on light or dark mode.
                            <div className="absolute -bottom-1 left-4 w-2 h-2 bg-white rotate-45"></div>
                        </div>

                         <div className="absolute right-12 top-24 bg-white text-black p-3 rounded-lg shadow-xl text-xs max-w-[150px] z-20 hidden md:block">
                            Add your custom domain name to make the client portal truly your own.
                            <div className="absolute -left-1 top-4 w-2 h-2 bg-white rotate-45"></div>
                        </div>

                        {/* Login Form Mockup */}
                        <div className="w-full max-w-sm mx-auto space-y-6 mt-12">
                             <div className="text-2xl font-black text-white text-center tracking-widest">OFFMENU</div>
                             <div className="space-y-3">
                                <div className="h-2 w-20 bg-gray-800 rounded"></div>
                                <div className="h-10 w-full bg-[#111] border border-white/10 rounded-md"></div>
                             </div>
                             <div className="space-y-3">
                                <div className="h-2 w-16 bg-gray-800 rounded"></div>
                                <div className="h-10 w-full bg-[#111] border border-white/10 rounded-md"></div>
                             </div>
                             <div className="h-10 w-full bg-white rounded-md"></div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>

        {/* Grid 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
            <FeatureCard icon={Layout} title="Simple and clean UI" description="A client portal so fast and simple to use, your clients will love it." />
            <FeatureCard icon={Users} title="Collaboration" description="Allow or not your clients to invite their teams to collaborate with yours." />
            <FeatureCard icon={Workflow} title="Customizable workflow" description="Customize everything, like the columns name, icon or task limit allowance." />
            <FeatureCard icon={Bell} title="Notifications" description="Keep your clients in the loop via email, in-app or Slack notifications." />
        </div>
      </section>

      {/* NEW SECTION: Workflow Accordion */}
      <WorkflowSection />

      {/* SECTION 2: Task Management */}
       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Task management<br/>optimised for agencies.</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Orchestra is the only task management platform crafted with productized services and agencies in mind.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 overflow-hidden relative group">
                <div className="absolute top-0 right-0 p-4 opacity-50">
                    <div className="w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>
                </div>
                <div className="mb-8">
                    {/* Mockup Mini */}
                    <div className="bg-[#111] border border-white/10 rounded-lg p-4 space-y-3">
                         <div className="flex items-center gap-2 mb-4">
                            <div className="w-2 h-2 rounded-full border border-gray-500"></div>
                            <span className="text-xs font-bold text-gray-300">Backlog</span>
                         </div>
                         <div className="bg-[#1A1A1A] p-3 rounded border border-white/5">
                             <div className="text-xs text-gray-300 mb-1">New design request</div>
                             <div className="flex justify-end"><div className="w-4 h-4 rounded-full bg-red-500/20"></div></div>
                         </div>
                         <div className="bg-[#1A1A1A] p-3 rounded border border-white/5 opacity-60">
                             <div className="text-xs text-gray-300 mb-1">Create a Default Asset Sharing...</div>
                         </div>
                    </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Simple & Organized workspace</h3>
                <p className="text-sm text-gray-500">Intuitive kanban and list view giving you a space to focus on what needs to be done.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 overflow-hidden">
                <div className="mb-8">
                     <div className="bg-[#111] border border-white/10 rounded-lg p-6">
                        <div className="text-sm text-gray-400 font-medium mb-4">New design request</div>
                        <div className="space-y-2">
                            <div className="h-1.5 w-full bg-gray-800 rounded-full"></div>
                            <div className="h-1.5 w-3/4 bg-gray-800 rounded-full"></div>
                            <div className="h-1.5 w-5/6 bg-gray-800 rounded-full"></div>
                             <div className="flex gap-2 mt-4">
                                <span className="text-[10px] bg-orange-500/20 text-orange-500 px-2 py-0.5 rounded">Client</span>
                            </div>
                        </div>
                     </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Powerful task description</h3>
                <p className="text-sm text-gray-500">Collaborate in real-time for a communication between team members and clients.</p>
            </div>
             {/* Card 3 */}
             <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 overflow-hidden">
                <div className="mb-8">
                     <div className="bg-[#111] border border-white/10 rounded-lg p-6 space-y-4">
                         <div className="flex justify-between items-center text-xs">
                             <span className="text-gray-500">Status</span>
                             <span className="text-gray-300 flex items-center gap-1"><div className="w-2 h-2 rounded-full border border-gray-500"></div> Backlog</span>
                         </div>
                         <div className="flex justify-between items-center text-xs">
                             <span className="text-gray-500">Assignee</span>
                             <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-blue-500"></div> <span className="text-gray-300">Assigned to you</span></div>
                         </div>
                         <div className="flex justify-between items-center text-xs">
                             <span className="text-gray-500">Due date</span>
                             <span className="text-gray-300">September 8th, 2024</span>
                         </div>
                          <div className="flex justify-between items-center text-xs">
                             <span className="text-gray-500">Estimate</span>
                             <span className="text-green-400 bg-green-900/30 px-1.5 rounded text-[10px]">Low</span>
                         </div>
                     </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Custom task properties</h3>
                <p className="text-sm text-gray-500">Create and manage custom properties that perfectly align with your workflow.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 overflow-hidden">
                <div className="mb-8 relative h-48">
                    {/* Chat Mockup */}
                    <div className="absolute inset-x-0 bottom-0 space-y-3">
                        <div className="flex gap-3">
                             <div className="w-6 h-6 rounded-full bg-gray-600 flex-shrink-0"></div>
                             <div>
                                <div className="flex items-center gap-2 mb-1">
                                     <span className="text-xs font-bold text-gray-300">Client</span>
                                     <span className="text-[10px] text-gray-600">Just now</span>
                                </div>
                                <div className="text-xs text-gray-400 bg-white/5 p-2 rounded-lg rounded-tl-none">
                                    Hey <span className="text-blue-400">@Anthony</span> any update on the new design request?
                                </div>
                             </div>
                        </div>
                        <div className="flex gap-3">
                             <div className="w-6 h-6 rounded-full bg-purple-600 flex-shrink-0"></div>
                             <div className="w-full">
                                <div className="flex items-center gap-2 mb-1">
                                     <span className="text-xs font-bold text-gray-300">Comment</span>
                                </div>
                                <div className="text-xs text-gray-400 bg-white/5 p-2 rounded-lg w-full border border-white/10 flex justify-between">
                                    <span>Leave a comment...</span>
                                    <span className="text-[10px] border border-white/20 px-1 rounded">Send</span>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Comments and private notes</h3>
                <p className="text-sm text-gray-500">Collaborate in real-time. Keep internal discussions private through team-only notes.</p>
            </div>
        </div>
        
         {/* Grid 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <FeatureCard icon={FolderTree} title="Sub-tasks" description="Stay organized by grouping what needs to be done together." />
            <FeatureCard icon={Lock} title="Private task properties" description="Hide some tasks and properties from your clients, work in privacy." />
            <FeatureCard icon={Share2} title="Share large files" description="Attach any type of files to tasks, comments or private notes." />
            <FeatureCard icon={Radio} title="Get notified" description="Subscribe to a task's notifications and never miss anything." />
        </div>
       </section>
    </div>
  );
};