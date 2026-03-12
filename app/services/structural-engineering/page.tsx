"use client";

import React, { useLayoutEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, Home, Paintbrush, ChefHat, Layout, TreePine, Briefcase, Activity, Zap, ClipboardCheck, Leaf,
  ChevronDown, ArrowRight, ShieldCheck, Drill, Hammer, BrickWall, MoveDown, Droplets
} from "lucide-react";
import HeaderBar from "@/components/HeaderBar";

// COMPLETE LIST OF ALL 10 DIVISIONS
const navigationDivisions = [
  { title: "Custom Luxury Homes", slug: "custom-luxury-homes", icon: Home },
  { title: "High-End Renovations", slug: "high-end-renovations", icon: Paintbrush },
  { title: "Designer Kitchen & Bath", slug: "designer-kitchen-bath", icon: ChefHat },
  { title: "Architectural Millwork", slug: "custom-cabinetry", icon: Layout },
  { title: "Outdoor Environments", slug: "outdoor-living", icon: TreePine },
  { title: "Commercial Fit-Outs", slug: "commercial-office", icon: Briefcase },
  { title: "Structural Systems", slug: "structural-engineering", icon: Activity },
  { title: "Smart Infrastructure", slug: "smart-home-mechanical", icon: Zap },
  { title: "Project Management", slug: "project-management", icon: ClipboardCheck },
  { title: "Sustainable Building", slug: "sustainable-building", icon: Leaf },
];

const subCategories = [
  {
    id: "i",
    title: "Foundation Construction",
    icon: Drill,
    description: "Precision-engineered foundation systems including poured concrete, ICF (Insulated Concrete Forms), and specialized underpinning for existing structures."
  },
  {
    id: "ii",
    title: "Framing (Wood & Steel)",
    icon: Hammer,
    description: "Expert structural skeleton assembly. We specialize in both traditional heavy timber framing and modern light-gauge steel for superior strength and fire resistance."
  },
  {
    id: "iii",
    title: "Concrete Work",
    icon: BrickWall,
    description: "From structural slabs and retaining walls to architectural polished concrete finishes. We ensure maximum PSI strength and aesthetic precision."
  },
  {
    id: "iv",
    title: "Load-Bearing Wall Removal",
    icon: MoveDown,
    description: "Safely creating open-concept layouts. We manage the temporary shoring, steel beam (LVL/I-Beam) installation, and structural sign-offs."
  },
  {
    id: "v",
    title: "Waterproofing & Structural Reinforcement",
    icon: Droplets,
    description: "Comprehensive moisture protection and carbon fiber reinforcement systems to protect and strengthen the integrity of your building's envelope."
  }
];

export default function StructuralEngineeringPage() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans relative overflow-x-hidden">
      <HeaderBar />

      {/* FIXED HEADER SWITCHER */}
      <div className="fixed top-0 left-0 right-0 z-[110] bg-[var(--background)]/90 backdrop-blur-xl border-b border-foreground/5 px-6 py-4 md:py-6">
        <div className="mx-auto max-w-7xl flex justify-between items-center">
          <div className="relative">
            <button onClick={() => setIsNavOpen(!isNavOpen)} className="flex flex-col items-start group text-left">
               <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-slate-500 animate-pulse" />
                 <div className="flex items-center gap-2">
                   <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Structural Systems</span>
                   <ChevronDown size={14} className={`text-slate-500 transition-transform duration-300 ${isNavOpen ? 'rotate-180' : ''}`} />
                 </div>
               </div>
               <span className="ml-5 text-[8px] font-bold uppercase tracking-widest text-foreground/40">Click to view more</span>
            </button>

            <AnimatePresence>
              {isNavOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-[130%] left-0 w-[280px] md:w-[350px] bg-[var(--background)] border border-foreground/10 rounded-[2rem] shadow-2xl overflow-hidden backdrop-blur-2xl z-[120]"
                >
                  <div className="p-3 grid grid-cols-1 gap-1 max-h-[60vh] overflow-y-auto">
                    {navigationDivisions.map((nav) => (
                      <Link 
                        key={nav.slug}
                        href={`/services/${nav.slug}`}
                        className={`flex items-center gap-4 p-3 rounded-xl transition-all ${nav.slug === 'structural-engineering' ? 'bg-slate-500 text-white' : 'hover:bg-foreground/5'}`}
                        onClick={() => setIsNavOpen(false)}
                      >
                        <nav.icon size={16} className={nav.slug === 'structural-engineering' ? 'text-white' : 'text-slate-500'} />
                        <span className="text-[10px] font-bold uppercase tracking-tight">{nav.title}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/services" className="flex items-center gap-2 bg-foreground/5 hover:bg-slate-500 hover:text-white p-2 md:px-4 md:py-2 rounded-full transition-all">
            <X size={20} />
          </Link>
        </div>
      </div>

      {/* HERO SECTION - Immediate Rendering */}
      <section className="relative pt-32 md:pt-48 pb-16 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-[8rem] font-black tracking-tighter uppercase italic leading-[0.8] mb-8">
              Structural <br /> <span className="text-slate-500 font-outline-2">Systems</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl opacity-70 leading-relaxed font-medium border-l-4 border-slate-500 pl-6">
              The bones of brilliance. We provide high-capacity structural engineering and foundation solutions that ensure the longevity of every build.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SUB-CATEGORY GRID - STABLE LOAD */}
      <section className="py-12 px-6 pb-40 min-h-screen">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-4">
            {subCategories.map((sub, index) => {
              const isPriority = index < 2; 
              return (
                <motion.div 
                  key={sub.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isPriority ? { opacity: 1, y: 0 } : undefined}
                  whileInView={!isPriority ? { opacity: 1, y: 0 } : undefined}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: isPriority ? index * 0.1 : 0 }}
                  className="group relative bg-foreground/[0.02] border border-foreground/5 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 hover:bg-foreground/[0.04] transition-all"
                >
                  <div className="relative z-10 grid md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-1 flex flex-col items-center gap-4">
                      <span className="text-slate-500 font-black italic text-xl">0{index + 1}</span>
                      <div className="p-4 rounded-2xl bg-slate-500 text-white shadow-xl">
                        <sub.icon size={24} />
                      </div>
                    </div>

                    <div className="md:col-span-7 space-y-4">
                      <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-slate-500">
                        {sub.title}
                      </h3>
                      <p className="text-base md:text-lg opacity-60 leading-relaxed font-medium">
                        {sub.description}
                      </p>
                    </div>

                    <div className="md:col-span-4 flex md:justify-end md:items-center h-full">
                      <div className="flex items-center gap-4 px-6 py-3 rounded-full border border-foreground/10 bg-background/50">
                        <ShieldCheck className="w-4 h-4 text-slate-500" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Engineer Certified</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-20 flex justify-center border-t border-foreground/5 pt-12">
            <Link href="/contact" className="bg-slate-500 text-white px-10 py-6 rounded-full font-black uppercase text-[12px] tracking-[0.2em] shadow-2xl">
              Request Assessment <ArrowRight className="inline ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .font-outline-2 {
          -webkit-text-stroke: 1px var(--foreground);
          color: transparent;
        }
      `}</style>
    </main>
  );
}