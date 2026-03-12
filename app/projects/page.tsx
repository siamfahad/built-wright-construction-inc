"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeaderBar from "@/components/HeaderBar";
import FooterSection from "@/components/FooterSection";
import { X, ChevronLeft, ChevronRight, Ruler, Zap, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projectsData = [
  { id: "01", title: "Backyard Shed", folder: "backyardshed", prefix: "bs", count: 11, size: "tall" },
  { id: "02", title: "Fireplace", folder: "Fireplace", prefix: "Fp", count: 8, size: "small" },
  { id: "03", title: "Full Washroom Renno", folder: "FullwashroomR", prefix: "fw", count: 14, size: "wide" },
  { id: "04", title: "Kitchen Refacing", folder: "kitchen refacing", prefix: "Kr", count: 9, hasVideo: true, size: "small" },
  { id: "05", title: "Kitchen Remodeling & Renovation", folder: "kitchen remodeling and rennovation", prefix: "Kitch", count: 11, size: "small" },
  { id: "06", title: "Open Concept Living & Kitchen", folder: "open", prefix: "op", count: 53, size: "small" },
  { id: "07", title: "Restaurant Remodeling", folder: "resturent remodeling", prefix: "rr", count: 12, size: "tall" },
  { id: "08", title: "Shed Extension", folder: "shed extension", prefix: "se", count: 23, size: "small" },
  { id: "09", title: "Window & Door Installation", folder: "Window and door installation", prefix: "w", count: 12, size: "small" },
];

export default function ProjectArchive() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentImgIdx, setCurrentImgIdx] = useState(1);

  const getPath = (proj: any, index: number, ext = "jpeg") => {
    // Handling the specific naming for windows vs others
    if (proj.prefix === "w") {
      return `/projects/${proj.folder}/${proj.prefix} (${index}).${ext}`;
    }
    const separator = proj.folder === "open" ? "" : " ";
    return `/projects/${proj.folder}/${proj.prefix}${separator}(${index}).${ext}`;
  };

  const openLightbox = (proj: any) => {
    setSelectedProject(proj);
    setCurrentImgIdx(1);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextImg = () => {
    if (currentImgIdx < selectedProject.count) setCurrentImgIdx(prev => prev + 1);
    else setCurrentImgIdx(1);
  };

  const prevImg = () => {
    if (currentImgIdx > 1) setCurrentImgIdx(prev => prev - 1);
    else setCurrentImgIdx(selectedProject.count);
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans transition-colors duration-500 overflow-x-hidden">
      <HeaderBar />

      <section className="pt-44 pb-12 px-4 md:px-6 border-b border-foreground/5">
        <div className="max-w-[1800px] mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-tight"
          >
            Built Wright<span className="text-orange-600">.</span> Projects
          </motion.h1>
          <p className="mt-4 text-xs md:text-sm uppercase tracking-[0.2em] font-bold opacity-60 max-w-2xl">
            A comprehensive gallery showcasing our premium craftsmanship, custom cabinetry, and large-scale renovations across the Greater Toronto Area.
          </p>
        </div>
      </section>

      <RecentProjectsSection />

      <section className="px-4 py-8 md:py-16 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 auto-rows-[220px] md:auto-rows-[300px]">
          {projectsData.map((project) => (
            <div
              key={project.id}
              onClick={() => openLightbox(project)}
              className={`group relative overflow-hidden bg-[var(--card-bg)] border border-foreground/10 cursor-pointer
                ${project.size === "tall" ? "md:row-span-2" : ""}
                ${project.size === "wide" ? "col-span-2 md:col-span-2" : ""}
                ${project.size === "large" ? "col-span-2 md:row-span-2" : ""}
              `}
            >
              <CardSlider project={project} getPath={getPath} />
              
              <div className="hidden md:flex absolute inset-0 z-20 items-center justify-center pointer-events-none">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-10 group-hover:opacity-60 transition-opacity duration-500">
                  View more
                </span>
              </div>

              <div className="md:hidden absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                <div className="flex items-center gap-2 bg-orange-600/30 text-white border border-white/20 px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest shadow-2xl backdrop-blur-sm">
                  View more
                </div>
              </div>

              <div className="relative z-30 h-full p-4 md:p-6 flex flex-col justify-between pointer-events-none">
                <div className="flex justify-between items-start">
                  <span className="text-[9px] font-bold text-orange-600 bg-black/60 px-2 py-1 border border-orange-600/20">#{project.id}</span>
                </div>
                <div>
                  <h3 className="text-sm md:text-3xl font-black uppercase italic leading-[0.9] text-white drop-shadow-md">{project.title}</h3>
                  <p className="text-[8px] uppercase tracking-widest mt-1 opacity-50">{project.count} Images</p>
                </div>
              </div>
            </div>
          ))}

          {/* FILLER CARD */}
          <div className="hidden md:flex flex-col justify-center p-8 bg-orange-600/5 border border-orange-600/10">
            <Ruler className="text-orange-600 mb-4" size={24} />
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 mb-2">Precision Scale</h4>
            <p className="text-[9px] uppercase leading-relaxed opacity-40 font-bold">Every measurement verified. Every cut precise. We build to a standard of structural excellence that lasts generations.</p>
          </div>

          {/* DISCOVERY BUTTON */}
          <div className="col-span-2 md:col-span-1 flex items-center justify-center relative overflow-hidden bg-transparent border-0 md:border md:border-white/5 group py-12 md:py-0">
            <Link 
              href="/process/discovery" 
              className="relative z-10 w-40 h-40 md:w-44 md:h-44 rounded-full bg-white text-black flex flex-col items-center justify-center transition-all duration-700 hover:scale-110 active:scale-95 shadow-2xl group-hover:shadow-orange-600/40"
            >
              <div className="absolute inset-0 rounded-full border border-orange-600/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity" />
              <ArrowUpRight className="absolute top-8 right-8 text-orange-600 opacity-0 group-hover:opacity-100 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" size={20} />
              <span className="text-[8px] font-black uppercase tracking-[0.3em] mb-1 opacity-60">Begin</span>
              <span className="text-sm font-black uppercase italic tracking-tighter leading-none">Discovery</span>
              <div className="mt-3 h-[2px] w-6 bg-orange-600" />
            </Link>
            
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-2xl"
          >
            <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start z-[110]">
              <div className="flex flex-col">
                <h2 className="text-lg md:text-2xl font-black uppercase italic text-orange-600">{selectedProject.title}</h2>
                <p className="font-mono text-[9px] text-white/40 uppercase tracking-widest">FILE: {selectedProject.prefix} ({currentImgIdx}) / {selectedProject.count}</p>
              </div>
              <button onClick={closeLightbox} className="bg-orange-600 p-3 rounded-full text-white shadow-xl active:scale-90 transition-transform">
                <X size={28} />
              </button>
            </div>

            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="relative w-full max-w-7xl h-full flex flex-col items-center justify-center p-4 md:p-10">
              <div className="relative w-full h-[65vh] flex items-center justify-center">
                {selectedProject.hasVideo && currentImgIdx === 1 ? (
                   <video 
                    src={getPath(selectedProject, 1, "mp4")} 
                    controls 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="max-w-full max-h-full rounded shadow-2xl" 
                   />
                ) : (
                  <img src={getPath(selectedProject, currentImgIdx)} className="max-w-full max-h-full object-contain rounded shadow-2xl" alt="View" />
                )}

                <button onClick={prevImg} className="absolute left-0 md:-left-8 p-4 text-white/60 hover:text-orange-600 transition-colors drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
                  <ChevronLeft size={56} />
                </button>
                <button onClick={nextImg} className="absolute right-0 md:-right-8 p-4 text-white/60 hover:text-orange-600 transition-colors drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
                  <ChevronRight size={56} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <FooterSection />
    </main>
  );
}

