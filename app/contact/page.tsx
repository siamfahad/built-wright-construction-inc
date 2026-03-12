"use client";

import React, { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import HeaderBar from "@/components/HeaderBar";

import {
  ArrowRight,
  X,
  Briefcase,
  FolderKanban,
  Compass,
  Ruler,
  Hammer,
  Sparkles,
  MapPin,
  Clock,
  PhoneCall,
  Mail,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

type ModalKey =
  | "services"
  | "projects"
  | "discovery"
  | "design"
  | "fabrication"
  | "installation";

type ModalContent = {
  title: string;
  subtitle: string;
  bullets: string[];
  ctaLabel?: string;
  ctaHref?: string;
};

export default function ContactPage() {
  const [activeModal, setActiveModal] = useState<ModalKey | null>(null);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const mapEmbedUrl = useMemo(
    () => "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.045434559288!2d-79.23668352341516!3d43.77192667109848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d03d6d6e7f8d%3A0x6b8f3b8f3b8f3b8f!2s1960%20Ellesmere%20Rd%20Unit%2016%2C%20Scarborough%2C%20ON%20M1H%202V9!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca",
    []
  );

  const directionsUrl = useMemo(
    () => "https://www.google.com/maps/dir//1960+Ellesmere+Rd+Unit+16,+Scarborough,+ON+M1H+2V9",
    []
  );

  const modalContent: Record<ModalKey, ModalContent> = useMemo(
    () => ({
      services: {
        title: "Services",
        subtitle: "From full builds to high-end interior work — we handle the details so the result feels effortless.",
        bullets: [
          "Custom builds & major construction",
          "Luxury renovations",
          "Custom cabinetry & vanities",
          "Finishing + installation",
        ],
        ctaLabel: "Open Services page",
        ctaHref: "/services",
      },
      projects: {
        title: "Projects",
        subtitle: "See real work, real finishes, real results. The best proof is the build itself.",
        bullets: [
          "Before/after transformations",
          "Detail shots: seams, alignment, finishing",
          "Material + finish references",
          "Full-scope examples for inspiration",
        ],
        ctaLabel: "Open Projects page",
        ctaHref: "/projects",
      },
      discovery: {
        title: "Process: Discovery",
        subtitle: "We capture the site reality and define constraints before any work starts.",
        bullets: [
          "Site check + measurements",
          "Feasibility & constraints review",
          "Material options + approach",
          "Clear scope to avoid surprises",
        ],
        ctaLabel: "Open Discovery page",
        ctaHref: "/process/discovery",
      },
      design: {
        title: "Process: Design",
        subtitle: "We align style, layout, materials, and specifications before execution.",
        bullets: [
          "Layout confirmation",
          "Finish + material selection",
          "Build planning & detailing",
          "Final spec approval before execution",
        ],
        ctaLabel: "Open Design page",
        ctaHref: "/process/design",
      },
      fabrication: {
        title: "Process: Fabrication",
        subtitle: "Precision building in controlled conditions — consistent, clean, and accurate.",
        bullets: [
          "Tight tolerances during production",
          "Quality checks through every phase",
          "Hardware fit verification",
          "Prepared for clean installation",
        ],
        ctaLabel: "Open Fabrication page",
        ctaHref: "/process/fabrication",
      },
      installation: {
        title: "Process: Installation",
        subtitle: "White-glove install and finishing — alignment, sealing, and final detail checks.",
        bullets: [
          "Floor + corner protection",
          "Clean adjustments with dust control",
          "Precision alignment + final fit",
          "Walkthrough + final audit",
        ],
        ctaLabel: "Open Installation page",
        ctaHref: "/process/installation",
      },
    }),
    []
  );

  const exploreCards = [
    { key: "services" as const, title: "Services", desc: "The scope of our craft.", icon: <Briefcase className="h-5 w-5" /> },
    { key: "projects" as const, title: "Projects", desc: "A gallery of excellence.", icon: <Folder_Kanban className="h-5 w-5" /> },
  ];

  const processCards = [
    { key: "discovery" as const, title: "Discovery", desc: "Site analysis & planning.", icon: <Compass className="h-5 w-5" /> },
    { key: "design" as const, title: "Design", desc: "Material & layout logic.", icon: <Ruler className="h-5 w-5" /> },
    { key: "fabrication" as const, title: "Fabrication", desc: "The precision build phase.", icon: <Hammer className="h-5 w-5" /> },
    { key: "installation" as const, title: "Installation", desc: "The white-glove reveal.", icon: <Sparkles className="h-5 w-5" /> },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-emerald-500/30">
      <HeaderBar />

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.15)_0%,transparent_45%),radial-gradient(circle_at_80%_15%,rgba(59,130,246,0.1)_0%,transparent_40%),radial-gradient(circle_at_55%_90%,rgba(168,85,247,0.1)_0%,transparent_45%)]" />
      </div>

      <section className="mx-auto max-w-7xl px-6 pt-28 md:pt-36 pb-12">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 mb-6">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500/80">Direct Inquiry Line</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] mb-8">
              Get In <br />
              <span className="text-emerald-500">Touch.</span>
            </h1>

            <p className="max-w-xl text-base md:text-lg text-foreground/60 leading-relaxed font-medium">
              Ready to start your project? You can reach out to us directly through the options below. We are here to bring your vision to life.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="tel:+14167003426"
                className="group relative overflow-hidden inline-flex items-center justify-center gap-3 rounded-2xl bg-foreground text-background px-8 py-5 text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:scale-[1.03] active:scale-95 shadow-xl shadow-foreground/10"
              >
                <PhoneCall className="h-4 w-4" />
                Call Us
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="mailto:nc2020@gmail.com"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-foreground/10 bg-background/50 px-8 py-5 text-[11px] font-black uppercase tracking-[0.2em] backdrop-blur-xl transition-all hover:border-foreground/30 hover:bg-foreground/5"
              >
                <Mail className="h-4 w-4" />
                Email Us
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4">
              <InfoItem icon={<MapPin className="h-5 w-5" />} label="Studio" value="1960 Ellesmere Rd, ON" />
              <InfoItem icon={<Clock className="h-5 w-5" />} label="Availability" value="Mon — Sat • 9AM — 8PM" />
            </div>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="rounded-[3rem] border-2 border-foreground/10 bg-gradient-to-br from-foreground/[0.04] to-transparent p-8 md:p-10 backdrop-blur-2xl relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 h-32 w-32 bg-emerald-500/10 blur-[60px] group-hover:bg-emerald-500/20 transition-colors" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-14 w-14 rounded-2xl bg-foreground text-background flex items-center justify-center shadow-2xl rotate-3 group-hover:rotate-0 transition-transform">
                    <ShieldCheck className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">Operational Excellence</p>
                    <h3 className="text-3xl font-black tracking-tighter uppercase italic">Precision Logic</h3>
                  </div>
                </div>
                <ul className="space-y-5">
                  {[
                    "Architectural-grade site protection protocol.",
                    "Sub-millimeter alignment & detail verification.",
                    "Comprehensive multi-point handover audit.",
                    "Integrated dust management systems."
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-4 group/li">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/10" />
                      <span className="text-sm font-semibold text-foreground/70 group-hover/li:text-foreground transition-colors leading-snug">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE SECTION - 2 COLUMNS ON MOBILE */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 text-center md:text-left">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-500 mb-2">Internal Index</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic">Site Navigation</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 md:gap-5">
          {exploreCards.map((c) => (
            <ModernModalCard
              key={c.key}
              title={c.title}
              desc={c.desc}
              icon={c.icon}
              onClick={() => setActiveModal(c.key)}
            />
          ))}
        </div>
      </section>

      {/* PROCESS SECTION - 2 COLUMNS ON MOBILE */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-3xl mb-12 text-center md:text-left">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-500 mb-2">The Methodology</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic mb-4">How We Build</h2>
          <p className="text-base text-foreground/50 font-medium">
            Select any phase to explore our specialized approach and rigorous quality control measures.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {processCards.map((c) => (
            <ModernModalCard
              key={c.key}
              title={c.title}
              desc={c.desc}
              icon={c.icon}
              onClick={() => setActiveModal(c.key)}
              accent="emerald"
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 pb-24">
        <div className="rounded-[3.5rem] overflow-hidden border-2 border-foreground/5 bg-background/50 backdrop-blur-3xl shadow-2xl">
          <div className="p-8 md:p-12 border-b border-foreground/5 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40 mb-2">Global Positioning</p>
              <h2 className="text-4xl font-black tracking-tighter uppercase italic">Our Location</h2>
              <p className="mt-2 text-foreground/60 font-medium italic">1960 Ellesmere Rd Unit 16, Scarborough, ON M1H 2V9</p>
            </div>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-foreground text-background px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] shadow-2xl transition-all hover:scale-105 active:scale-95"
            >
              Get Directions <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="h-[600px] w-full">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="saturate-[1.2]"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-foreground/5 bg-foreground/[0.01]">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center md:text-left">
          <p className="text-[11px] font-black uppercase tracking-[0.6em] opacity-20">
            © {currentYear} Built Wright Construction Inc. All rights reserved.
          </p>
        </div>
      </footer>

      {activeModal && (
        <Modal
          title={modalContent[activeModal].title}
          subtitle={modalContent[activeModal].subtitle}
          bullets={modalContent[activeModal].bullets}
          ctaHref={modalContent[activeModal].ctaHref}
          ctaLabel={modalContent[activeModal].ctaLabel}
          onClose={() => setActiveModal(null)}
        />
      )}
    </main>
  );
}

function InfoItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="group rounded-3xl border-2 border-foreground/5 bg-foreground/[0.02] p-6 transition-colors hover:border-emerald-500/20">
      <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
        <div className="h-10 w-10 rounded-xl bg-foreground/5 flex items-center justify-center text-emerald-500 transition-transform group-hover:scale-110">
          {icon}
        </div>
        <div>
          <p className="text-[9px] font-black uppercase tracking-[0.4em] opacity-40 mb-0.5">{label}</p>
          <p className="text-[13px] font-bold tracking-tight">{value}</p>
        </div>
      </div>
    </div>
  );
}

function ModernModalCard({
  title,
  desc,
  icon,
  onClick,
  accent = "blue",
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  onClick: () => void;
  accent?: "blue" | "emerald";
}) {
  const accentColor = accent === "emerald" ? "text-emerald-500" : "text-blue-500";
  const glowStyle = accent === "emerald" 
    ? "hover:border-emerald-500/30 hover:shadow-emerald-500/10" 
    : "hover:border-blue-500/30 hover:shadow-blue-500/10";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative text-left w-full rounded-[1.5rem] md:rounded-[2.5rem] border-2 border-foreground/10 bg-background/40 backdrop-blur-xl p-5 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-foreground/[0.02] hover:shadow-2xl active:scale-[0.98] ${glowStyle}`}
    >
      <div className="flex items-center justify-between mb-4 md:mb-8">
        <div className={`h-10 w-10 md:h-12 md:w-12 rounded-xl md:rounded-2xl bg-foreground/5 flex items-center justify-center transition-colors group-hover:bg-foreground/10 ${accentColor}`}>
          {icon}
        </div>
        <div className="h-8 w-8 rounded-full border border-foreground/10 hidden md:flex items-center justify-center opacity-0 -translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0">
          <ArrowRight className="h-3 w-3" />
        </div>
      </div>

      <h3 className="text-sm md:text-xl font-black uppercase tracking-tighter italic mb-1 md:mb-2">
        {title}
      </h3>
      <p className="text-[10px] md:text-sm text-foreground/50 font-medium leading-tight md:leading-relaxed line-clamp-2 md:line-clamp-none">
        {desc}
      </p>
    </button>
  );
}

function Modal({
  title,
  subtitle,
  bullets,
  ctaHref,
  ctaLabel,
  onClose,
}: {
  title: string;
  subtitle: string;
  bullets: string[];
  ctaHref?: string;
  ctaLabel?: string;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-8">
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-background/80 backdrop-blur-xl"
      />
      <div className="relative w-full max-w-2xl rounded-[2.5rem] md:rounded-[3.5rem] border-2 border-foreground/10 bg-background shadow-2xl overflow-hidden">
        <div className="p-8 md:p-14 border-b border-foreground/5 relative">
           <button
            onClick={onClose}
            className="absolute top-6 right-6 h-10 w-10 md:h-12 md:w-12 rounded-xl md:rounded-2xl border-2 border-foreground/5 hover:border-foreground/20 flex items-center justify-center transition-all hover:rotate-90"
          >
            <X className="h-5 w-5" />
          </button>
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-500 mb-3">Protocol Overview</p>
          <h3 className="text-2xl md:text-4xl font-black tracking-tighter uppercase italic leading-none mb-4 md:mb-6">
            {title}
          </h3>
          <p className="text-sm md:text-base text-foreground/60 font-medium leading-relaxed">
            {subtitle}
          </p>
        </div>
        <div className="p-8 md:p-14 bg-foreground/[0.01]">
          <ul className="grid gap-3 md:gap-4">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 p-3 md:p-4 rounded-xl md:rounded-2xl bg-foreground/[0.03] border border-foreground/5">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                <span className="text-xs md:text-sm font-bold opacity-80">{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4">
            {ctaHref && (
              <Link
                href={ctaHref}
                className="flex-1 inline-flex items-center justify-center gap-3 rounded-xl md:rounded-2xl bg-foreground text-background px-8 py-4 md:py-5 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] shadow-xl hover:opacity-90 transition-all active:scale-95"
              >
                {ctaLabel ?? "View Full Details"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
            <button
              onClick={onClose}
              className="flex-1 inline-flex items-center justify-center rounded-xl md:rounded-2xl border-2 border-foreground/10 bg-background px-8 py-4 md:py-5 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] hover:bg-foreground/5 transition-all"
            >
              Return to Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Folder_Kanban({ className }: { className?: string }) {
  return <Folder_Kanban_Icon className={className} />;
}


import { FolderKanban as Folder_Kanban_Icon } from "lucide-react";