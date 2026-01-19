'use client';

import React from 'react';

const LocationTrust = ({ location }: { location: string }) => {
    return (
        <section className="py-24 px-6 bg-slate-950 relative border-b border-cyan-900/30">
            <div className="absolute right-[5%] top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="relative">
                    <div className="w-full aspect-square bg-slate-900 border border-cyan-500/20 relative group">
                        <div className="absolute inset-4 border border-cyan-500/5 hydraulic-grid"></div>
                        <div className="absolute inset-0 flex items-center justify-center p-12">
                            <div className="text-center">
                                <div className="font-mono text-[12px] text-cyan-500/60 mb-8 uppercase tracking-widest animate-pulse">Scanning {location} Sector...</div>
                                <div className="relative w-48 h-48 mx-auto">
                                    <div className="absolute inset-0 border-2 border-cyan-400/20 rounded-full"></div>
                                    <div className="absolute inset-2 border border-cyan-400/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-4xl font-black italic text-white">{location.slice(0, 3).toUpperCase()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Corner markers */}
                        <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-cyan-400"></div>
                    </div>
                </div>

                <div>
                    <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-8 italic leading-none">
                        Deep Infrastructure <br /> Expertise in <span className="text-cyan-400">{location}</span>
                    </h2>
                    <p className="text-cyan-100/60 text-lg mb-8 leading-relaxed">
                        Operating with sub-sector precision. We understand the specific plumbing architecture of {location}, from historic town-center piping to modern suburban hydraulic systems.
                    </p>
                    <div className="grid grid-cols-2 gap-8">
                        {[
                            { label: 'Technicians On-Call', val: '12 Active' },
                            { label: 'Avg Arrival Time', val: '14 Mins' },
                            { label: 'Success Velocity', val: 'High' },
                            { label: 'Diagnostic Depth', val: '98%' }
                        ].map((item, i) => (
                            <div key={i} className="border-l border-cyan-500/30 pl-6 py-2">
                                <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-500/60 mb-2">{item.label}</div>
                                <div className="text-xl font-bold text-white uppercase italic">{item.val}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationTrust;