function RecentProjectsSection() {
  const totalImages = 29; 
  const [startIndex, setStartIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev % totalImages) + 1);
    }, 3000);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getVisibleIndices = () => {
    const count = isMobile ? 3 : 5;
    const indices = [];
    for (let i = 0; i < count; i++) {
      let val = startIndex + i;
      if (val > totalImages) val = val - totalImages;
      indices.push(val);
    }
    return indices;
  };

  return (
    <section className="py-8 md:py-12 border-b border-foreground/5 bg-black/20">
      <div className="max-w-[1800px] mx-auto px-4 md:px-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[2px] w-8 md:w-12 bg-orange-600" />
          <h2 className="text-sm md:text-xl font-black uppercase tracking-widest italic">Recent Projects</h2>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 overflow-hidden">
          <AnimatePresence mode="popLayout">
            {getVisibleIndices().map((imgNum) => (
              <motion.div
                key={imgNum}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                className="aspect-[4/5] bg-neutral-900 border border-white/5 overflow-hidden"
              >
                <img src={`/projects/recent/rc (${imgNum}).jpeg`} className="w-full h-full object-cover" alt="" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function CardSlider({ project, getPath }: { project: any, getPath: any }) {
  const [idx, setIdx] = useState(1);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIdx(prev => (prev >= 3 || prev >= project.count) ? 1 : prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [project.count]);

  return (
    <div className="absolute inset-0 bg-neutral-900">
      {[1, 2, 3].map((num) => (
        num <= project.count && (
          <img
            key={num}
            src={getPath(project, num)}
            style={{ opacity: idx === num ? 0.45 : 0 }}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
            alt=""
          />
        )
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
    </div>
  );
}