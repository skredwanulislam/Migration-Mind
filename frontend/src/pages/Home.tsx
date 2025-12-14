import React from 'react';

// Simple Icons components (You can replace these with lucide-react or heroicons later)
const DatabaseIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
);
const BrainIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/></svg>
);
const RocketIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.1 4-1 4-1"/><path d="M12 15v5s3.03-.55 4-2c1.1-1.62 1-4 1-4"/></svg>
);
const CheckCircleIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);


export default function Home() {
  return (
    // Main container with dark background similar to the reference image
    <div className="min-h-screen bg-[#0a0f1d] text-slate-200 overflow-hidden selection:bg-cyan-500/30 font-sans">
      
      {/* Ambient Background Glows - mimics the lighting in the image */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-700/20 blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-600/20 blur-[150px] pointer-events-none" />

      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center relative z-20">
        <div className="flex items-center gap-2">
          <BrainIcon className="w-8 h-8 text-cyan-400" />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Migration Mind
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#features" className="hover:text-cyan-400 transition">Features</a>
          <a href="#how-it-works" className="hover:text-cyan-400 transition">How it Works</a>
          <a href="#pricing" className="hover:text-cyan-400 transition">Pricing</a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="/login" className="hidden md:block text-sm font-medium hover:text-white transition">
            Login
          </a>
          <a
            href="/signup"
            className="px-6 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 pt-20 pb-32 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 text-sm text-cyan-300 animate-fade-in-up">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
          </span>
          AI-Powered Database Engine V2.0 is live
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
          Migrate your Database <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 drop-shadow-[0_0_25px_rgba(6,182,212,0.3)]">
            Intelligently with AI
          </span>
        </h1>
        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Leave the complex schema mapping and data transformation to Migration Mind. 
          Seamless, secure, and near-zero downtime migrations for modern enterprises.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a href="/signup" className="w-full sm:w-auto px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300">
            Start Free Migration
          </a>
          <a href="#demo" className="w-full sm:w-auto px-8 py-4 text-lg font-bold text-white bg-white/5 border border-white/10 backdrop-blur-md rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
            Watch Demo 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        {/* Dashboard Mockup - Visualizing the process based on the reference image style */}
        <div className="mt-24 mx-auto max-w-5xl relative">
            {/* The glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-3xl blur opacity-30"></div>
            
            {/* The main card container mimicking the glassmorphism style */}
            <div className="relative bg-[#131b2d]/90 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl overflow-hidden">
               
               {/* Top bar of the mockup */}
               <div className="flex justify-between items-center mb-10">
                   <div>
                       <h3 className="text-2xl font-bold text-white">Migration Overview</h3>
                       <p className="text-slate-400">Project: Legacy SQL to Mongo Altas</p>
                   </div>
                   <div className="px-4 py-2 bg-green-500/10 text-green-400 border border-green-500/20 rounded-lg flex items-center gap-2">
                       <span className="relative flex h-2 w-2">
                           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                           <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                       </span>
                       Active Run
                   </div>
               </div>

               {/* The visualization of data flow */}
               <div className="grid md:grid-cols-3 gap-8 items-center relative z-10">
                    {/* Source */}
                   <div className="bg-blue-950/50 border border-blue-800/50 p-6 rounded-2xl text-left relative overflow-hidden group hover:border-blue-500/50 transition duration-500">
                       <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                       <DatabaseIcon className="w-10 h-10 text-blue-400 mb-4" />
                       <h4 className="text-xl font-semibold">Source: PostgreSQL</h4>
                       <p className="text-slate-500 text-sm mt-2">Analyzing Schema... 52 Tables detected.</p>
                   </div>

                    {/* The AI connector in the middle */}
                   <div className="flex flex-col items-center justify-center">
                       <div className="relative">
                        <div className="absolute -inset-4 bg-cyan-500/30 blur-xl rounded-full animate-pulse-slow"></div>
                        <div className="bg-cyan-950/80 p-6 rounded-full border border-cyan-500/50 relative z-10">
                             <BrainIcon className="w-12 h-12 text-cyan-300" />
                        </div>
                       </div>
                       <p className="text-cyan-400 font-medium mt-6">AI-Driven Mapping & Transform</p>
                       {/* Animated progress bar */}
                       <div className="w-full h-1.5 bg-gray-800 rounded-full mt-4 overflow-hidden relative">
                            <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-cyan-400 w-[73%] rounded-full">
                                 <div className="absolute inset-0 bg-white/30 animate-shimmer"></div>
                            </div>
                       </div>
                       <p className="text-xs text-cyan-300 mt-2 text-right w-full">73% Complete</p>
                   </div>

                    {/* Target */}
                   <div className="bg-purple-950/50 border border-purple-800/50 p-6 rounded-2xl text-left relative overflow-hidden group hover:border-purple-500/50 transition duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                       <DatabaseIcon className="w-10 h-10 text-purple-400 mb-4" />
                       <h4 className="text-xl font-semibold">Target: MongoDB</h4>
                       <p className="text-slate-500 text-sm mt-2">Waiting for transformed data packets.</p>
                   </div>
               </div>
               
                {/* Decorative bottom gradient bar similar to image */}
               <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 opacity-50"></div>
            </div>
        </div>

      </main>

      {/* Features Section - Keeping the dark aesthetic */}
      <section id="features" className="py-24 bg-[#0a0f1d] relative z-10 border-t border-white/5">
          <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">Supercharge your migration</h2>
                  <p className="text-slate-400 max-w-xl mx-auto">Our AI engine handles the heavy lifting, so you can focus on your application logic.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                  {/* Feature 1 */}
                  <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 group">
                      <div className="bg-blue-900/30 p-4 rounded-xl inline-block mb-6 group-hover:bg-blue-600/20 transition">
                        <BrainIcon className="w-8 h-8 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">AI Schema Mapping</h3>
                      <p className="text-slate-400 leading-relaxed">
                          Forget manual mapping sheets. Our AI automatically analyzes source and target structures to suggest the optimal schema transformation.
                      </p>
                  </div>
                  {/* Feature 2 */}
                  <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 group">
                       <div className="bg-cyan-900/30 p-4 rounded-xl inline-block mb-6 group-hover:bg-cyan-600/20 transition">
                        <RocketIcon className="w-8 h-8 text-cyan-400" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">Near-Zero Downtime</h3>
                      <p className="text-slate-400 leading-relaxed">
                          Use Change Data Capture (CDC) technology to keep your source and target databases in sync during the transition, minimizing impact.
                      </p>
                  </div>
                  {/* Feature 3 */}
                  <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 group">
                       <div className="bg-purple-900/30 p-4 rounded-xl inline-block mb-6 group-hover:bg-purple-600/20 transition">
                        <CheckCircleIcon className="w-8 h-8 text-purple-400" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                      <p className="text-slate-400 leading-relaxed">
                          Your data is encrypted in transit and at rest. We follow strict compliance standards to ensure your sensitive information remains safe.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-12 text-center text-slate-500 text-sm border-t border-white/5 relative z-10">
        <p>© {new Date().getFullYear()} Migration Mind. All rights reserved.</p>
      </footer>
    </div>
  );
}