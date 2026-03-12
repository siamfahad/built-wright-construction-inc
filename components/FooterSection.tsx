"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Instagram, 
  Facebook, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  ShieldCheck,
  X,
  MessageCircle,
  Linkedin,
  ChevronRight,
  ArrowLeft
} from "lucide-react";

const SERVICES_DATA = [
  {
    title: "Custom Luxury Home Construction",
    subServices: [
      "Fully Custom Home Builds",
      "Luxury Estate Development",
      "Multi-Unit Residential Projects",
      "Home Additions & Expansions",
      "Basement & Secondary Suite Construction"
    ]
  },
  {
    title: "High-End Home Renovations",
    subServices: [
      "Full Home Remodeling",
      "Open-Concept Conversions",
      "Basement Finishing",
      "Condo Renovations",
      "Heritage & Custom Restoration"
    ]
  },
  {
    title: "Designer Kitchens & Bathrooms",
    subServices: [
      "Luxury Kitchen Remodeling",
      "Custom Bathroom Renovations",
      "Walk-In Showers & Spa Features",
      "Stone Countertop Installation",
      "Premium Fixture Upgrades"
    ]
  },
  {
    title: "Custom Cabinetry & Built-In Features",
    subServices: [
      "Custom Kitchen Cabinets",
      "Bathroom Vanities",
      "Walk-In Closets",
      "Built-In Shelving & Entertainment Units",
      "Feature Walls & Wood Paneling"
    ]
  },
  {
    title: "Exterior Enhancements & Outdoor Living Spaces",
    subServices: [
      "Custom Decks & Patios",
      "Windows & Door Installation"
    ]
  },
  {
    title: "Commercial & Office Construction",
    subServices: [
      "Office Build-Outs",
      "Retail & Restaurant Construction",
      "Tenant Improvements",
      "Warehouse Interior Construction",
      "Commercial Renovations"
    ]
  },
  {
    title: "Structural & Foundation Solutions",
    subServices: [
      "Foundation Construction",
      "Framing (Wood & Steel)",
      "Concrete Work",
      "Load-Bearing Wall Removal",
      "Waterproofing & Structural Reinforcement"
    ]
  },
  {
    title: "Mechanical, Electrical & Smart Home Systems",
    subServices: [
      "Electrical Installations & Panel Upgrades",
      "Plumbing Systems",
      "HVAC Installation",
      "Smart Home Automation",
      "Custom Lighting Design"
    ]
  },
  {
    title: "Full-Service Project Management",
    subServices: [
      "Design-Build Services",
      "Architectural Drafting",
      "3D Renderings & Visualization",
      "Permit & Code Compliance",
      "Budget Planning & Cost Estimation"
    ]
  },
  {
    title: "Sustainable & Energy-Efficient Building",
    subServices: [
      "Energy-Efficient Home Design",
      "Net-Zero Ready Construction",
      "Insulation & Soundproofing",
      "Eco-Friendly Material Selection"
    ]
  }
];

