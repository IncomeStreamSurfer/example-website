'use client';

import React from 'react';

const HeroSurge = ({ title, subtitle }: { title: string, subtitle: string }) => {
    return (
        <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center overflow-hidden border-b border-cyan-900/30">
            <div className="absolute inset-0 hydraulic-grid opacity-20"></div>

            {/* Schematic Lines */}
            <div className="absolute left-[10%] top-0 w-px h-full bg-cyan-500/20"></div>
            <div className="absolute right-[10%] top-0 w-px h-full bg-cyan-500/20"></div>
            <div className="absolute top-[20%] left-0 w-full h-px bg-cyan-500/20"></div>

            <div className="relative z-10 text-center px-6 max-w-5xl">
                <div className="flex items-center justify-center gap-3 mb-8">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.8)]"></div>
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">Response Velocity: Critical</span>
                </div>

                <h1 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter mb-8 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent italic">
                    {title}
                </h1>

                <p className="text-xl md:text-2xl text-cyan-100/70 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                    {subtitle}
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <button className="px-12 py-5 bg-cyan-400 text-slate-950 font-black uppercase tracking-widest text-sm hover:translate-y-[-2px] hover:shadow-[0_10px_40px_rgba(34,211,238,0.4)] transition-all">
                        Emergency Dispatch →
                    </button>
                    <button className="px-12 py-5 border border-cyan-400/30 text-cyan-400 font-bold uppercase tracking-widest text-sm hover:bg-cyan-400/5 transition-all">
                        Our Locations
                    </button>
                </div>
            </div>

            {/* Decorative gauge motif */}
            <div className="absolute bottom-10 left-10 hidden lg:block">
                <div className="font-mono text-[10px] text-cyan-500/40 mb-2 uppercase">System Pressure</div>
                <div className="w-32 h-1 bg-white/5 relative">
                    <div className="absolute top-0 left-0 h-full w-[85%] bg-cyan-400 animate-[pulse_2s_infinite]"></div>
                </div>
            </div>
        </section>
    );
};

export default HeroSurge;
