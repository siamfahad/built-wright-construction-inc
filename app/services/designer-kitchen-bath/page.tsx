"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Home, 
  Layers, 
  PlusSquare, 
  UserPlus, 
  ArrowRight,
  ShieldCheck,
  Gem,
  ChevronDown,
  Paintbrush,
  ChefHat,
  Layout,
  TreePine,
  Briefcase,
  Activity,
  Zap,
  ClipboardCheck,
  Leaf,
  Droplets,
  UtensilsCrossed,
  Bath,
  Sparkles,
  Waves
} from "lucide-react";
import HeaderBar from "@/components/HeaderBar";

// COLOR CONFIGURATION PER DIVISION
const divisionConfigs: Record<string, { colorClass: string; activeBg: string }> = {
  "custom-luxury-homes": { colorClass: "text-orange-600", activeBg: "bg-orange-600" },
  "high-end-renovations": { colorClass: "text-blue-500", activeBg: "bg-blue-500" },
  "designer-kitchen-bath": { colorClass: "text-cyan-500", activeBg: "bg-cyan-500" }, // Current Page
  "custom-cabinetry": { colorClass: "text-amber-700", activeBg: "bg-amber-700" },
  "outdoor-living": { colorClass: "text-emerald-600", activeBg: "bg-emerald-600" },
  "commercial-office": { colorClass: "text-indigo-600", activeBg: "bg-indigo-600" },
  "structural-engineering": { colorClass: "text-red-600", activeBg: "bg-red-600" },
  "smart-home-mechanical": { colorClass: "text-yellow-500", activeBg: "bg-yellow-500" },
  "project-management": { colorClass: "text-slate-500", activeBg: "bg-slate-500" },
  "sustainable-building": { colorClass: "text-green-500", activeBg: "bg-green-500" },
};

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
    title: "Luxury Kitchen Remodeling",
    icon: UtensilsCrossed,
    description: "Culinary spaces designed for both performance and social gatherings. We integrate high-end appliances with ergonomic layouts and custom lighting to create the heart of your home."
  },
  {
    id: "ii",
    title: "Custom Bathroom Renovations",
    icon: Bath,
    description: "Turning daily routines into sanctuary experiences. Our bathroom builds focus on moisture-proof longevity, heated flooring systems, and bespoke tiling that reflects a five-star aesthetic."
  },
  {
    id: "iii",
    title: "Walk-In Showers & Spa Features",
    icon: Waves,
    description: "Precision-engineered wet rooms featuring curbless entries, linear drains, and multi-jet rain shower systems for a professional spa feel within your private residence."
  },
  {
    id: "iv",
    title: "Stone Countertop Installation",
    icon: Layers,
    description: "Sourcing world-class marble, quartz, and granite. Our installation team ensures book-matched veining and seamless mitred edges for a truly continuous stone appearance."
  },
  {
    id: "v",
    title: "Premium Fixture Upgrades",
    icon: Sparkles,
    description: "The finishing touch of luxury. We install designer faucets, smart toilets, and custom hardware that act as the 'jewelry' for your kitchen and bath spaces."
  }
];

