'use client';

import React from 'react';

const SystemReviews = () => {
    const reviews = [
        { name: 'O\'Connor, K.', location: 'Salthill', rate: '5.0', report: 'Rapid containment of burst radiator. Structural integrity restored in under 45 minutes.' },
        { name: 'Walsh, J.', location: 'Oranmore', rate: '4.9', report: 'Complex heating manifold re-configuration. Precision calibration and thermal output maximized.' },
        { name: 'Byrne, M.', location: 'Galway City', rate: '5.0', report: 'Mainline blockage eradicated. High-velocity jetting successful. System status: Clear.' }
    ];

    return (
        <section className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="font-mono text-[10px] uppercase text-cyan-500 mb-12 text-center tracking-[0.4em]">Verified Incident Logs // Feedback</div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {reviews.map((rev, i) => (
                        <div key={i} className="bg-slate-900/50 border border-cyan-900/20 p-8 relative group">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-white font-bold uppercase">{rev.name}</h3>
                                    <span className="font-mono text-[9px] text-cyan-500/60 uppercase">{rev.location} // SECTOR</span>
                                </div>
                                <div className="text-xl font-black italic text-cyan-400">{rev.rate}</div>
                            </div>

                            <div className="bg-slate-950 p-4 border-l-2 border-cyan-500/40 mb-12">
                                <p className="text-cyan-100/50 text-sm leading-relaxed italic">
                                    "{rev.report}"
                                </p>
                            </div>

                            <div className="font-mono text-[8px] uppercase tracking-widest text-cyan-950 group-hover:text-cyan-500 transition-colors">
                                Report Serial: #EP-{Math.floor(Math.random() * 10000)}
                            </div>

                            {/* Detail lines */}
                            <div className="absolute top-0 right-0 w-8 h-px bg-cyan-500/0 group-hover:bg-cyan-500/40 transition-all"></div>
                            <div className="absolute top-0 right-0 w-px h-8 bg-cyan-500/0 group-hover:bg-cyan-500/40 transition-all"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SystemReviews;
