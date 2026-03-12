"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeaderBar from "@/components/HeaderBar";
import { 
  ArrowLeft, 
  PenTool, 
  Box, 
  Layers, 
  Layout, 
  Maximize, 
  Monitor,
  MousePointer2,
  FileCode,
  CheckCircle2,
  ArrowRight,
  ArrowDownToLine
} from "lucide-react";

export default function DesignPage() {
  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/documents/design-spec-sample.pdf';
    link.setAttribute('download', 'Technical_Design_Specs.pdf');
    document.body.appendChild(link);
    link.click();
    link.parentNode?.removeChild(link);
  };

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <HeaderBar />
      
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-32">
        {/* Top Navigation - Hidden on Mobile */}
        <Link href="/" className="hidden md:inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity mb-12">
          <ArrowLeft className="w-3 h-3" /> Back to Home
        </Link>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row md:items-center gap-8 mb-16">
          <div className="w-fit p-6 rounded-[2.5rem] bg-gradient-to-br from-indigo-600 to-purple-500 text-white shadow-2xl shadow-indigo-500/20">
            <PenTool className="w-10 h-10" />
          </div>
          <div>
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.5em] opacity-30 mb-2">Technical Phase 02</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">
              Architectural <br />& 3D Design
            </h1>
          </div>
        </div>

        {/* Hero Video Block - PERFECT FIT NO BLACK BARS */}
        <div className="relative w-full mb-6">
          <div className="relative w-full rounded-[3rem] overflow-hidden border border-foreground/10 bg-black shadow-2xl">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full h-auto block"
            >
              <source src="/process/design/design-render-walkthrough.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="mt-6 ml-6 border-l-2 border-indigo-500/30 pl-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500 mb-1">Digital Twin Modeling</h4>
            <p className="max-w-xl text-xs font-bold uppercase tracking-widest leading-relaxed opacity-60">
              Virtualizing every structural joint and finish before fabrication begins to ensure zero-tolerance execution.
            </p>
          </div>
        </div>

        {/* Deep Dive Introduction */}
        <div className="grid lg:grid-cols-12 gap-12 mt-24 mb-32">
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-3xl font-black uppercase tracking-tight leading-tight">
              Bridging the gap between <span className="text-indigo-600">vision and physics.</span>
            </h2>
            <div className="space-y-6 text-lg opacity-80 leading-relaxed font-medium">
              <p>
                In the Design phase, we translate the raw data from Discovery into a high-fidelity digital reality. We build a &quot;Digital Twin&quot; of your project, simulating light patterns and structural loads in a virtual environment.
              </p>
              <p>
                Every millimetre is accounted for. By resolving spatial conflicts in 3D modeling, we prevent the costly mid-construction changes that typically derail premium builds.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 bg-foreground/5 rounded-[3rem] p-10 border border-foreground/10 flex flex-col justify-center">
            <div className="space-y-6">
              <h3 className="font-black uppercase text-xs tracking-widest opacity-40">Phase 02 Deliverables</h3>
              <div className="space-y-4">
                {[
                  { label: "High-Fidelity 3D Renders", icon: Monitor },
                  { label: "BIM Structural Modeling", icon: Box },
                  { label: "Material Specification Board", icon: Layers },
                  { label: "Millwork Shop Drawings", icon: Layout }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <item.icon className="w-5 h-5 text-indigo-500 group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-sm uppercase tracking-tight">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Visual Feature Grid - PERFECT IMAGE FITS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {/* Item 1 */}
          <div className="group space-y-6">
            <div className="rounded-[2.5rem] overflow-hidden border border-foreground/10 bg-muted">
              <img 
                src="/process/design/cad-technical-v2.jpg" 
                alt="CAD Technical Drawings" 
                className="w-full h-auto block group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div>
              <h4 className="font-black uppercase text-base mb-2 flex items-center gap-3">
                <FileCode className="w-4 h-4 text-indigo-500" /> Technical Precision
              </h4>
              <p className="text-sm opacity-60 leading-relaxed">
                 blue-prints are more than lines—they are data-rich documents that guide our craftsmen with zero-tolerance accuracy.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="group space-y-6 lg:mt-12">
            <div className="rounded-[2.5rem] overflow-hidden border border-foreground/10 bg-muted">
              <img 
                src="/process/design/3d-render-v2.jpg" 
                alt="Photorealistic Rendering" 
                className="w-full h-auto block group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div>
              <h4 className="font-black uppercase text-base mb-2 flex items-center gap-3">
                <Maximize className="w-4 h-4 text-indigo-500" /> Photorealistic Clarity
              </h4>
              <p className="text-sm opacity-60 leading-relaxed">
                Experience your space before it exists. We provide 4K renders that capture light, texture, and atmosphere.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="group space-y-6">
            <div className="rounded-[2.5rem] overflow-hidden border border-foreground/10 bg-muted">
              <img 
                src="/process/design/material-selection-v2.jpg" 
                alt="Material Curation" 
                className="w-full h-auto block group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div>
              <h4 className="font-black uppercase text-base mb-2 flex items-center gap-3">
                <MousePointer2 className="w-4 h-4 text-indigo-500" /> Curated Materials
              </h4>
              <p className="text-sm opacity-60 leading-relaxed">
                We coordinate with suppliers globally to select stones, woods, and metals that align with the architectural intent.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Footer Section */}
        <div className="rounded-[3rem] overflow-hidden bg-foreground text-background p-12 md:p-20 relative">
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8 opacity-40">
                <div className="h-[1px] w-12 bg-background"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">The Design Spec</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase italic mb-12 leading-none">
              Virtually <br />Constructed.
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <p className="text-xl opacity-90 font-medium leading-relaxed">
                    The Design phase concludes with a <span className="text-indigo-400 font-bold italic">Technical Specification Package</span>.
                </p>
                <button 
                  onClick={handleDownload}
                  className="group flex items-center gap-4 px-8 py-4 rounded-full bg-indigo-600 text-white font-black uppercase text-[12px] tracking-widest hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-900/20 active:scale-95"
                >
                  <ArrowDownToLine className="w-5 h-5 group-hover:bounce" />
                  Download Design Specs
                </button>
              </div>
              
              <div className="border-l border-white/10 pl-12 hidden md:block">
                <h5 className="font-black uppercase text-xs tracking-[0.3em] mb-6 opacity-30 italic">Design Milestone Checklist:</h5>
                <ul className="space-y-4 font-bold text-sm uppercase">
                    {[
                      "BIM Collision Detection",
                      "Ergonomic Flow Mapping",
                      "Lighting Simulation Logs",
                      "Final Aesthetic Approval"
                    ].map((text, i) => (
                      <li key={i} className="flex justify-between items-center group cursor-default">
                        <span className="group-hover:text-indigo-400 transition-colors">{text}</span> 
                        <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-600/10 blur-[120px] pointer-events-none" />
        </div>
      </section>

      {/* MOBILE FLOATING NAV - Mid-screen sides */}
      <div className="md:hidden">
        <Link 
          href="/process/discovery" 
          className="fixed left-4 top-1/2 -translate-y-1/2 z-[200] flex flex-col items-center gap-1 group"
        >
          <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-lg border border-white/20 flex items-center justify-center text-white shadow-xl">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <span className="text-[7px] font-black uppercase tracking-tighter text-white/40">Discovery</span>
        </Link>

        <Link 
          href="/process/fabrication" 
          className="fixed right-4 top-1/2 -translate-y-1/2 z-[200] flex flex-col items-center gap-1 group"
        >
          <div className="w-12 h-12 rounded-full bg-indigo-600/80 backdrop-blur-lg border border-indigo-400/30 flex items-center justify-center text-white shadow-[0_0_15px_rgba(79,70,229,0.5)] animate-pulse-slow">
            <ArrowRight className="w-5 h-5" />
          </div>
          <span className="text-[7px] font-black uppercase tracking-tighter text-indigo-500">Fabrication</span>
        </Link>
      </div>

      {/* LAPTOP FLOATING NAVIGATION */}
      <div className="hidden md:flex fixed right-8 bottom-12 z-[100] flex-col items-end gap-6 animate-in fade-in slide-in-from-right duration-1000">
        <div className="flex flex-col items-end gap-2 group">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/20 group-hover:text-foreground/40 transition-colors mr-2">
            Previous Step: Discovery
          </p>
          <Link 
            href="/process/discovery"
            className="flex items-center justify-center w-16 h-16 rounded-full border border-foreground/10 bg-background text-foreground shadow-xl hover:scale-110 active:scale-95 transition-all duration-500"
          >
            <ArrowLeft className="w-8 h-8 group-hover:-translate-x-2 transition-transform duration-300" />
          </Link>
        </div>

        <div className="flex flex-col items-end gap-2 group">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500/60 group-hover:text-indigo-500 transition-colors mr-2">
            Next Step: Fabrication
          </p>
          <Link 
            href="/process/fabrication"
            className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_35px_rgba(79,70,229,0.7)] hover:scale-110 active:scale-95 transition-all duration-500 animate-pulse-slow"
          >
            <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.9; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}