"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeaderBar from "@/components/HeaderBar";
import { 
  ArrowLeft, 
  Search, 
  HardHat, 
  Map, 
  ShieldCheck, 
  BarChart3, 
  FileSearch, 
  Users2,
  Compass,
  Layers,
  Ruler,
  FileDown,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export default function DiscoveryPage() {
  
  // Professional Download Handler
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/documents/feasibility-sample.pdf';
    link.setAttribute('download', 'Feasibility_Report_Sample.pdf');
    document.body.appendChild(link);
    link.click();
    link.parentNode?.removeChild(link);
  };

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <HeaderBar />
      
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-32">
        {/* Navigation - Hidden on Mobile to avoid overlap with new floaters */}
        <Link href="/" className="hidden md:inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity mb-12">
          <ArrowLeft className="w-3 h-3" /> Back to Home
        </Link>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row md:items-center gap-8 mb-16">
          <div className="w-fit p-6 rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-2xl shadow-blue-500/20">
            <Search className="w-10 h-10" />
          </div>
          <div>
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.5em] opacity-30 mb-2">Technical Phase 01</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">
              Discovery & <br />Feasibility
            </h1>
          </div>
        </div>

        {/* Hero Image Block - Colorful */}
        <div className="relative w-full h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden mb-24 border border-foreground/10">
          <Image 
            src="/process/discovery/hero-discovery-v2.jpg" 
            alt="Site Surveying and Discovery" 
            fill 
            priority
            className="object-cover transition-transform duration-1000 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40" />
          <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
            <div className="bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10">
               <p className="max-w-xs text-xs font-bold uppercase tracking-widest leading-relaxed text-white">
                 Field Investigation: <br />Analyzing topographical data & structural boundaries to prevent site-specific errors.
              </p>
            </div>
          </div>
        </div>

        {/* Deep Dive Introduction */}
        <div className="grid lg:grid-cols-12 gap-12 mb-32">
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-3xl font-black uppercase tracking-tight leading-tight">
              Precision starts in the <span className="text-blue-600">dirt, not the office.</span>
            </h2>
              <div className="space-y-6 text-lg opacity-80 leading-relaxed font-medium">
              <p>
                Discovery is the most critical phase of the construction lifecycle. It is where we perform the &quot;Post-Mortem of the Future&quot;—identifying potential points of failure before a single dollar is spent on materials. 
              </p>
              <p>
                From analyzing the load-bearing capacity of the substrate to auditing the local power grid&apos;s ability to support your new HVAC demands, we leave no stone unturned. Our mission is to eliminate the &quot;surprise&quot; element that typically plagues high-end custom builds.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 bg-foreground/5 rounded-[3rem] p-10 border border-foreground/10 flex flex-col justify-center">
            <div className="space-y-6">
              <h3 className="font-black uppercase text-xs tracking-widest opacity-40">Phase 01 Deliverables</h3>
              <div className="space-y-4">
                {[
                  { label: "Site Utility Mapping", icon: Layers },
                  { label: "Zoning Variance Analysis", icon: Map },
                  { label: "Structural Load Audit", icon: ShieldCheck },
                  { label: "Logistics Mobilization Plan", icon: Compass }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <item.icon className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
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
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-foreground/10 bg-muted">
              <Image 
                src="/process/discovery/zoning-map-v2.jpg" 
                alt="Zoning and Permitting" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
              />
            </div>
            <div>
              <h4 className="font-black uppercase text-base mb-2 flex items-center gap-3">
                <Map className="w-4 h-4 text-blue-500" /> Regulatory Intelligence
              </h4>
              <p className="text-sm opacity-60 leading-relaxed">
                We navigate the bureaucracy for you. Our team audits local building codes and historic preservation requirements to secure a frictionless permit path.
              </p>
            </div>
          </div>

          <div className="group space-y-6 lg:mt-12">
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-foreground/10 bg-muted">
              <Image 
                src="/process/discovery/site-analysis-v2.jpg" 
                alt="Technical Site Analysis" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
              />
            </div>
            <div>
              <h4 className="font-black uppercase text-base mb-2 flex items-center gap-3">
                <Ruler className="w-4 h-4 text-blue-500" /> Topographical Survey
              </h4>
              <p className="text-sm opacity-60 leading-relaxed">
                Using laser-scanning technology, we map the precise contours of your property to optimize foundation design and civil engineering.
              </p>
            </div>
          </div>

          <div className="group space-y-6">
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-foreground/10 bg-muted">
              <Image 
                src="/process/discovery/team-meeting-v2.jpg" 
                alt="Discovery Strategy Session" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
              />
            </div>
            <div>
              <h4 className="font-black uppercase text-base mb-2 flex items-center gap-3">
                <Users2 className="w-4 h-4 text-blue-500" /> Engineering Synergy
              </h4>
              <p className="text-sm opacity-60 leading-relaxed">
                A meeting of the minds between structural engineers and our project managers to ensure design intent remains within the laws of physics.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Footer Section */}
        <div className="rounded-[3rem] overflow-hidden bg-foreground text-background p-12 md:p-20 relative">
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8 opacity-40">
                <div className="h-[1px] w-12 bg-background"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">The Strategic Dossier</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase italic mb-12 leading-none">
              Data-Driven <br />Foundations.
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <p className="text-xl opacity-90 font-medium leading-relaxed">
                    The culmination of this phase is the <span className="text-blue-400 font-bold italic">Strategic Feasibility Dossier</span>—a master technical blueprint that eliminates ambiguity. 
                    Synthesizing every topographical variable and regulatory constraint into a clear path forward.
                </p>
                
                <button 
                  onClick={handleDownload}
                  className="group flex items-center gap-4 px-8 py-4 rounded-full bg-blue-600 text-white font-black uppercase text-[12px] tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/20 active:scale-95"
                >
                  <FileDown className="w-5 h-5 group-hover:bounce" />
                  Download Sample Dossier
                </button>
              </div>
              
              <div className="border-l border-white/10 pl-12 hidden md:block">
                <h5 className="font-black uppercase text-xs tracking-[0.3em] mb-6 opacity-30 italic">Audit Completion Checklist:</h5>
                <ul className="space-y-4 font-bold text-sm uppercase">
                    {[
                      "Sub-Surface Geotech Logs",
                      "Municipal Easement Maps",
                      "MEP Capacity Analysis",
                      "Logistics Risk Assessment"
                    ].map((text, i) => (
                      <li key={i} className="flex justify-between items-center group cursor-default">
                        <span className="group-hover:text-blue-400 transition-colors">{text}</span> 
                        <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[120px] pointer-events-none" />
        </div>
      </section>

      {/* MOBILE FLOATING NAV - Only visible on small screens */}
      <div className="md:hidden">
        {/* Floating Back Button */}
        <Link 
          href="/" 
          className="fixed left-4 top-1/2 -translate-y-1/2 z-[200] flex flex-col items-center gap-1 group"
        >
          <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-lg border border-white/20 flex items-center justify-center text-white shadow-xl animate-pulse-slow">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <span className="text-[7px] font-black uppercase tracking-tighter text-white/40">Home</span>
        </Link>

        {/* Floating Next Button */}
        <Link 
          href="/process/design" 
          className="fixed right-4 top-1/2 -translate-y-1/2 z-[200] flex flex-col items-center gap-1 group"
        >
          <div className="w-12 h-12 rounded-full bg-blue-600/80 backdrop-blur-lg border border-blue-400/30 flex items-center justify-center text-white shadow-[0_0_15px_rgba(37,99,235,0.5)] animate-pulse-slow">
            <ArrowRight className="w-5 h-5" />
          </div>
          <span className="text-[7px] font-black uppercase tracking-tighter text-blue-500">Design</span>
        </Link>
      </div>

      {/* LAPTOP NEXT STEP NAVIGATION - Original Design */}
      <div className="hidden md:flex fixed right-8 bottom-12 z-[100] flex-col items-end gap-2 group animate-in fade-in slide-in-from-right duration-1000">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500/60 group-hover:text-blue-500 transition-colors mr-2">
          Next Step: Design
        </p>
        <Link 
          href="/process/design"
          className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(37,99,235,0.7)] hover:scale-110 active:scale-95 transition-all duration-500 animate-pulse-slow"
        >
          <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" />
        </Link>
      </div>

      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}