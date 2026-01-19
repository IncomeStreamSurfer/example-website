'use client';

import React from 'react';

const PlumberCard = () => {
    return (
        <div className="hydraulic-container">
            <style dangerouslySetInnerHTML={{
                __html: `
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;500&family=Outfit:wght@700;900&display=swap');

        .hydraulic-container {
          --depth-blue: #0a1128;
          --pressure-cyan: #00f5ff;
          --grid-line: rgba(0, 245, 255, 0.15);
          --steel: #e0e6ed;
          --hazard-red: #ff3e3e;
          
          font-family: 'Outfit', sans-serif;
          background: var(--depth-blue);
          color: var(--steel);
          width: 420px;
          height: 560px;
          padding: 40px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0,0,0,0.8);
          border: 1px solid rgba(255,255,255,0.05);
        }

        /* Hydraulic Grid System */
        .hydraulic-container::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(var(--grid-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
          background-size: 20px 20px;
          z-index: 1;
        }

        /* Flowing Schematic Lines */
        .schematic-line {
          position: absolute;
          background: var(--pressure-cyan);
          opacity: 0.4;
          z-index: 2;
        }

        .line-v { width: 1px; height: 100%; top: 0; left: 40px; }
        .line-h { height: 1px; width: 100%; left: 0; top: 80px; }
        
        .pressure-node {
          position: absolute;
          width: 8px;
          height: 8px;
          background: var(--pressure-cyan);
          border-radius: 50%;
          top: 80px;
          left: 40px;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 15px var(--pressure-cyan);
          z-index: 3;
        }

        .content-wrap {
          position: relative;
          z-index: 10;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .emergency-status {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: 'JetBrains+Mono', monospace;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--pressure-cyan);
        }

        .pulse {
          width: 6px;
          height: 6px;
          background: var(--hazard-red);
          border-radius: 50%;
          animation: pressure-surge 1.5s infinite;
        }

        header h1 {
          font-size: 48px;
          line-height: 0.9;
          margin-top: 24px;
          text-transform: uppercase;
          font-weight: 900;
          background: linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.5) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .location-tag {
          font-family: 'JetBrains+Mono', monospace;
          background: rgba(0, 245, 255, 0.1);
          border: 1px solid var(--pressure-cyan);
          padding: 4px 12px;
          display: inline-block;
          margin-top: 16px;
          font-size: 12px;
        }

        .gauge-container {
          margin-top: 40px;
          border-left: 2px solid var(--pressure-cyan);
          padding-left: 20px;
        }

        .gauge-label {
          font-family: 'JetBrains+Mono', monospace;
          font-size: 10px;
          opacity: 0.6;
          margin-bottom: 8px;
          display: block;
        }

        .gauge-bar {
          height: 4px;
          background: rgba(255,255,255,0.1);
          width: 100%;
          position: relative;
        }

        .gauge-fill {
          position: absolute;
          height: 100%;
          background: var(--pressure-cyan);
          width: 85%;
          animation: needle-flicker 4s infinite ease-in-out;
        }

        .action-area {
          margin-top: auto;
        }

        .phone-display {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 24px;
          display: block;
          color: #fff;
        }

        .btn-call {
          width: 100%;
          background: var(--pressure-cyan);
          color: var(--depth-blue);
          border: none;
          padding: 20px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 2px;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .btn-call:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 245, 255, 0.3);
        }

        @keyframes pressure-surge {
          0% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 0 rgba(255, 62, 62, 0.4); }
          70% { transform: scale(1.5); opacity: 0.5; box-shadow: 0 0 0 10px rgba(255, 62, 62, 0); }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes needle-flicker {
          0%, 100% { width: 85%; }
          50% { width: 82%; }
          75% { width: 88%; }
        }

        /* Decorative "Pressurized" Overlay */
        .overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(circle at center, transparent 30%, rgba(10, 17, 40, 0.8) 100%);
          z-index: 5;
        }
      `}} />

            <div className="schematic-line line-v"></div>
            <div className="schematic-line line-h"></div>
            <div className="pressure-node"></div>
            <div className="overlay"></div>

            <div className="content-wrap">
                <header>
                    <div className="emergency-status">
                        <div className="pulse"></div>
                        System Status: Critical
                    </div>
                    <h1>Galway<br />Plumbing<br />Emergency</h1>
                    <div className="location-tag">Sector: G09-ROI</div>
                </header>

                <section className="gauge-container">
                    <span className="gauge-label">Response Velocity // MAX</span>
                    <div className="gauge-bar">
                        <div className="gauge-fill"></div>
                    </div>
                    <p style={{ fontSize: '14px', marginTop: '20px', lineHeight: '1.5', opacity: 0.8 }}>
                        High-pressure diagnostic and repair.
                        Dispatched from Galway City Center.
                        Awaiting connection...
                    </p>
                </section>

                <div className="action-area">
                    <span className="phone-display">+353 91 555 123</span>
                    <button className="btn-call">
                        Initiate Contact
                        <span>→</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlumberCard;