export default function KitchenBathPage() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const currentSlug = "designer-kitchen-bath";
  const theme = divisionConfigs[currentSlug];
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans relative overflow-x-hidden">
      <HeaderBar />

      {/* MODAL HEADER */}
      <div className="fixed top-0 left-0 right-0 z-[110] bg-[var(--background)]/90 backdrop-blur-xl border-b border-foreground/5 px-6 py-4 md:py-6">
        <div className="mx-auto max-w-7xl flex justify-between items-center">
          
          <div className="relative">
            <button onClick={() => setIsNavOpen(!isNavOpen)} className="flex flex-col items-start group text-left">
               <div className="flex items-center gap-3">
                 <div className={`w-2 h-2 rounded-full ${theme.activeBg} animate-pulse`} />
                 <div className="flex items-center gap-2">
                   <span className={`text-[10px] font-black uppercase tracking-[0.4em] ${theme.colorClass}`}>
                     Designer Kitchen & Bath
                   </span>
                   <ChevronDown size={14} className={`${theme.colorClass} transition-transform duration-300 ${isNavOpen ? 'rotate-180' : ''}`} />
                 </div>
               </div>
               <span className="ml-5 text-[8px] font-bold uppercase tracking-widest text-foreground/40">
                 Click to view more
               </span>
            </button>

            <AnimatePresence>
              {isNavOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-[130%] left-0 w-[280px] md:w-[350px] bg-[var(--background)] border border-foreground/10 rounded-[2rem] shadow-2xl overflow-hidden backdrop-blur-2xl z-[120]"
                >
                  <div className="p-3 grid grid-cols-1 gap-1">
                    <p className="px-4 py-2 text-[8px] font-black uppercase tracking-widest opacity-40">Switch Division</p>
                    {navigationDivisions.map((nav) => {
                       const isCurrent = nav.slug === currentSlug;
                       return (
                        <Link 
                          key={nav.slug}
                          href={`/services/${nav.slug}`}
                          className={`flex items-center gap-4 p-3 rounded-xl transition-all ${isCurrent ? theme.activeBg + ' text-white' : 'hover:bg-foreground/5'}`}
                          onClick={() => setIsNavOpen(false)}
                        >
                          <nav.icon size={16} className={isCurrent ? 'text-white' : divisionConfigs[nav.slug]?.colorClass || 'text-foreground'} />
                          <span className="text-[10px] font-bold uppercase tracking-tight">{nav.title}</span>
                        </Link>
                       )
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/services" className={`flex items-center gap-2 group bg-foreground/5 hover:${theme.activeBg} hover:text-white p-2 md:px-4 md:py-2 rounded-full transition-all`}>
            <span className="hidden md:block text-[10px] font-black uppercase tracking-widest">Close Gallery</span>
            <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-32 md:pt-48 pb-16 px-6 min-h-[40vh] flex flex-col justify-center">
        <div className="mx-auto max-w-7xl w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-5xl md:text-[8rem] font-black tracking-tighter uppercase italic leading-[0.8] mb-8">
              Kitchen <br /> <span className={`${theme.colorClass} font-outline-2`}>& Bath</span>
            </h1>
            
            <div className="grid md:grid-cols-2 gap-10 items-end">
              <p className="text-lg md:text-xl opacity-70 leading-relaxed font-medium border-l-4 border-cyan-500 pl-6">
                Where utility meets high-art. We craft designer kitchens and bathrooms that prioritize refined aesthetics without sacrificing structural durability.
              </p>
              <div className="flex gap-4">
                 <div className="flex flex-col">
                    <span className={`text-3xl font-black italic ${theme.colorClass}`}>Water</span>
                    <span className="text-[9px] uppercase font-black tracking-widest opacity-40">Proof Systems</span>
                 </div>
                 <div className="w-[1px] h-12 bg-foreground/10" />
                 <div className="flex flex-col">
                    <span className="text-3xl font-black italic">Bespoke</span>
                    <span className="text-[9px] uppercase font-black tracking-widest opacity-40">Finishing</span>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SUB-CATEGORY GRID */}
      <section className="py-12 px-6 pb-40 min-h-screen">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-4">
            {subCategories.map((sub, index) => {
              const isFirst = index === 0;
              return (
                <motion.div 
                  key={sub.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isFirst ? { opacity: 1, y: 0 } : undefined}
                  whileInView={!isFirst ? { opacity: 1, y: 0 } : undefined}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: isFirst ? 0.2 : 0, duration: 0.5 }}
                  className="group relative bg-foreground/[0.02] border border-foreground/5 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 hover:bg-foreground/[0.04] transition-all overflow-hidden"
                >
                  <div className="relative z-10 grid md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-1 flex flex-col items-center gap-4">
                      <span className={`${theme.colorClass} font-black italic text-xl`}>0{index + 1}</span>
                      <div className={`p-4 rounded-2xl ${theme.activeBg} text-white shadow-xl`}>
                        <sub.icon size={24} />
                      </div>
                    </div>

                    <div className="md:col-span-7 space-y-4">
                      <h3 className={`text-3xl md:text-4xl font-black uppercase italic tracking-tighter ${theme.colorClass}`}>
                        {sub.title}
                      </h3>
                      <p className="text-base md:text-lg opacity-60 leading-relaxed font-medium">
                        {sub.description}
                      </p>
                    </div>

                    <div className="md:col-span-4 flex md:justify-end md:items-center h-full">
                      <div className={`flex items-center gap-4 px-6 py-3 rounded-full border border-foreground/10 bg-background/50 backdrop-blur-sm group-hover:border-cyan-500/50 transition-colors`}>
                        <ShieldCheck className={`w-4 h-4 ${theme.colorClass}`} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Warrantied Execution</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                     <sub.icon size={180} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-20 flex justify-center border-t border-foreground/5 pt-12">
            <Link 
              href="/contact"
              className={`group flex items-center gap-6 ${theme.activeBg} text-white px-10 py-6 rounded-full font-black uppercase text-[12px] tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-cyan-500/20`}
            >
              Start Your Design <ArrowRight className="group-hover:translate-x-2 transition-transform" />
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