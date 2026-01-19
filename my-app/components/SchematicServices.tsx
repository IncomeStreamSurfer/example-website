'use client';

import React from 'react';

const SchematicServices = () => {
    const services = [
        { id: 'S-01', name: 'Emergency Leak Repair', desc: 'Critical fluid containment and structural sealing.' },
        { id: 'S-02', name: 'Boiler Restoration', desc: 'High-pressure thermal system diagnostics.' },
        { id: 'S-03', name: 'Hydraulic Unblocking', desc: 'Flow restoration through high-velocity jetting.' },
        { id: 'S-04', name: 'Pipe Re-engineering', desc: 'Complete structural replacement of failed sections.' },
        { id: 'S-05', name: 'Heating Optimization', desc: 'System-wide thermal efficiency calibration.' },
        { id: 'S-06', name: 'Burst Pipe Response', desc: 'Rapid isolation and flood mitigation.' }
    ];

    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-xl">
                        <div className="font-mono text-[10px] uppercase tracking-widest text-cyan-500 mb-4 px-1 border-l-2 border-cyan-500">Service Directory // V 4.2</div>
                        <h2 className="text-5xl md:text-6xl font-black uppercase text-white italic tracking-tighter">
                            Operational <span className="text-cyan-400">Capabilities</span>
                        </h2>
                    </div>
                    <div className="hidden md:block text-right">
                        <div className="font-mono text-[10px] text-cyan-500/40 uppercase">Global Success Rate</div>
                        <div className="text-3xl font-black text-white italic">99.8%</div>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                    {services.map((service, i) => (
                        <div key={i} className="group relative bg-slate-900/30 border border-cyan-900/20 p-8 hover:bg-cyan-400/5 transition-all cursor-default">
                            <div className="font-mono text-[10px] text-cyan-600 mb-6">{service.id}</div>
                            <h3 className="text-xl font-bold uppercase text-white mb-4 group-hover:text-cyan-400 transition-colors">{service.name}</h3>
                            <p className="text-cyan-100/40 text-sm leading-relaxed mb-12 h-12 overflow-hidden">
                                {service.desc}
                            </p>

                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-mono uppercase text-cyan-500 underline decoration-cyan-950 group-hover:decoration-cyan-500 transition-all">View Protocol</span>
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400">→</span>
                            </div>

                            {/* Box corner accents */}
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-500/0 group-hover:border-cyan-500/40 transition-all"></div>
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-500/0 group-hover:border-cyan-500/40 transition-all"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SchematicServices;
