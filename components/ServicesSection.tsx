"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link"; // Added for routing

type ServiceDetail = {
  id: string;
  title: string;
  motive: string;
  description: string;
  process: { step: string; text: string }[];
  images: string[];
};

const serviceData: ServiceDetail[] = [
  {
    id: "01",
    title: "Custom Cabinetry",
    motive: "Premium execution and high-quality finishing for every project.",
    description: "Our signature service combines traditional joinery with modern technology to create bespoke storage solutions that are as functional as they are beautiful.",
    images: ["/cabinets/cab1.jpg", "/cabinets/cab2.jpg", "/cabinets/cab3.jpg"],
    process: [
      { step: "On-Site Consultation", text: "Our specialists visit your space to take precise laser measurements and understand your workflow needs." },
      { step: "3D Design & Rendering", text: "We provide detailed 3D visualizations, allowing you to see your kitchen or vanity before a single piece of wood is cut." },
      { step: "In-House Fabrication", text: "Everything is built in our Scarborough facility using premium hardware and locally sourced sustainable materials." },
      { step: "Master Installation", text: "Our team handles the final fit, ensuring every door is perfectly aligned and every seam is invisible." }
    ]
  },
  {
    id: "02",
    title: "Full Renovations",
    motive: "Premium execution and high-quality finishing for every project.",
    description: "Whether it is a condo in downtown Toronto or a detached home in Scarborough, we manage the entire renovation lifecycle to deliver a stress-free transformation.",
    images: ["/Renovations/ren1.jpg", "/Renovations/ren2.jpg", "/Renovations/ren3.jpg"],
    process: [
      { step: "Scope & Planning", text: "We define the project boundaries, securing necessary permits and establishing a realistic timeline." },
      { step: "Demolition & Prep", text: "Clean, efficient removal of the old space with strict dust control measures to protect your home." },
      { step: "Structural & Systems", text: "Licensed experts handle electrical, plumbing, and structural changes to bring the space up to modern building codes." },
      { step: "Premium Finishing", text: "The final touch where our craftsmanship shines—flooring, painting, and trim work executed to perfection." }
    ]
  },
  {
    id: "03",
    title: "General Construction",
    motive: "Premium execution and high-quality finishing for every project.",
    description: "Professional construction services focused on structural integrity and architectural precision for residential and commercial clients.",
    images: ["/Construction/con1.jpg", "/Construction/con2.jpg", "/Construction/con3.jpg"],
    process: [
      { step: "Structural Analysis", text: "We review blueprints and structural requirements to ensure long-term durability of the build." },
      { step: "Project Management", text: "A dedicated lead oversees every trade on site, ensuring work is done 'Wright' the first time." },
      { step: "Material Excellence", text: "We use high-grade materials that exceed standard building codes for superior insulation and strength." },
      { step: "Final Inspection", text: "A rigorous quality-check walk-through to ensure the project meets our A+ standards and your total satisfaction." }
    ]
  },
  {
    id: "04",
    title: "Kitchen & Bath",
    motive: "Elevated design meets high-performance wet-area engineering.",
    description: "We specialize in high-traffic transformations, merging luxury aesthetics with commercial-grade waterproofing and ergonomic layouts that stand the test of time.",
    images: ["/kitchen/kit1.jpg", "/kitchen/kit2.jpg", "/kitchen/kit3.jpg"],
    process: [
      { step: "Flow Optimization", text: "We analyze your daily routine to design a 'work triangle' or spa layout that maximizes movement and efficiency." },
      { step: "Technical Waterproofing", text: "Utilizing advanced Schluter-style membrane systems to ensure 100% moisture protection behind every tile." },
      { step: "Material Sourcing", text: "Direct access to premium quartz, natural stone, and high-end plumbing fixtures at trade pricing." },
      { step: "Precision Finishing", text: "Zero-clearance tiling and seamless grout lines executed by our most experienced interior finishers." }
    ]
  }
];

