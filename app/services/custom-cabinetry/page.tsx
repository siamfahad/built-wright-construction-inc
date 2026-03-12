"use client";

import React, { useLayoutEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, Home, Paintbrush, ChefHat, Layout, TreePine, Briefcase, Activity, Zap, ClipboardCheck, Leaf,
  ChevronDown, ArrowRight, ShieldCheck, DoorOpen, Box, Columns, PenTool
} from "lucide-react";
import HeaderBar from "@/components/HeaderBar";

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
    title: "Custom Kitchen Cabinets",
    icon: Layout,
    description: "Handcrafted cabinetry designed for ergonomic efficiency and aesthetic grandeur. We use premium hardwoods and high-end hardware for a lifetime of performance."
  },
  {
    id: "ii",
    title: "Bathroom Vanities",
    icon: Box,
    description: "Bespoke vanity solutions that maximize storage while elevating the design of your spa environment. Moisture-resistant finishes and custom stone integrations."
  },
  {
    id: "iii",
    title: "Walk-In Closets",
    icon: DoorOpen,
    description: "Personalized organizational systems. From integrated LED lighting to custom jewelry drawers, we create high-functioning dressing rooms tailored to your wardrobe."
  },
  {
    id: "iv",
    title: "Built-In Shelving & Entertainment Units",
    icon: Columns,
    description: "Seamlessly integrated wall units that house media systems and literature. Crafted to match the architectural profile of your room perfectly."
  },
  {
    id: "v",
    title: "Feature Walls & Wood Paneling",
    icon: PenTool,
    description: "Architectural millwork including wainscoting, slat walls, and custom wood accents that add depth and texture to any interior space."
  }
];

export default function CustomCabinetryPage() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans relative overflow-x-hidden">
      <HeaderBar />

      {/* HEADER SWITCHER */}
      <div className="fixed top-0 left-0 right-0 z-[110] bg-[var(--background)]/90 backdrop-blur-xl border-b border-foreground/5 px-6 py-4 md:py-6">
        <div className="mx-auto max-w-7xl flex justify-between items-center">
          <div className="relative">
            <button onClick={() => setIsNavOpen(!isNavOpen)} className="flex flex-col items-start group text-left">
               <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-amber-700 animate-pulse" />
                 <div className="flex items-center gap-2">
                   <span className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-700">Architectural Millwork</span>
                   <ChevronDown size={14} className={`text-amber-700 transition-transform duration-300 ${isNavOpen ? 'rotate-180' : ''}`} />
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
                        className={`flex items-center gap-4 p-3 rounded-xl transition-all ${nav.slug === 'custom-cabinetry' ? 'bg-amber-700 text-white' : 'hover:bg-foreground/5'}`}
                        onClick={() => setIsNavOpen(false)}
                      >
                        <nav.icon size={16} className={nav.slug === 'custom-cabinetry' ? 'text-white' : 'text-amber-700'} />
                        <span className="text-[10px] font-bold uppercase tracking-tight">{nav.title}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/services" className="flex items-center gap-2 bg-foreground/5 hover:bg-amber-700 hover:text-white p-2 md:px-4 md:py-2 rounded-full transition-all">
            <X size={20} />
          </Link>
        </div>
      </div>

      {/* HERO - Rendered Immediately */}
      <section className="relative pt-32 md:pt-48 pb-16 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-[8rem] font-black tracking-tighter uppercase italic leading-[0.8] mb-8">
              Architectural <br /> <span className="text-amber-700 font-outline-2">Millwork</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl opacity-70 leading-relaxed font-medium border-l-4 border-amber-700 pl-6">
              Precision woodcraft and bespoke cabinetry engineered for the most demanding interiors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SUB-CATEGORY GRID - Fix: Min-height and priority rendering */}
      <section className="py-12 px-6 pb-40 min-h-screen">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-4">
            {subCategories.map((sub, index) => {
              const isPriority = index < 2; // First two items load immediately
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
                      <span className="text-amber-700 font-black italic text-xl">0{index + 1}</span>
                      <div className="p-4 rounded-2xl bg-amber-700 text-white">
                        <sub.icon size={24} />
                      </div>
                    </div>
                    <div className="md:col-span-7 space-y-4">
                      <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-amber-700">{sub.title}</h3>
                      <p className="text-base md:text-lg opacity-60 leading-relaxed font-medium">{sub.description}</p>
                    </div>
                    <div className="md:col-span-4 flex md:justify-end md:items-center h-full">
                      <div className="flex items-center gap-4 px-6 py-3 rounded-full border border-foreground/10 bg-background/50">
                        <ShieldCheck className="w-4 h-4 text-amber-700" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Master-Grade Fit</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-20 flex justify-center border-t border-foreground/5 pt-12">
            <Link href="/contact" className="bg-amber-700 text-white px-10 py-6 rounded-full font-black uppercase text-[12px] tracking-[0.2em] shadow-2xl">
              Start Your Design <ArrowRight className="inline ml-2" />
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