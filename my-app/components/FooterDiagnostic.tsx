'use client';

import React from 'react';

const FooterDiagnostic = () => {
    return (
        <footer className="py-24 px-6 bg-slate-950 border-t border-cyan-400/10 relative overflow-hidden">
            <div className="absolute inset-0 hydraulic-grid opacity-5"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-3xl font-black italic uppercase text-white mb-6">Galway Emergency <br /><span className="text-cyan-400">Plumbing System</span></h2>
                        <p className="text-cyan-100/30 text-sm max-w-sm mb-8">
                            High-pressure hydraulic response and structural plumbing restoration across all Galway sectors. 24/7/365 operational status.
                        </p>
                        <div className="flex gap-4">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-10 h-10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 font-mono text-xs">
                                    0{i}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-mono text-[10px] uppercase text-cyan-500 mb-6 tracking-widest">Sectors</h4>
                        <ul className="space-y-3 text-sm text-cyan-100/40 font-bold uppercase italic">
                            <li><a href="#" className="hover:text-cyan-400">Salthill</a></li>
                            <li><a href="#" className="hover:text-cyan-400">Oranmore</a></li>
                            <li><a href="#" className="hover:text-cyan-400">City Center</a></li>
                            <li><a href="#" className="hover:text-cyan-400">Knocknacarra</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-mono text-[10px] uppercase text-cyan-500 mb-6 tracking-widest">Tech Ops</h4>
                        <ul className="space-y-3 text-sm text-cyan-100/40 font-bold uppercase italic">
                            <li><a href="#" className="hover:text-cyan-400">Leak Detection</a></li>
                            <li><a href="#" className="hover:text-cyan-400">Boiler Repair</a></li>
                            <li><a href="#" className="hover:text-cyan-400">Emergency Callout</a></li>
                            <li><a href="#" className="hover:text-cyan-400">Maintenance</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-cyan-900/30 flex flex-col md:flex-row justify-between gap-6">
                    <div className="font-mono text-[9px] text-cyan-500/30 uppercase tracking-[0.3em]">
                        © 2026 Galway Plumbing Emergency // All Rights Active
                    </div>
                    <div className="flex gap-8 font-mono text-[9px] text-cyan-500/60 uppercase">
                        <span>System Status: Online</span>
                        <span>Galway Core: Connected</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterDiagnostic;