export default function FooterSection() {
  const currentYear = new Date().getFullYear();
  const [modalType, setModalType] = useState<'privacy' | 'terms' | 'quote' | null>(null);
  const [selectedMain, setSelectedMain] = useState<number | null>(null);
  const [selectedSub, setSelectedSub] = useState<string | null>(null);

  const closeModal = () => {
    setModalType(null);
    setSelectedMain(null);
    setSelectedSub(null);
  };

  const handleGetQuote = () => {
    if (selectedMain !== null && selectedSub) {
      const mainService = SERVICES_DATA[selectedMain].title;
      const message = `Hey Built Wright, can I get a quote for ${mainService} (${selectedSub})? I would really love to talk to you about this project!`;
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const separator = isIOS ? '&' : '?';
      window.location.href = `sms:+14167003426${separator}body=${encodeURIComponent(message)}`;
    }
  };

  return (
    <footer className="relative bg-background pt-24 pb-12 border-t border-foreground/5 overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes neon-pulse-green {
          0%, 100% { filter: drop-shadow(0 0 2px #39ff14) drop-shadow(0 0 5px #39ff14); opacity: 0.8; }
          50% { filter: drop-shadow(0 0 8px #39ff14) drop-shadow(0 0 15px #39ff14); opacity: 1; }
        }
        .neon-shield {
          animation: neon-pulse-green 2s infinite ease-in-out;
          color: #39ff14 !important;
        }
        .social-ig { color: #d62976 !important; filter: drop-shadow(0 0 5px #d62976); border-color: rgba(214, 41, 118, 0.3) !important; }
        .social-fb { color: #1877f2 !important; filter: drop-shadow(0 0 5px #1877f2); border-color: rgba(24, 119, 242, 0.3) !important; }
        .social-wa { color: #25d366 !important; filter: drop-shadow(0 0 5px #25d366); border-color: rgba(37, 211, 102, 0.3) !important; }
        .social-li { color: #0077b5 !important; filter: drop-shadow(0 0 5px #0077b5); border-color: rgba(0, 119, 181, 0.3) !important; }
        .social-link { transition: transform 0.3s ease, filter 0.3s ease; }
        .social-link:hover { transform: translateY(-3px); filter: drop-shadow(0 0 12px currentColor); }
      `}} />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-foreground/[0.03] to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter uppercase italic leading-[0.9]">
            Built Wright. <br/>
            <span className="opacity-30">Built to Last.</span>
          </h2>
          <button 
            onClick={() => setModalType('quote')}
            className="group relative inline-flex items-center gap-4 bg-foreground text-background px-12 py-6 rounded-full text-sm font-black uppercase tracking-[0.3em] shadow-2xl hover:scale-105 transition-all active:scale-95"
          >
            Get Started Today
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
          <div className="col-span-2 md:col-span-1 space-y-6">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-foreground rounded-lg flex items-center justify-center">
                <span className="text-background font-black text-xl">W</span>
              </div>
              <span className="text-lg font-black tracking-tighter uppercase">Built Wright</span>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest leading-relaxed text-foreground/40 max-w-xs">
              Premium construction standards across the GTA. Excellence in every square foot.
            </p>
            <div className="flex gap-4">
              <Link href="https://www.instagram.com/bw_constructioninc?igsh=ZTAzNWE4anNrY3lk" target="_blank" className="social-link social-ig p-3 rounded-xl bg-foreground/[0.03] border"><Instagram className="w-5 h-5" /></Link>
              <Link href="https://www.facebook.com/share/1Aag43DuaK/?mibextid=wwXIfr" target="_blank" className="social-link social-fb p-3 rounded-xl bg-foreground/[0.03] border"><Facebook className="w-5 h-5" /></Link>
              <Link href="https://wa.me/14167003426" target="_blank" className="social-link social-wa p-3 rounded-xl bg-foreground/[0.03] border"><MessageCircle className="w-5 h-5" /></Link>
              <Link href="https://www.linkedin.com/company/built-wright-construction-inc/" target="_blank" className="social-link social-li p-3 rounded-xl bg-foreground/[0.03] border"><Linkedin className="w-5 h-5" /></Link>
            </div>
          </div>

          <div className="col-span-1 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/30">Business Details</h4>
            <div className="space-y-5">
              <Link href="tel:+14167003426" className="flex items-center gap-4 group">
                <div className="p-2 rounded-lg bg-foreground/[0.03] group-hover:bg-foreground/5 transition-colors"><Phone className="w-4 h-4" /></div>
                <span className="text-[10px] md:text-xs font-black tracking-widest group-hover:underline underline-offset-4">416 700 3426</span>
              </Link>
              <Link href="mailto:bwcinc2020@gmail.com" className="flex items-center gap-4 group">
                <div className="p-2 rounded-lg bg-foreground/[0.03] group-hover:bg-foreground/5 transition-colors"><Mail className="w-4 h-4" /></div>
                <span className="text-[10px] md:text-xs font-black tracking-widest lowercase whitespace-nowrap group-hover:underline underline-offset-4">bwcinc2020@gmail.com</span>
              </Link>
              <Link href="https://maps.google.com" target="_blank" className="flex items-start gap-4 group">
                <div className="p-2 rounded-lg bg-foreground/[0.03] group-hover:bg-foreground/5 transition-colors mt-0.5"><MapPin className="w-4 h-4" /></div>
                <span className="text-[10px] md:text-xs font-black tracking-widest uppercase leading-loose group-hover:underline underline-offset-4">Unit-16, 1960 ellesmere rd,<br/>Scarborough, ON, Canada</span>
              </Link>
            </div>
          </div>

          <div className="col-span-1 p-8 rounded-[2rem] flex flex-col justify-between border-[1.5px] border-foreground bg-[color-mix(in_srgb,var(--foreground)_5%,transparent)] backdrop-blur-md shadow-xl">
            <ShieldCheck className="w-10 h-10 neon-shield" />
            <div className="mt-8">
              <p className="text-[10px] font-black uppercase tracking-widest mb-1 text-foreground">Fully Licensed</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-foreground/50 leading-tight">& Insured GTA Contractor <br/>Verified Quality Standards</p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] font-black uppercase tracking-[0.3em] opacity-30">© {currentYear} Built Wright Construction Inc. All Rights Reserved.</p>
          <div className="flex gap-8">
            <button onClick={() => setModalType('privacy')} className="text-[9px] font-black uppercase tracking-[0.3em] opacity-30 hover:opacity-100 transition-opacity">Privacy</button>
            <button onClick={() => setModalType('terms')} className="text-[9px] font-black uppercase tracking-[0.3em] opacity-30 hover:opacity-100 transition-opacity">Terms</button>
          </div>
        </div>
      </div>

      {modalType && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-xl transition-opacity animate-in fade-in duration-300" onClick={closeModal} />
          <div className="relative w-full max-w-xl max-h-[70vh] md:max-h-[85vh] bg-background border border-foreground/10 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300">
            
            <div className="flex items-center justify-between p-6 md:p-8 border-b border-foreground/5">
              <div className="flex items-center gap-4">
                {modalType === 'quote' && selectedMain !== null && (
                  <button onClick={() => { setSelectedMain(null); setSelectedSub(null); }} className="p-2 hover:bg-foreground/5 rounded-full transition-colors"><ArrowLeft size={16} /></button>
                )}
                <h3 className="text-lg md:text-xl font-black uppercase tracking-tighter italic">
                  {modalType === 'privacy' ? 'Privacy Policy' : modalType === 'terms' ? 'Terms of Service' : 'Select Service'}
                </h3>
              </div>
              <button onClick={closeModal} className="p-2 rounded-full hover:bg-foreground/5 transition-colors"><X size={20} /></button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
              {modalType === 'quote' ? (
                <div className="space-y-2">
                  {selectedMain === null ? (
                    SERVICES_DATA.map((service, idx) => (
                      <button key={idx} onClick={() => setSelectedMain(idx)} className="w-full group flex items-center justify-between p-4 md:p-5 rounded-2xl bg-foreground/5 border border-transparent hover:border-foreground/20 hover:bg-foreground/10 text-left transition-all">
                        <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest">{service.title}</span>
                        <ChevronRight className="w-4 h-4 opacity-40" />
                      </button>
                    ))
                  ) : (
                    <div className="space-y-2">
                      <p className="text-[9px] font-black uppercase tracking-[0.4em] opacity-30 mb-4 px-1">Phase 2: Specific Requirement</p>
                      {SERVICES_DATA[selectedMain].subServices.map((sub, idx) => (
                        <button key={idx} onClick={() => setSelectedSub(sub)} className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all text-left ${selectedSub === sub ? 'bg-foreground text-background border-foreground' : 'bg-foreground/5 border-transparent hover:border-foreground/20 hover:bg-foreground/10'}`}>
                          <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-wide">{sub}</span>
                          {selectedSub === sub && <ShieldCheck className="w-4 h-4" />}
                        </button>
                      ))}
                      {selectedSub && (
                        <button onClick={handleGetQuote} className="w-full mt-6 flex items-center justify-center gap-4 bg-foreground text-background p-5 rounded-2xl font-black uppercase text-[10px] md:text-xs tracking-[0.4em] shadow-xl hover:scale-[1.02] active:scale-95 transition-all">
                          Get Quote
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex-1 overflow-y-auto text-sm leading-relaxed text-foreground/70 space-y-6">
                  {modalType === 'privacy' ? (
                    <>
                      <p className="font-bold text-foreground">Last Updated: {currentYear}</p>
                      <section className="space-y-2">
                        <h4 className="font-black text-foreground uppercase tracking-widest text-xs">1. Data Collection</h4>
                        <p>Built Wright Construction Inc. collects personal information solely to provide premium construction services and maintain communication with our GTA clients.</p>
                      </section>
                      <section className="space-y-2">
                        <h4 className="font-black text-foreground uppercase tracking-widest text-xs">2. Use of Information</h4>
                        <p>Your information is used to facilitate site assessments, permit acquisitions, and project management.</p>
                      </section>
                      <section className="space-y-2">
                        <h4 className="font-black text-foreground uppercase tracking-widest text-xs">3. Security</h4>
                        <p>We implement industry-standard security measures to protect your personal information from unauthorized access or disclosure.</p>
                      </section>
                    </>
                  ) : (
                    <>
                      <p className="font-bold text-foreground">Service Standards Agreement</p>
                      <section className="space-y-2">
                        <h4 className="font-black text-foreground uppercase tracking-widest text-xs">1. Project Scope</h4>
                        <p>All construction work is performed according to the signed contract and local building codes in Scarborough and the greater Toronto area.</p>
                      </section>
                      <section className="space-y-2">
                        <h4 className="font-black text-foreground uppercase tracking-widest text-xs">2. Payment Terms</h4>
                        <p>Payment schedules are defined in individual project contracts. Late payments may result in work suspension.</p>
                      </section>
                      <section className="space-y-2">
                        <h4 className="font-black text-foreground uppercase tracking-widest text-xs">3. Liability</h4>
                        <p>Built Wright Construction Inc. maintains full insurance coverage for all active job sites as per Ontario regulations.</p>
                      </section>
                    </>
                  )}
                </div>
              )}
              <div className="h-10" />
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}