"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import HeaderBar from "@/components/HeaderBar";
import { 
  ArrowLeft, 
  HardHat, 
  Navigation, 
  CheckCircle2, 
  Maximize2, 
  Map, 
  Construction,
  Hammer,
  ArrowRight,
  ArrowDownToLine
} from "lucide-react";

export default function InstallationPage() {
  const router = useRouter();
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    
    const storedPath = sessionStorage.getItem("prev_bw_path");
    if (storedPath) {
      setPrevPath(storedPath);
    }

    if (document.referrer && !document.referrer.includes('/process/installation')) {
       sessionStorage.setItem("prev_bw_path", document.referrer);
    }
  }, []);

  const handleReturn = (e: React.MouseEvent) => {
    e.preventDefault();
    // If we have a stored path, go there, otherwise go home
    router.push(prevPath);
  };
  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/documents/installation-guide.pdf';
    link.setAttribute('download', 'Site_Installation_Protocol.pdf');
    document.body.appendChild(link);
    link.click();
    link.parentNode?.removeChild(link);
  };

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <HeaderBar />
      
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-32">
        {/* Top Navigation - Hidden on mobile */}
        <button onClick={handleReturn} className="hidden md:inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity mb-12">
          <ArrowLeft className="w-3 h-3" /> Back to Previous
        </button>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row md:items-center gap-8 mb-16">
          <div className="w-fit p-6 rounded-[2.5rem] bg-gradient-to-br from-emerald-700 to-teal-600 text-white shadow-2xl shadow-emerald-500/20">
            <HardHat className="w-10 h-10" />
          </div>
          <div>
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.5em] opacity-30 mb-2">Technical Phase 04</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">
              On-Site <br />Installation
            </h1>
          </div>
        </div>

        {/* Hero Video Block */}
        <div className="relative w-full mb-6">
          <div className="relative w-full h-[300px] md:h-[550px] rounded-[3rem] overflow-hidden border border-white/10 bg-black shadow-2xl">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover scale-[1.02]" 
            >
              <source src="/process/installation/installation-hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[3rem] pointer-events-none" />
          </div>
          
          <div className="mt-6 ml-6 border-l-2 border-emerald-500/30 pl-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 mb-1">Final Execution</h4>
            <p className="max-w-xl text-xs font-bold uppercase tracking-widest leading-relaxed opacity-60">
              The seamless transition of prefabricated timber components from our studio to your architectural space.
            </p>
          </div>
        </div>

        {/* Deep Dive Introduction */}
        <div className="grid lg:grid-cols-12 gap-12 mt-24 mb-32">
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-3xl font-black uppercase tracking-tight leading-tight">
              A symphony of <span className="text-emerald-700">fit and finish.</span>
            </h2>
            <div className="space-y-6 text-lg opacity-80 leading-relaxed font-medium">
              <p>
                Installation is the final step in the BuildWright journey. Our on-site teams work with white-glove precision to ensure that every pre-fabricated wood component is integrated perfectly into the building’s structure.
              </p>
              <p>
                Because we manufacture off-site with zero-tolerance precision, the on-site phase is fast, clean, and quiet. We don&apos;t &quot;construct&quot; on your site; we assemble a masterpiece with clinical accuracy.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 bg-foreground/5 rounded-[3rem] p-10 border border-foreground/10 flex flex-col justify-center">
            <div className="space-y-6">
              <h3 className="font-black uppercase text-xs tracking-widest opacity-40">Phase 04 Deliverables</h3>
              <div className="space-y-4">
                {[
                  { label: "White-Glove Site Logistics", icon: Map },
                  { label: "Precision Timber Assembly", icon: Hammer },
                  { label: "On-Site Finish Refinement", icon: Maximize2 },
                  { label: "Final Quality Handover", icon: Navigation }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <item.icon className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-sm uppercase tracking-tight">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Visual Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          <div className="group space-y-6">
            <div className="rounded-[2.5rem] overflow-hidden border border-foreground/10 bg-muted">
              <img 
                src="/process/installation/onsite-fitting.jpg" 
                alt="Precision Fitting" 
                className="w-full h-auto block group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div>
              <h4 className="font-black uppercase text-base mb-2 flex items-center gap-3">
                <Construction className="w-4 h-4 text-emerald-600" /> Site Integration
              </h4>
              <p className="text-sm opacity-60 leading-relaxed">
                Our installers treat your home like a gallery, using specialized protection and dust-free assembly methods.
              </p>
            </div>
          </div>

          <div className="group space-y-6 lg:mt-12">
            <div className="rounded-[2.5rem] overflow-hidden border border-foreground/10 bg-muted">
              <img 
                src="/process/installation/site-management.jpg" 
                alt="Site Management" 
                className="w-full h-auto block group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div>
              <h4 className="font-black uppercase text-base mb-2 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Expert Oversight
              </h4>
              <p className="text-sm opacity-60 leading-relaxed">
                Every joint and seam is inspected by a project lead to ensure it matches the 3D digital twin perfectly.
              </p>
            </div>
          </div>

          <div className="group space-y-6">
            <div className="rounded-[2.5rem] overflow-hidden border border-foreground/10 bg-muted">
              <img 
                src="/process/installation/final-detail.jpg" 
                alt="Final Detail" 
                className="w-full h-auto block group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div>
              <h4 className="font-black uppercase text-base mb-2 flex items-center gap-3">
                <Maximize2 className="w-4 h-4 text-emerald-600" /> Lasting Quality
              </h4>
              <p className="text-sm opacity-60 leading-relaxed">
                The final result is a seamless architectural statement where material and space become one.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Footer Section */}
        <div className="rounded-[3rem] overflow-hidden bg-foreground text-background p-12 md:p-20 relative">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase italic mb-12 leading-none">
              Perfectly <br />Executed.
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <p className="text-xl opacity-90 font-medium leading-relaxed">
                    Access our <span className="text-emerald-400 font-bold italic">Installation Protocol</span> to see how we maintain site integrity during the final build.
                </p>
                <button 
                  onClick={handleDownload}
                  className="group flex items-center gap-4 px-8 py-4 rounded-full bg-emerald-700 text-white font-black uppercase text-[12px] tracking-widest hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-900/20 active:scale-95"
                >
                  <ArrowDownToLine className="w-5 h-5 group-hover:bounce" />
                  Download Site Guide
                </button>
              </div>
              <div className="border-l border-white/10 pl-12 hidden md:block">
                <h5 className="font-black uppercase text-xs tracking-[0.3em] mb-6 opacity-30 italic">Handover Checklist:</h5>
                <ul className="space-y-4 font-bold text-sm uppercase">
                    {[
                      "Structural Stability Audit",
                      "Finish Surface Protection",
                      "Hardware Calibration",
                      "Client Walkthrough"
                    ].map((text, i) => (
                      <li key={i} className="flex justify-between items-center group cursor-default">
                        <span className="group-hover:text-emerald-400 transition-colors">{text}</span> 
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-600/10 blur-[120px] pointer-events-none" />
        </div>
      </section>

      {/* MOBILE SIDE NAV */}
      <div className="md:hidden">
        <Link 
          href="/process/fabrication" 
          className="fixed left-4 top-1/2 -translate-y-1/2 z-[200] flex flex-col items-center gap-1"
        >
          <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-lg border border-white/20 flex items-center justify-center text-white shadow-xl animate-pulse-slow">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <span className="text-[7px] font-black uppercase tracking-tighter text-white/40">Fabrication</span>
        </Link>

        <button 
          onClick={handleReturn} 
          className="fixed right-4 top-1/2 -translate-y-1/2 z-[200] flex flex-col items-center gap-1"
        >
          <div className="w-12 h-12 rounded-full bg-emerald-700/80 backdrop-blur-lg border border-emerald-400/30 flex items-center justify-center text-white shadow-[0_0_15px_rgba(5,150,105,0.5)] animate-pulse-slow">
            <ArrowRight className="w-5 h-5" />
          </div>
          <span className="text-[7px] font-black uppercase tracking-tighter text-emerald-500">Return</span>
        </button>
      </div>

      {/* LAPTOP FLOATING NAVIGATION */}
      <div className="hidden md:flex fixed right-8 bottom-12 z-[100] flex-col items-end gap-6 animate-in fade-in slide-in-from-right duration-1000">
        <div className="flex flex-col items-end gap-2 group">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/20 group-hover:text-foreground/40 transition-colors mr-2">
            Previous Step: Fabrication
          </p>
          <Link href="/process/fabrication" className="flex items-center justify-center w-16 h-16 rounded-full border border-foreground/10 bg-background text-foreground shadow-xl hover:scale-110 active:scale-95 transition-all duration-500">
            <ArrowLeft className="w-8 h-8 group-hover:-translate-x-2 transition-transform duration-300" />
          </Link>
        </div>

        <div className="flex flex-col items-end gap-2 group">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500/60 group-hover:text-emerald-500 transition-colors mr-2">
            Final: Return to Previous
          </p>
          <button onClick={handleReturn} className="flex items-center justify-center w-16 h-16 rounded-full bg-emerald-700 text-white shadow-xl hover:scale-110 active:scale-95 transition-all duration-500 animate-pulse-slow">
            <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
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