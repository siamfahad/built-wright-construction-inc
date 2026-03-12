"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { X, Award, Users, ShieldCheck } from "lucide-react";

const heroImages = [
  "/heroimage/hero-1.jpg",
  "/heroimage/hero-2.jpg",
  "/heroimage/hero-3.jpg",
];

const STAT_DETAILS = [
  {
    id: 0,
    label: "Years experience",
    val: "10+",
    icon: <Award className="w-5 h-5 text-emerald-600" />,
    title: "A Decade of Excellence",
    description: "Built Wright Construction has been serving the Greater Toronto Area for over 10 years. From custom cabinetry in Scarborough to major renovations in Markham, our longevity is built on trust and structural integrity."
  },
  {
    id: 1,
    label: "Client-focused",
    val: "100%",
    icon: <Users className="w-5 h-5 text-emerald-600" />,
    title: "Client-First Protocol",
    description: "Every project is a partnership. We maintain a 100% satisfaction commitment by providing transparent communication, detailed feasibility reports, and a clean, professional worksite from discovery to installation."
  },
  {
    id: 2,
    label: "Quality standards",
    val: "A+",
    icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
    title: "Premium Grade Finish",
    description: "We don't cut corners. Our A+ rating reflects our use of premium materials and modern fabrication techniques. Whether it's sustainable building or custom fabrication, we meet the highest Canadian safety and design codes."
  }
];

