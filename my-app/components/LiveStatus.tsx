'use client';

import React from 'react';

const LiveStatus = () => {
    return (
        <section className="py-24 px-6 bg-slate-900 border-b border-cyan-900/30 overflow-hidden relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    <div className="flex-1 space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="flex gap-1">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-1 h-4 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]"></div>
                                ))}
                            </div>
                            <span className="font-mono text-xs uppercase tracking-widest text-white">Live System Metrics</span>
                        </div>

                        <h2 className="text-4xl font-black uppercase tracking-tighter text-white italic">
                            Dispatched & <span className="text-cyan-400">Pressurized</span>
                        </h2>

                        <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                            {[
                                { label: 'Current Load', val: '84%', color: 'blue' },
                                { label: 'Response Hub', val: 'Galway City', color: 'cyan' },
                                { label: 'Active Repairs', val: '18 Units', color: 'cyan' },
                                { label: 'Force Capacity', val: 'MAX', color: 'white' }
                            ].map((m, i) => (
                                <div key={i}>
                                    <div className="font-mono text-[9px] uppercase text-cyan-500/50 mb-2">{m.label}</div>
                                    <div className="text-2xl font-black text-white italic tracking-tight">{m.val}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative w-full md:w-1/3 aspect-video bg-slate-800/20 border border-cyan-400/10 p-4">
                        <div className="absolute inset-0 hydraulic-grid opacity-20"></div>
                        <div className="relative h-full border border-cyan-400/20 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-5xl font-black text-white italic italic italic tracking-widest mb-2 animate-pulse">00:08</div>
                                <div className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest">Target Resolution Time</div>
                            </div>
                        </div>
                        {/* Scanning line animation */}
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400/40 shadow-[0_0_10px_rgba(34,211,238,0.5)] animate-[scan_4s_linear_infinite]"></div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}} />
        </section>
    );
};

export default LiveStatus;
