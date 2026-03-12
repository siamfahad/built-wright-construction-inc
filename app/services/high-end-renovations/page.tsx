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
  Maximize,
  Hammer,
  Building2,
  History
} from "lucide-react";
import HeaderBar from "@/components/HeaderBar";

// COLOR CONFIGURATION PER DIVISION
const divisionConfigs: Record<string, { colorClass: string; activeBg: string; shadow: string }> = {
  "custom-luxury-homes": { colorClass: "text-orange-600", activeBg: "bg-orange-600", shadow: "shadow-orange-600/20" },
  "high-end-renovations": { colorClass: "text-blue-600", activeBg: "bg-blue-600", shadow: "shadow-blue-600/20" }, // Current Page: Royal Blue
  "designer-kitchen-bath": { colorClass: "text-cyan-500", activeBg: "bg-cyan-500", shadow: "shadow-cyan-500/20" },
  "custom-cabinetry": { colorClass: "text-amber-700", activeBg: "bg-amber-700", shadow: "shadow-amber-700/20" },
  "outdoor-living": { colorClass: "text-emerald-600", activeBg: "bg-emerald-600", shadow: "shadow-emerald-600/20" },
  "commercial-office": { colorClass: "text-indigo-600", activeBg: "bg-indigo-600", shadow: "shadow-indigo-600/20" },
  "structural-engineering": { colorClass: "text-red-600", activeBg: "bg-red-600", shadow: "shadow-red-600/20" },
  "smart-home-mechanical": { colorClass: "text-yellow-500", activeBg: "bg-yellow-500", shadow: "shadow-yellow-500/20" },
  "project-management": { colorClass: "text-slate-500", activeBg: "bg-slate-500", shadow: "shadow-slate-500/20" },
  "sustainable-building": { colorClass: "text-green-500", activeBg: "bg-green-500", shadow: "shadow-green-500/20" },
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
    title: "Full Home Remodeling",
    icon: Hammer,
    description: "Complete interior and exterior transformations. We strip structures down to the studs to modernize layouts, upgrade mechanical systems, and install premium finishes that breathe new life into existing properties."
  },
  {
    id: "ii",
    title: "Open-Concept Conversions",
    icon: Maximize,
    description: "Specializing in load-bearing wall removal and structural steel integration. We create fluid, expansive living spaces that improve natural light flow and modern daily interaction."
  },
  {
    id: "iii",
    title: "Basement Finishing",
    icon: Layers,
    description: "Turning underutilized lower levels into premium living assets. From high-end home theaters and private gyms to luxury guest suites, we ensure moisture protection and superior insulation."
  },
  {
    id: "iv",
    title: "Condo Renovations",
    icon: Building2,
    description: "Navigating the complexities of high-rise logistics. We provide sophisticated remodeling services for luxury condominiums, ensuring strict adherence to board regulations and soundproofing standards."
  },
  {
    id: "v",
    title: "Heritage & Custom Restoration",
    icon: History,
    description: "Preserving the soul of historic properties while introducing modern performance. Our craftsmen specialize in matching period-correct millwork and restoring original architectural details with precision."
  }
];

export default function HighEndRenovationsPage() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const currentSlug = "high-end-renovations";
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
                     High-End Renovations
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
                          <nav.icon size={16} className={isCurrent ? 'text-white' : (divisionConfigs[nav.slug]?.colorClass || 'text-foreground')} />
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
              High-End <br /> <span className={`${theme.colorClass} font-outline-2`}>Renovations</span>
            </h1>
            
            <div className="grid md:grid-cols-2 gap-10 items-end">
              <p className="text-lg md:text-xl opacity-70 leading-relaxed font-medium border-l-4 border-blue-600 pl-6">
                Transforming standard properties into bespoke masterpieces. We blend architectural integrity with modern luxury to revitalize your most valuable investment.
              </p>
              <div className="flex gap-4">
                 <div className="flex flex-col">
                    <span className={`text-3xl font-black italic ${theme.colorClass}`}>Premium</span>
                    <span className="text-[9px] uppercase font-black tracking-widest opacity-40">Refurbishment</span>
                 </div>
                 <div className="w-[1px] h-12 bg-foreground/10" />
                 <div className="flex flex-col">
                    <span className="text-3xl font-black italic">Structural</span>
                    <span className="text-[9px] uppercase font-black tracking-widest opacity-40">Integrity Experts</span>
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
                      <div className="flex items-center gap-4 px-6 py-3 rounded-full border border-foreground/10 bg-background/50 backdrop-blur-sm group-hover:border-blue-600/50 transition-colors">
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
              className={`group flex items-center gap-6 ${theme.activeBg} text-white px-10 py-6 rounded-full font-black uppercase text-[12px] tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-2xl ${theme.shadow}`}
            >
              Start Your Renovation <ArrowRight className="group-hover:translate-x-2 transition-transform" />
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