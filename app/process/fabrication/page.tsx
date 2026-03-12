"use client";

import React from "react";
import Link from "next/link";
import HeaderBar from "@/components/HeaderBar";
import { 
  ArrowLeft, 
  Hammer, 
  Trees, 
  Scaling, 
  ShieldCheck, 
  Component, 
  Factory, 
  Ruler,
  ArrowRight,
  ArrowDownToLine,
  CheckCircle2
} from "lucide-react";

export default function FabricationPage() {
  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/documents/fabrication-standards.pdf';
    link.setAttribute('download', 'Fabrication_Quality_Standards.pdf');
    document.body.appendChild(link);
    link.click();
    link.parentNode?.removeChild(link);
  };

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <HeaderBar />
      
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-32">
        {/* Top Navigation - Hidden on mobile */}
        <Link href="/" className="hidden md:inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity mb-12">
          <ArrowLeft className="w-3 h-3" /> Back to Home
        </Link>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row md:items-center gap-8 mb-16">
          <div className="w-fit p-6 rounded-[2.5rem] bg-gradient-to-br from-orange-600 to-amber-500 text-white shadow-2xl shadow-orange-500/20">
            <Hammer className="w-10 h-10" />
          </div>
          <div>
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.5em] opacity-30 mb-2">Technical Phase 03</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">
              Precision <br />Fabrication
            </h1>
          </div>
        </div>

        {/* Hero Video Block - PERFECT FIT NO BLACK EDGES */}
        <div className="relative w-full mb-6">
          <div className="relative w-full h-[300px] md:h-[550px] rounded-[3rem] overflow-hidden border border-white/10 bg-black shadow-2xl">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover scale-[1.02]" 
            >
              <source src="/process/fabrication/fabrication-hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[3rem] pointer-events-none" />
          </div>
          
          <div className="mt-6 ml-6 border-l-2 border-orange-500/30 pl-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500 mb-1">Off-Site Timber Studio</h4>
            <p className="max-w-xl text-xs font-bold uppercase tracking-widest leading-relaxed opacity-60">
              Utilizing precision milling and master joinery to create architectural timber components that exceed standard building tolerances.
            </p>
          </div>
        </div>

        {/* Deep Dive Introduction */}
        <div className="grid lg:grid-cols-12 gap-12 mt-24 mb-32">
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-3xl font-black uppercase tracking-tight leading-tight">
              Where the digital twin becomes <span className="text-orange-600">physical reality.</span>
            </h2>
            <div className="space-y-6 text-lg opacity-80 leading-relaxed font-medium">
              <p>
                Fabrication is where the rigorous planning of the Design phase meets the physical world. We leverage a controlled workshop environment to manufacture structural elements, custom millwork, and specialized timber joinery with surgical precision.
              </p>
              <p>
                By shifting the majority of high-complexity work off-site, we eliminate weather-related delays and maintain a level of quality control that is impossible to achieve in an open construction site.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 bg-foreground/5 rounded-[3rem] p-10 border border-foreground/10 flex flex-col justify-center">
            <div className="space-y-6">
              <h3 className="font-black uppercase text-xs tracking-widest opacity-40">Phase 03 Deliverables</h3>
              <div className="space-y-4">
                {[
                  { label: "CNC Timber Milling", icon: Scaling },
                  { label: "Master Wood Joinery", icon: Trees },
                  { label: "Custom Millwork Shop Drawings", icon: Component },
                  { label: "Pre-Assembly Inspection", icon: ShieldCheck }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <item.icon className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-sm uppercase tracking-tight">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Visual Feature Grid - WOOD THEME RESTORED */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {/* Item 1 */}
          <div className="group space-y-6">
            <div className="rounded-[2.5rem] overflow-hidden border border-foreground/10 bg-muted">
              <img 
                src="/process/fabrication/workshop-precision.jpg" 
                alt="Artisan Woodworking Workshop" 
                className="w-full h-auto block group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div>
              <h4 className="font-black uppercase text-base mb-2 flex items-center gap-3">
                <Factory className="w-4 h-4 text-orange-500" /> Artisan Craft
              </h4>
              <p className="text-sm opacity-60 leading-relaxed">
                We combine traditional carpentry techniques with modern machinery to produce finishes that are as durable as they are beautiful.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="group space-y-6 lg:mt-12">
            <div className="rounded-[2.5rem] overflow-hidden border border-foreground/10 bg-muted">
              <img 
                src="/process/fabrication/wood-joinery.jpg" 
                alt="Master Wood Joinery" 
                className="w-full h-auto block group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div>
              <h4 className="font-black uppercase text-base mb-2 flex items-center gap-3">
                <Ruler className="w-4 h-4 text-orange-500" /> Material Integrity
              </h4>
              <p className="text-sm opacity-60 leading-relaxed">
                Our timber studio specializes in high-grade hardwoods and architectural accents, ensuring a seamless fit with the design intent.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="group space-y-6">
            <div className="rounded-[2.5rem] overflow-hidden border border-foreground/10 bg-muted">
              <img 
                src="/process/fabrication/timber-inspection.jpg" 
                alt="Quality Control Timber" 
                className="w-full h-auto block group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div>
              <h4 className="font-black uppercase text-base mb-2 flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-orange-500" /> QC Standards
              </h4>
              <p className="text-sm opacity-60 leading-relaxed">
                Each component undergoes a 12-point inspection before leaving our facility, guaranteeing zero defects upon site arrival.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Footer Section */}
        <div className="rounded-[3rem] overflow-hidden bg-foreground text-background p-12 md:p-20 relative">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase italic mb-12 leading-none">
              Manufactured <br />Excellence.
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <p className="text-xl opacity-90 font-medium leading-relaxed">
                    All components are logged into our <span className="text-orange-400 font-bold italic">Fabrication Manifest</span>, providing full traceability of materials and craftsmanship.
                </p>
                <button 
                  onClick={handleDownload}
                  className="group flex items-center gap-4 px-8 py-4 rounded-full bg-orange-600 text-white font-black uppercase text-[12px] tracking-widest hover:bg-orange-500 transition-all shadow-xl shadow-orange-900/20 active:scale-95"
                >
                  <ArrowDownToLine className="w-5 h-5 group-hover:bounce" />
                  Download Quality Logs
                </button>
              </div>
              <div className="border-l border-white/10 pl-12 hidden md:block">
                <h5 className="font-black uppercase text-xs tracking-[0.3em] mb-6 opacity-30 italic">Fabrication Checklist:</h5>
                <ul className="space-y-4 font-bold text-sm uppercase">
                    {[
                      "Moisture Content Audit",
                      "CNC Path Verification",
                      "Finish Adhesion Audit",
                      "Grain Match Inspection"
                    ].map((text, i) => (
                      <li key={i} className="flex justify-between items-center group cursor-default">
                        <span className="group-hover:text-orange-400 transition-colors">{text}</span> 
                        <CheckCircle2 className="w-4 h-4 text-orange-400" />
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-600/10 blur-[120px] pointer-events-none" />
        </div>
      </section>

      {/* MOBILE FLOATING NAV - Only visible on small screens */}
      <div className="md:hidden">
        {/* Floating Back Button */}
        <Link 
          href="/process/design" 
          className="fixed left-4 top-1/2 -translate-y-1/2 z-[200] flex flex-col items-center gap-1 group"
        >
          <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-lg border border-white/20 flex items-center justify-center text-white shadow-xl animate-pulse-slow">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <span className="text-[7px] font-black uppercase tracking-tighter text-white/40">Design</span>
        </Link>

        {/* Floating Next Button */}
        <Link 
          href="/process/installation" 
          className="fixed right-4 top-1/2 -translate-y-1/2 z-[200] flex flex-col items-center gap-1 group"
        >
          <div className="w-12 h-12 rounded-full bg-orange-600/80 backdrop-blur-lg border border-orange-400/30 flex items-center justify-center text-white shadow-[0_0_15px_rgba(249,115,22,0.5)] animate-pulse-slow">
            <ArrowRight className="w-5 h-5" />
          </div>
          <span className="text-[7px] font-black uppercase tracking-tighter text-orange-500">Installation</span>
        </Link>
      </div>

      {/* LAPTOP FLOATING NAVIGATION */}
      <div className="hidden md:flex fixed right-8 bottom-12 z-[100] flex-col items-end gap-6">
        <div className="flex flex-col items-end gap-2 group">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/20 group-hover:text-foreground/40 transition-colors mr-2">
            Previous Step: Design
          </p>
          <Link href="/process/design" className="flex items-center justify-center w-16 h-16 rounded-full border border-foreground/10 bg-background text-foreground shadow-xl hover:scale-110 active:scale-95 transition-all duration-500">
            <ArrowLeft className="w-8 h-8 group-hover:-translate-x-2 transition-transform duration-300" />
          </Link>
        </div>

        <div className="flex flex-col items-end gap-2 group">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500/60 group-hover:text-orange-500 transition-colors mr-2">
            Next Step: Installation
          </p>
          <Link href="/process/installation" className="flex items-center justify-center w-16 h-16 rounded-full bg-orange-600 text-white shadow-xl hover:scale-110 active:scale-95 transition-all duration-500 animate-pulse-slow">
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