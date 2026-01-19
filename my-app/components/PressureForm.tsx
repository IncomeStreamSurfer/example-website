'use client';

import React, { useState } from 'react';
import { useMutation } from 'convex/react';
import { api } from '../convex/_generated/api';

const PressureForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        location: 'Galway City',
        serviceType: 'Emergency Leak',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const addSubmission = useMutation(api.submissions.addSubmission);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await addSubmission(formData);
            setIsSuccess(true);
            setFormData({
                name: '',
                phone: '',
                email: '',
                location: 'Galway City',
                serviceType: 'Emergency Leak',
                message: ''
            });
        } catch (err) {
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-24 px-6 bg-slate-950/50 border-y border-cyan-900/30 relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 className="text-4xl font-black uppercase tracking-tighter text-white mb-6 italic">
                            Emergency Intake <span className="text-cyan-400">// DISPATCH</span>
                        </h2>
                        <p className="text-cyan-100/60 leading-relaxed mb-8">
                            Initiate a high-priority service request. Our automated dispatch system will route your emergency to the nearest technician in the Galway area.
                        </p>

                        <div className="space-y-6">
                            {[
                                { label: 'Avg Dispatch Time', val: '8 mins' },
                                { label: 'Sector Coverage', val: '100% Galway' },
                                { label: 'Priority Level', val: 'MAXIMUM' }
                            ].map((stat, i) => (
                                <div key={i} className="flex justify-between items-end border-b border-cyan-900/40 pb-2">
                                    <span className="font-mono text-[10px] uppercase text-cyan-500/60">{stat.label}</span>
                                    <span className="font-bold text-white">{stat.val}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="bg-slate-900/50 p-8 border border-cyan-400/20 space-y-4">
                        {isSuccess ? (
                            <div className="py-12 text-center">
                                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-3xl">✓</span>
                                </div>
                                <h3 className="text-xl font-bold text-white uppercase mb-2">Signal Received</h3>
                                <p className="text-cyan-100/50 text-sm">Dispatch initiated. Stand by for contact.</p>
                                <button
                                    onClick={() => setIsSuccess(false)}
                                    className="mt-6 text-xs text-cyan-400 uppercase tracking-widest underline"
                                >
                                    New Request
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="font-mono text-[9px] uppercase tracking-widest text-cyan-500/60 px-1">Operator Name</label>
                                        <input
                                            required
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-slate-950 border border-cyan-900/50 p-3 text-white text-sm focus:border-cyan-400 outline-none transition-all"
                                            placeholder="Enter Name"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="font-mono text-[9px] uppercase tracking-widest text-cyan-500/60 px-1">Comms / Phone</label>
                                        <input
                                            required
                                            value={formData.phone}
                                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full bg-slate-950 border border-cyan-900/50 p-3 text-white text-sm focus:border-cyan-400 outline-none transition-all"
                                            placeholder="+353 ..."
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="font-mono text-[9px] uppercase tracking-widest text-cyan-500/60 px-1">Emergency Sector</label>
                                    <select
                                        value={formData.location}
                                        onChange={e => setFormData({ ...formData, location: e.target.value })}
                                        className="w-full bg-slate-950 border border-cyan-900/50 p-3 text-white text-sm focus:border-cyan-400 outline-none transition-all"
                                    >
                                        <option>Galway City Center</option>
                                        <option>Salthill</option>
                                        <option>Oranmore</option>
                                        <option>Renmore</option>
                                        <option>Knocknacarra</option>
                                    </select>
                                </div>
                                <div className="space-y-1">
                                    <label className="font-mono text-[9px] uppercase tracking-widest text-cyan-500/60 px-1">System Failure Type</label>
                                    <select
                                        value={formData.serviceType}
                                        onChange={e => setFormData({ ...formData, serviceType: e.target.value })}
                                        className="w-full bg-slate-950 border border-cyan-900/50 p-3 text-white text-sm focus:border-cyan-400 outline-none transition-all"
                                    >
                                        <option>Emergency Leak</option>
                                        <option>Boiler Malfunction</option>
                                        <option>Burst Pipe</option>
                                        <option>Blocked Drain</option>
                                    </select>
                                </div>
                                <div className="space-y-1">
                                    <label className="font-mono text-[9px] uppercase tracking-widest text-cyan-500/60 px-1">Incident Report</label>
                                    <textarea
                                        rows={3}
                                        value={formData.message}
                                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full bg-slate-950 border border-cyan-900/50 p-3 text-white text-sm focus:border-cyan-400 outline-none transition-all resize-none"
                                        placeholder="Brief description of emergency..."
                                    />
                                </div>
                                <button
                                    disabled={isSubmitting}
                                    className="w-full bg-cyan-400 text-slate-950 font-black uppercase py-4 tracking-widest disabled:opacity-50 transition-all hover:bg-white"
                                >
                                    {isSubmitting ? 'Transmitting...' : 'Confirm Signal'}
                                </button>
                            </>
                        )}
                    </form>
                </div>
            </div>

            {/* Schematic overlay */}
            <div className="absolute right-0 top-0 w-64 h-64 border-r border-t border-cyan-500/10 -translate-y-1/2 translate-x-1/2 rounded-full"></div>
        </section>
    );
};

export default PressureForm;