export default function Beginning() {
  const [currentImg, setCurrentImg] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeStat, setActiveStat] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    details: ""
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "4167003426";
    const message = `New Quote Request:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Project: ${formData.projectType}
Details: ${formData.details}`;

    window.location.href = `sms:+1${phoneNumber}?&body=${encodeURIComponent(message)}`;
    setIsModalOpen(false);
  };

  return (
    <>
      <style jsx global>{`
        @keyframes kenburns {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
        .animate-kenburns {
          animation: kenburns 10s ease-out forwards;
        }
        
        .home-mask {
          clip-path: polygon(50% 0%, 100% 40%, 100% 100%, 0% 100%, 0% 40%);
        }

        .building-rise {
          animation: rise 0.8s ease-out forwards;
        }

        @keyframes rise {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(25px) saturate(180%);
          -webkit-backdrop-filter: blur(25px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .light-text-fix {
          color: currentColor;
        }
      `}</style>

      {/* --- HERO SECTION --- */}
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 mt-16 md:mt-28 pt-8 md:pt-12 pb-16 overflow-hidden">
        
        <div 
          className="home-mask absolute top-0 left-[-10%] w-[100%] md:w-[70%] h-[110%] md:h-[130%] pointer-events-none z-0 opacity-[0.1] md:opacity-[0.15] grayscale contrast-125"
          style={{
            backgroundImage: `url('/heroimage/hero-4.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
          }}
        />

        <div className="relative z-10 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="building-rise">
            <p className="text-[10px] md:text-sm font-black tracking-widest opacity-50 uppercase text-foreground">
              Built Wright Construction Inc.
            </p>
            <h1 className="mt-4 text-4xl font-black leading-[1.1] sm:text-6xl tracking-tighter text-foreground">
              Clean. Right.<br />
              <span className="text-emerald-600 dark:text-emerald-400">Premium Finish.</span>
            </h1>
            <p className="mt-6 text-base md:text-lg leading-relaxed opacity-70 max-w-lg text-foreground">
              Expert craftsmanship in Scarborough and across the GTA.
            </p>
            
            <div className="mt-10 grid grid-cols-2 md:flex md:flex-wrap gap-3 md:gap-6 items-center">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full md:w-auto flex justify-center items-center rounded-full bg-foreground text-background px-4 md:px-9 py-4 text-[11px] md:text-sm font-black uppercase tracking-widest shadow-2xl hover:scale-105 transition-all active:scale-95 text-center"
              >
                Get a Quote
              </button>

              <Link 
                href="/services" 
                className="w-full md:w-auto flex justify-center items-center rounded-full border-2 border-foreground/60 px-4 md:px-9 py-4 text-[11px] md:text-sm font-black uppercase tracking-widest hover:bg-foreground hover:text-background transition-all active:scale-95 text-center text-foreground"
              >
                Services
              </Link>
            </div>
            
            {/* STAT BOXES */}
            <div className="mt-12 grid grid-cols-3 gap-3 md:gap-4">
              {STAT_DETAILS.map((stat) => (
                <button 
                  key={stat.id} 
                  onClick={() => setActiveStat(stat.id)}
                  className="group rounded-2xl md:rounded-3xl border border-foreground/10 p-4 md:p-5 text-center bg-foreground/5 backdrop-blur-md transition-all hover:border-foreground/30 hover:bg-foreground/10 active:scale-95"
                >
                  <p className="text-xl md:text-3xl font-black text-foreground group-hover:scale-110 transition-transform">{stat.val}</p>
                  <p className="mt-1 text-[8px] md:text-[9px] opacity-50 uppercase font-black tracking-widest leading-tight text-foreground">{stat.label}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Slideshow - Changed 'hidden lg:block' to 'block mt-12 lg:mt-0' */}
          <div className="relative rounded-[3rem] border border-foreground/10 bg-foreground/5 p-3 overflow-hidden group shadow-2xl block mt-12 lg:mt-0">
            <div className="relative aspect-square w-full rounded-[2.5rem] overflow-hidden bg-neutral-900">
              {heroImages.map((img, idx) => (
                <div key={idx} className={`absolute inset-0 transition-opacity duration-1000 ${currentImg === idx ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
                  <img src={img} alt="" className={`w-full h-full object-cover ${currentImg === idx ? "animate-kenburns" : ""}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- STAT POPUP --- */}
      {activeStat !== null && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-xl" onClick={() => setActiveStat(null)} />
          <div className="glass-effect relative w-full max-w-sm rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden">
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-[80px]" />
            <button onClick={() => setActiveStat(null)} className="absolute top-5 right-5 text-foreground/40 hover:text-foreground"><X size={18} /></button>
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="mb-4 p-4 rounded-2xl bg-foreground/5 border border-foreground/10">{STAT_DETAILS[activeStat].icon}</div>
              <h3 className="text-xl font-black uppercase italic tracking-tighter mb-2 text-foreground">{STAT_DETAILS[activeStat].title}</h3>
              <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-4">{STAT_DETAILS[activeStat].label} • {STAT_DETAILS[activeStat].val}</p>
              <p className="text-xs leading-relaxed opacity-70 font-semibold text-foreground">
                {STAT_DETAILS[activeStat].description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-xl" onClick={() => setIsModalOpen(false)} />
          <div className="glass-effect relative w-full max-w-lg rounded-[2.5rem] p-8 md:p-10 shadow-2xl">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 p-2 text-foreground/40 hover:text-foreground"><X size={20} /></button>
            <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-2 text-foreground">Request Quote</h2>
            <p className="text-[10px] uppercase tracking-widest opacity-40 mb-8 text-foreground">Direct Messaging Dispatch</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                required name="name" placeholder="YOUR NAME" 
                className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-4 text-xs font-black uppercase tracking-widest focus:border-emerald-500 outline-none transition-all text-foreground placeholder:opacity-30"
                value={formData.name} onChange={handleInputChange}
              />
              <div className="grid grid-cols-2 gap-4">
                <input 
                  required name="phone" placeholder="PHONE" 
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-4 text-xs font-black uppercase tracking-widest focus:border-emerald-500 outline-none transition-all text-foreground placeholder:opacity-30"
                  value={formData.phone} onChange={handleInputChange}
                />
                <input 
                  required name="email" type="email" placeholder="EMAIL" 
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-4 text-xs font-black uppercase tracking-widest focus:border-emerald-500 outline-none transition-all text-foreground placeholder:opacity-30"
                  value={formData.email} onChange={handleInputChange}
                />
              </div>
              <input 
                required name="projectType" placeholder="PROJECT TYPE (e.g. Kitchen)" 
                className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-4 text-xs font-black uppercase tracking-widest focus:border-emerald-500 outline-none transition-all text-foreground placeholder:opacity-30"
                value={formData.projectType} onChange={handleInputChange}
              />
              <textarea 
                required name="details" placeholder="PROJECT DETAILS" rows={3}
                className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-4 text-xs font-black uppercase tracking-widest focus:border-emerald-500 outline-none transition-all resize-none text-foreground placeholder:opacity-30"
                value={formData.details} onChange={handleInputChange}
              />
              <button type="submit" className="w-full mt-4 bg-foreground text-background py-5 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:scale-[1.02] active:scale-95 transition-all">
                Send via Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}