const ServiceSlider = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="absolute inset-0 h-full w-full">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === current ? "opacity-100" : "opacity-0"}`}
        >
          <Image src={img} alt="Service" fill className="object-cover" unoptimized />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
    </div>
  );
};

// --- MODERN INTERACTIVE BUTTON COMPONENT ---
const ViewAllButton = () => (
  <Link 
    href="/services" 
    className="group relative flex items-center justify-center gap-4 py-5 px-10 bg-foreground/5 border border-foreground/10 rounded-3xl overflow-hidden transition-all duration-500 hover:bg-foreground hover:border-transparent shadow-lg active:scale-95"
  >
    {/* Animated Background Gradient */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-accent-prime via-white to-accent-prime bg-[length:200%_auto] animate-gradient-x transition-opacity duration-500" />
    
    <span className="relative z-10 text-[11px] font-black uppercase tracking-[0.4em] text-foreground group-hover:text-background transition-colors duration-500">
      View All Our Services
    </span>
    
    <div className="relative z-10 h-8 w-8 rounded-full border border-foreground/20 flex items-center justify-center bg-background/50 group-hover:bg-background group-hover:rotate-45 transition-all duration-500">
      <span className="text-foreground text-sm group-hover:scale-125 transition-transform">→</span>
    </div>
  </Link>
);

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<ServiceDetail | null>(null);

  return (
    <section className="bg-light-espresso py-24 transition-colors duration-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-accent-prime"></span>
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-accent-prime">Our Expertise</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-foreground tracking-tighter">What we do.</h2>
        </div>

        {/* 2 columns on phone, 4 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {serviceData.map((service) => (
            <div 
              key={service.id} 
              onClick={() => setActiveService(service)}
              className="group relative flex flex-col rounded-[2rem] sm:rounded-[3.5rem] border border-foreground/5 bg-foreground/5 p-2 sm:p-4 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-[350px] sm:h-[550px] cursor-pointer active:scale-[0.98]"
            >
              <div className="relative h-full w-full rounded-[1.6rem] sm:rounded-[2.8rem] overflow-hidden">
                <ServiceSlider images={service.images} />
                <div className="absolute inset-0 p-4 sm:p-10 flex flex-col justify-end">
                  <h3 className="text-lg sm:text-2xl font-black text-white tracking-tighter mb-2 sm:mb-4 leading-tight group-hover:translate-x-1 transition-transform duration-500">
                    {service.title}
                  </h3>
                  <div 
                    className="flex items-center gap-2 sm:gap-3 text-[8px] sm:text-[11px] font-black text-white uppercase tracking-[0.2em] group/btn"
                  >
                    View Details 
                    <span className="h-6 w-6 sm:h-10 sm:w-10 rounded-full border border-white/30 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-all">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- VIEW ALL BUTTON BELOW GRID --- */}
        <div className="mt-12 flex justify-center">
          <ViewAllButton />
        </div>
      </div>

      {/* MODAL POPUP */}
      {activeService && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setActiveService(null)} />
          <div className="relative w-full max-w-5xl h-[85vh] rounded-[3rem] bg-background border border-foreground/10 shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in zoom-in duration-300">
            <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                <ServiceSlider images={activeService.images} />
            </div>
            <div className="w-full md:w-1/2 flex flex-col p-8 md:p-14 overflow-y-auto bg-background text-foreground transition-colors duration-500">
              <button 
                onClick={() => setActiveService(null)} 
                className="absolute top-8 right-8 h-10 w-10 rounded-full bg-foreground/10 flex items-center justify-center font-bold hover:bg-foreground/20 transition-colors"
              >
                ✕
              </button>
              <h3 className="text-4xl font-black tracking-tighter mb-4">{activeService.title}</h3>
              <p className="text-accent-prime text-sm font-bold uppercase tracking-widest mb-8">{activeService.motive}</p>
              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-4">Our Methodology</h4>
                  <p className="opacity-70 leading-relaxed italic border-l-4 border-accent-prime pl-6 mb-8">{activeService.description}</p>
                </div>
                <div className="space-y-6">
                  {activeService.process.map((p, i) => (
                    <div key={i} className="flex gap-5 group/item">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-foreground text-background flex items-center justify-center text-[10px] font-black">
                        {i + 1}
                      </div>
                      <div>
                        <h5 className="font-black uppercase text-xs tracking-wider mb-1 group-hover/item:text-accent-prime transition-colors">{p.step}</h5>
                        <p className="text-sm opacity-60 leading-snug">{p.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* --- ACTION BUTTONS IN MODAL --- */}
              <div className="mt-12 pt-8 border-t border-foreground/10 flex flex-col gap-4">
                <a href="/contact" className="inline-block w-full py-5 bg-foreground text-background text-center rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:scale-[1.02] transition-all shadow-xl active:scale-95">
                  Request a Quote
                </a>
                
                {/* --- VIEW ALL BUTTON IN MODAL --- */}
                <div className="w-full">
                  <ViewAllButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}