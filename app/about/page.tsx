"use client";

import React, { useState } from "react";
import Link from "next/link";
import HeaderBar from "@/components/HeaderBar";
import FooterSection from "@/components/FooterSection"; // Standardized Component
import { 
  ShieldCheck, 
  ArrowRight,
  Quote,
  MousePointer2,
  Box,
  Layers,
  Fingerprint,
  ArrowDown,
  Gem,
  HardHat,
  Zap,
  Microscope
} from "lucide-react";

export default function AboutPage() {
  const [activeValue, setActiveValue] = useState(0);

  const values = [
    { 
      title: "Digital Twin Integration", 
      desc: "Every residence is built twice: once in a high-fidelity BIM environment and once on-site. We eliminate field errors before the first stone is laid using real-time 3D synchronization.",
      icon: Box,
      detail: "Millimetric accuracy via BIM & Digital Twin modeling."
    },
    { 
      title: "Material Traceability", 
      desc: "We curate the world’s finest inputs—from book-matched marble and solid brass to structural hardwood and engineered glass. Every material is traced from origin to final installation.",
      icon: Fingerprint,
      detail: "Full provenance for marble, timber, and alloys."
    },
    { 
      title: "Vertical Fabrication", 
      desc: "Unlike traditional contractors, we control the manufacturing. Our in-house CNC fabrication ensures architectural millwork and cabinetry integrate seamlessly with structural steel.",
      icon: Layers,
      detail: "Zero-tolerance CNC milling & laser alignment."
    },
    { 
      title: "The 50-Point Handover", 
      desc: "Our white-glove commissioning process includes a rigorous 50-point inspection ensuring every mechanical, structural, and aesthetic detail meets the Built Wright standard.",
      icon: ShieldCheck,
      detail: "Exceeding Ontario Building Code by 200%."
    }
  ];

  const specs = [
    { label: "Milling Tolerance", value: "±0.5mm", detail: "Aerospace-grade precision." },
    { label: "Structural Tech", value: "Laser-Guided", detail: "Perfect plumb & level alignment." },
    { label: "Design Sync", value: "BIM Level 3", detail: "Integrated structural coordination." },
    { label: "Project Focus", value: "Turnkey", detail: "From foundation to custom vanity." }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-orange-600 selection:text-white overflow-x-hidden">
      <HeaderBar />

      {/* SECTION 1: HERO */}
      <section className="relative h-[90vh] md:h-screen flex flex-col items-center justify-between pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/about/vision.jpg" 
            alt="BuildWright Vision" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl">
          <div className="flex justify-center mb-6">
            <span className="px-3 py-1 border border-orange-600/30 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-orange-600">
              Architecture & Fabrication
            </span>
          </div>
          <h1 className="text-4xl md:text-[9rem] font-black tracking-tighter uppercase italic leading-[0.9] mb-6 md:mb-8">
            Digital Mind. <br />
            <span className="text-orange-600">Artisan Heart.</span>
          </h1>
          <p className="text-lg md:text-2xl font-medium opacity-80 max-w-2xl mx-auto leading-tight md:leading-relaxed">
            Where high-fidelity engineering meets the timeless soul of master woodworking.
          </p>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-2 opacity-40 animate-bounce transition-opacity hover:opacity-100 cursor-default">
            <p className="text-[10px] font-black uppercase tracking-[0.3em]">Scroll to read</p>
            <ArrowDown className="w-4 h-4" />
        </div>
      </section>

      {/* SECTION 2: THE PHILOSOPHY */}
      <section className="py-20 md:py-40 px-6 bg-foreground/[0.01]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center md:text-left">
            <Quote className="hidden md:block w-16 h-16 text-orange-600 opacity-20 mb-8" />
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter italic leading-none mb-10">
              We build for the <span className="text-orange-600">One Percent</span> <br />of tolerance.
            </h2>
            <div className="grid md:grid-cols-2 gap-12 text-lg md:text-xl opacity-80 leading-relaxed font-light">
                <p>
                  Built Wright Construction Inc. was founded on the principle that luxury is a byproduct of precision. We have moved beyond "general contracting" into the realm of architectural fabrication. By merging BIM-integrated design with white-glove installation, we ensure that every custom home is a flawless execution of architectural intent.
                </p>
                <p>
                  From structural coordination to the final "click" of a custom-milled vanity drawer, our process is engineered. We don't just build houses; we curate permanent legacies using marble, brass, and hardwood, backed by aerospace-grade digital twin modeling.
                </p>
              </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SPECS */}
      <section className="py-12 md:py-20 px-4">
        <div className="mx-auto max-w-6xl grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {specs.map((spec, i) => (
            <div key={i} className="p-6 md:p-10 rounded-[1.5rem] border border-foreground/10 bg-foreground/[0.02] hover:border-orange-600/30 transition-colors">
              <Microscope className="w-5 h-5 text-orange-600 mb-6" />
              <h5 className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-1">{spec.label}</h5>
              <h4 className="text-2xl md:text-4xl font-black tracking-tighter mb-4">{spec.value}</h4>
              <p className="text-[10px] font-bold opacity-40 leading-tight uppercase">{spec.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: THE WRIGHT PROTOCOL */}
      <section className="transition-colors duration-700 py-20 md:py-32 bg-[#0a192f] dark:bg-[#050505] text-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic leading-none">
              The Wright <br /><span className="text-orange-500">Protocol.</span>
            </h2>
            <p className="max-w-md text-sm md:text-base opacity-60 font-medium uppercase tracking-wider mb-2">
              Our systematic approach to luxury residential development, from foundation to finish.
            </p>
          </div>
          
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div className="w-full space-y-3 md:space-y-4">
              {values.map((val, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveValue(idx)}
                  className={`w-full text-left p-6 md:p-8 rounded-2xl md:rounded-3xl border transition-all duration-300 ${activeValue === idx ? 'bg-orange-600 border-orange-600 scale-[1.02] shadow-xl' : 'bg-white/5 border-white/10 opacity-50 hover:opacity-80'}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 md:gap-6">
                      <span className="text-[9px] md:text-xs font-black opacity-40">STEP 0{idx + 1}</span>
                      <h4 className="text-lg md:text-2xl font-black uppercase tracking-tight">{val.title}</h4>
                    </div>
                    <val.icon className={`w-5 h-5 md:w-6 md:h-6 ${activeValue === idx ? 'scale-110' : ''}`} />
                  </div>
                </button>
              ))}
            </div>

            <div className="w-full space-y-8">
                <div className="relative p-8 md:p-12 bg-white/5 rounded-[2rem] md:rounded-[3rem] border border-white/10 backdrop-blur-xl min-h-[400px] flex flex-col justify-between shadow-2xl overflow-hidden">
                  <div>
                    <span className="inline-block px-3 py-1 bg-orange-600/20 text-orange-500 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-6 md:mb-8">Technical Deep Dive</span>
                    <h3 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-4 md:mb-6 leading-none">{values[activeValue].title}</h3>
                    <p className="text-base md:text-xl opacity-80 leading-relaxed font-medium">
                      {values[activeValue].desc}
                    </p>
                  </div>
                  <div className="mt-8 p-6 md:p-8 bg-orange-600 text-white rounded-2xl md:rounded-[2rem] flex items-center justify-between group">
                    <p className="text-[10px] md:text-sm font-black uppercase tracking-widest">{values[activeValue].detail}</p>
                    <MousePointer2 className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/20 blur-[120px] -z-10" />
                </div>

                <Link 
                  href="/process/discovery" 
                  className="group relative overflow-hidden flex items-center justify-center w-full py-6 bg-white/10 border border-white/10 rounded-2xl backdrop-blur-md transition-all duration-500 hover:border-orange-600/50 hover:bg-white/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600/0 via-orange-600/10 to-orange-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <span className="relative text-xs font-black uppercase tracking-[0.4em] text-white flex items-center gap-4">
                    Check Out Our Process <ArrowRight className="w-4 h-4 text-orange-600 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: SCOPE OF EXPERTISE */}
      <section className="py-20 md:py-32 px-6 border-t border-foreground/5">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-8xl font-black tracking-tighter uppercase italic leading-none mb-12 md:mb-24">
            Master <span className="opacity-20 text-orange-600">Scope.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Full-Scale Build", desc: "Turnkey luxury residential construction from excavation to completion.", icon: HardHat },
              { title: "Millwork Systems", desc: "Custom architectural cabinetry and luxury kitchens engineered in-house.", icon: Layers },
              { title: "Material Sourcing", desc: "Direct procurement of exotic hardwoods and custom-engineered glazing.", icon: Gem },
              { title: "Tech Coordination", desc: "Seamless integration of smart-home systems and mechanical engineering.", icon: Zap },
            ].map((item, idx) => (
              <div key={idx} className="group p-8 rounded-3xl border border-foreground/5 bg-foreground/[0.01] hover:bg-foreground hover:text-background transition-all duration-500">
                <item.icon className="w-10 h-10 text-orange-600 mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-black uppercase mb-3 italic tracking-tight">{item.title}</h4>
                <p className="text-sm opacity-60 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}