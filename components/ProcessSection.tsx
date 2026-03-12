"use client";

import React from "react";
import Link from "next/link";
import { 
  Search, 
  PenTool, 
  Cpu, 
  CheckCircle2, 
  ArrowUpRight 
} from "lucide-react";

const steps = [
  {
    s: "01",
    t: "Discovery",
    slug: "discovery",
    d: "Initial consultation to align on your project vision, requirements, and investment goals.",
    icon: <Search className="w-5 h-5" />,
    color: "from-blue-600 to-cyan-500",
    glow: "group-hover:shadow-[0_20px_50px_-12px_rgba(37,99,235,0.3)]",
    mobileGlow: "shadow-[0_10px_30px_-10px_rgba(37,99,235,0.2)]", // New mobile specific glow
    accent: "bg-blue-500"
  },
  {
    s: "02",
    t: "Design",
    slug: "design",
    d: "Comprehensive planning and precision modeling to ensure structural and aesthetic excellence.",
    icon: <PenTool className="w-5 h-5" />,
    color: "from-indigo-600 to-purple-500",
    glow: "group-hover:shadow-[0_20px_50px_-12px_rgba(79,70,229,0.3)]",
    mobileGlow: "shadow-[0_10px_30px_-10px_rgba(79,70,229,0.2)]",
    accent: "bg-indigo-500"
  },
  {
    s: "03",
    t: "Fabrication",
    slug: "fabrication",
    d: "Master craftsmanship and material sourcing executed to the highest industry standards.",
    icon: <Cpu className="w-5 h-5" />,
    color: "from-orange-600 to-red-500",
    glow: "group-hover:shadow-[0_20px_50px_-12px_rgba(234,88,12,0.3)]",
    mobileGlow: "shadow-[0_10px_30px_-10px_rgba(234,88,12,0.2)]",
    accent: "bg-orange-500"
  },
  {
    s: "04",
    t: "Installation",
    slug: "installation",
    d: "Final delivery and professional assembly with rigorous attention to every detail.",
    icon: <CheckCircle2 className="w-5 h-5" />,
    color: "from-emerald-600 to-teal-500",
    glow: "group-hover:shadow-[0_20px_50px_-12px_rgba(5,150,105,0.3)]",
    mobileGlow: "shadow-[0_10px_30px_-10px_rgba(5,150,105,0.2)]",
    accent: "bg-emerald-500"
  },
];

export default function ProcessSection() {
  return (
    <section className="relative py-24 bg-background transition-colors duration-500 overflow-hidden">
      
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        
        @keyframes shine {
          0% { left: -100%; }
          20% { left: 100%; }
          100% { left: 100%; }
        }
        .animate-shine { animation: shine 3s infinite; }

        /* Mobile specific continuous glow animation */
        @keyframes mobile-breathe {
          0%, 100% { 
            border-color: rgba(var(--foreground-rgb), 0.1);
            transform: scale(1);
          }
          50% { 
            border-color: rgba(var(--foreground-rgb), 0.25);
            transform: scale(1.01);
          }
        }
        
        @media (max-width: 1024px) {
          .mobile-card-animate {
            animation: mobile-breathe 4s ease-in-out infinite;
          }
        }
      `}</style>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-8 bg-foreground opacity-30" />
            <p className="text-[10px] font-black underline-offset-4 tracking-[0.4em] text-foreground opacity-30 uppercase">
              Our Methodology
            </p>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter uppercase italic">
            Building <span className="opacity-40">Process</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {steps.map((item, i) => (
            <Link 
              key={i} 
              href={`/process/${item.slug}`}
              className={`group relative p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-foreground/[0.03] border border-foreground/10 
                hover:bg-foreground/[0.05] hover:border-foreground/30 hover:-translate-y-2
                transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] block overflow-hidden
                mobile-card-animate ${item.glow} ${item.mobileGlow}`}
                style={{ animationDelay: `${i * 0.5}s` }}
            >
              {/* Animated Shine Effect */}
              <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-25deg] group-hover:animate-shine" />
              </div>

              {/* Step Number */}
              <span className="absolute top-4 right-6 md:top-6 md:right-8 text-2xl md:text-4xl font-black text-foreground/5 group-hover:text-foreground/10 transition-all duration-500">
                {item.s}
              </span>

              {/* Icon Container */}
              <div className="mb-8 md:mb-12 mt-4 relative flex items-center justify-between">
                <div 
                  className={`relative z-10 inline-flex p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg animate-float transition-transform duration-500 group-hover:scale-110`} 
                  style={{ animationDelay: `${i * 0.4}s` }}
                >
                  {item.icon}
                </div>

                {/* Mobile visual cue: Always show a tiny version of the arrow for modernization */}
                <div className="flex lg:hidden items-center">
                   <div className={`p-1.5 rounded-full ${item.accent} text-white opacity-80 scale-90`}>
                     <ArrowUpRight className="w-3 h-3" />
                   </div>
                </div>

                <div className="hidden lg:flex items-center gap-2 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                   <span className="text-[10px] font-black uppercase tracking-widest text-foreground">Explore</span>
                   <div className={`p-1.5 rounded-full ${item.accent} text-white`}>
                     <ArrowUpRight className="w-3 h-3" />
                   </div>
                </div>
                
                {/* Background Aura - Set to a low constant opacity on mobile for the glow effect */}
                <div className={`absolute -inset-4 scale-150 blur-3xl opacity-10 lg:opacity-0 lg:group-hover:opacity-20 transition-opacity duration-700 rounded-full ${item.accent}`} />
              </div>

              {/* Content */}
              <div className="space-y-3 md:space-y-4 relative z-10">
                <h3 className="text-sm md:text-xl font-black text-foreground uppercase tracking-tight">
                  {item.t}
                </h3>
                <p className="text-[10px] md:text-[12px] text-foreground/50 leading-relaxed font-medium uppercase tracking-wide group-hover:text-foreground/90 transition-colors duration-300 line-clamp-3 md:line-clamp-none">
                  {item.d}
                </p>
              </div>

              {/* Mobile Footer Reveal: Visible by default but subtle on mobile */}
              <div className="mt-6 md:mt-8 pt-4 border-t border-foreground/5 opacity-40 lg:opacity-0 lg:translate-y-4 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500 flex items-center justify-between">
                 <span className="text-[8px] md:text-[9px] font-bold text-foreground/40 uppercase tracking-tighter">Details</span>
                 <div className={`h-1.5 w-1.5 rounded-full animate-pulse ${item.accent}`} />
              </div>

              {/* Bottom Loading Bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 md:h-1.5 overflow-hidden rounded-b-[2rem] md:rounded-b-[2.5rem]">
                <div 
                  className={`h-full bg-gradient-to-r ${item.color} w-[20%] lg:w-0 lg:group-hover:w-full transition-all duration-700 ease-out`} 
                />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-6">
            <div className="flex items-center gap-4 opacity-20">
               <div className="h-[1px] w-12 bg-foreground" />
               <span className="text-[9px] font-black uppercase tracking-[0.4em]">Built Wright Quality</span>
               <div className="h-[1px] w-12 bg-foreground" />
            </div>
        </div>
      </div>
    </section>
  );
}