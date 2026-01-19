'use client';

import React, { useState } from 'react';

const PressureFAQ = () => {
    const faqs = [
        { q: 'How fast is the emergency response?', a: 'Our hydraulic dispatch system typically identifies and routes the nearest technician within 8 minutes of signal confirmation.' },
        { q: 'Do you cover all Galway sectors?', a: 'Yes. From the Salthill coast to the Oranmore industrial periphery, our grid coverage is 100% operational.' },
        { q: 'Is the pricing calibrated for emergencies?', a: 'We use a logic-based pricing system. You will receive a diagnostic quote before any pressurized repairs are initiated.' },
        { q: 'What failures do you specialize in?', a: 'High-pressure leaks, boiler system collapses, mainline blockages, and structural pipe failures.' }
    ];

    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="py-24 px-6 relative border-t border-cyan-900/30">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-black uppercase text-white mb-12 italic tracking-tight text-center">
                    System <span className="text-cyan-400">Knowledge Base</span>
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-cyan-900/20 bg-slate-900/30 overflow-hidden">
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full p-6 text-left flex justify-between items-center group"
                            >
                                <span className="font-bold text-white uppercase text-sm group-hover:text-cyan-400 transition-colors">
                                    {faq.q}
                                </span>
                                <span className={`text-cyan-500 transition-transform ${open === i ? 'rotate-45' : ''}`}>+</span>
                            </button>
                            {open === i && (
                                <div className="px-6 pb-6 text-cyan-100/40 text-sm leading-relaxed border-t border-cyan-900/10 pt-4">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PressureFAQ;
