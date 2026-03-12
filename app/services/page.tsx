"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import HeaderBar from "@/components/HeaderBar";
import FooterSection from "@/components/FooterSection";
import { 
  Home, Paintbrush, ChefHat, Layout, TreePine, 
  Briefcase, Activity, Zap, ClipboardCheck, Leaf,
  ChevronRight, Fingerprint, Construction, ZapOff,
  ArrowRight, ChevronDown, ChevronLeft
} from "lucide-react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";

// Enhanced data with sub-categories for the SMS logic
const servicesData = [
  { 
    id: "01", title: "Custom Luxury Homes", prefix: "custom", icon: Home, slug: "custom-luxury-homes",
    subs: ["Estate Planning", "Modern Architecture", "Classical Design", "Passive House"]
  },
  { 
    id: "02", title: "High-End Renovations", prefix: "reno", icon: Paintbrush, slug: "high-end-renovations",
    subs: ["Whole Home Rehab", "Heritage Restoration", "Structural Open-Concept", "Luxury Finishes"]
  },
  { 
    id: "03", title: "Designer Kitchen & Bath", prefix: "kb", icon: ChefHat, slug: "designer-kitchen-bath",
    subs: ["Chef's Kitchens", "Spa Bathrooms", "Smart Appliances", "Custom Island Design"]
  },
  { 
    id: "04", title: "Architectural Millwork", prefix: "cab", icon: Layout, slug: "custom-cabinetry",
    subs: ["Custom Cabinetry", "Walk-in Closets", "Library Walls", "Bespoke Vanities"]
  },
  { 
    id: "05", title: "Outdoor Environments", prefix: "out", icon: TreePine, slug: "outdoor-living",
    subs: ["Custom Decks", "Pool Houses", "Hardscaping", "Outdoor Kitchens"]
  },
  { 
    id: "06", title: "Commercial Fit-Outs", prefix: "com", icon: Briefcase, slug: "commercial-office",
    subs: ["Office Build-outs", "Retail Construction", "Restaurant Interiors", "Tenant Upgrades"]
  },
  { 
    id: "07", title: "Structural Systems", prefix: "struc", icon: Activity, slug: "structural-engineering",
    subs: ["Foundations", "Framing", "Load-bearing Removal", "Concrete Work"]
  },
  { 
    id: "08", title: "Smart Infrastructure", prefix: "smart", icon: Zap, slug: "smart-home-mechanical",
    subs: ["Home Automation", "HVAC Systems", "Electrical Upgrades", "Plumbing Systems"]
  },
  { 
    id: "09", title: "Project Management", prefix: "pm", icon: ClipboardCheck, slug: "project-management",
    subs: ["Permit Acquisition", "Cost Estimating", "Scheduling", "Quality Control"]
  },
  { 
    id: "10", title: "Sustainable Building", prefix: "eco", icon: Leaf, slug: "sustainable-building",
    subs: ["Net-Zero Ready", "Solar Integration", "Eco Materials", "Water Harvesting"]
  },
];

function BoxSlider({ prefix }: { prefix: string }) {
  const [index, setIndex] = useState(0);
  const images = [`/services/${prefix}-1.jpg`, `/services/${prefix}-2.jpg`, `/services/${prefix}-3.jpg` ];
  
  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % images.length), 4500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="absolute inset-0 z-0 bg-[#121212]">
      {images.map((img, i) => (
        <motion.img 
          key={i} 
          src={img} 
          initial={{ opacity: 0 }} 
          animate={{ opacity: i === index ? 0.6 : 0 }} 
          transition={{ duration: 1.5, ease: "linear" }} 
          className="absolute inset-0 w-full h-full object-cover" 
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" />
    </div>
  );
}

export default function ServicesPage() {
  const [selectedMain, setSelectedMain] = useState<typeof servicesData[0] | null>(null);
  const [selectedSub, setSelectedSub] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const x = useMotionValue(0);
  const textOpacity = useTransform(x, [0, 150], [0.4, 0]);

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x > 200) {
      const phoneNumber = "4167003426";
      const mainText = selectedMain ? selectedMain.title : "your services";
      const subText = selectedSub ? ` specifically focusing on ${selectedSub}` : "";
      const message = `I wanna talk to you about ${mainText}${subText} and get started on a project.`;
      window.location.href = `sms:+1${phoneNumber}?body=${encodeURIComponent(message)}`;
    }
  };

  const ContactControls = () => (
    <div className="max-w-[800px] mx-auto px-2 space-y-4">
      {/* SERVICE SELECTION DROPDOWN */}
      <div className="relative z-50">
        <button 
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full h-16 md:h-24 flex items-center justify-between px-6 md:px-8 rounded-[1.5rem] md:rounded-[2.5rem] border border-foreground/10 bg-[var(--card-bg)] shadow-lg transition-all hover:border-orange-600/50"
        >
          <div className="flex flex-col text-left">
            <span className="text-[8px] md:text-[10px] font-black text-orange-600 uppercase tracking-widest">Inquiry Selection</span>
            <span className="text-sm md:text-2xl font-black uppercase italic tracking-tighter text-[var(--foreground)] truncate max-w-[250px] md:max-w-none">
              {selectedSub ? `${selectedMain?.title} : ${selectedSub}` : (selectedMain?.title || "Select Service Type")}
            </span>
          </div>
          <ChevronDown className={`w-4 h-4 md:w-6 md:h-6 text-orange-600 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-[110%] left-0 right-0 bg-[var(--card-bg)] border border-foreground/10 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl backdrop-blur-xl z-[60]"
            >
              <div className="p-2 md:p-4">
                {!selectedMain ? (
                  /* MAIN CATEGORIES VIEW */
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2 max-h-[40vh] md:max-h-none overflow-y-auto">
                    {servicesData.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setSelectedMain(s)}
                        className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl hover:bg-orange-600 group transition-colors text-left"
                      >
                        <s.icon className="w-4 h-4 md:w-5 md:h-5 text-orange-600 group-hover:text-white transition-colors" />
                        <span className="font-bold uppercase italic text-[10px] md:text-xs tracking-tight group-hover:text-white transition-colors">{s.title}</span>
                      </button>
                    ))}
                  </div>
                ) : (
                  /* SUB-CATEGORIES VIEW */
                  <div className="space-y-2">
                    <button 
                      onClick={() => { setSelectedMain(null); setSelectedSub(""); }}
                      className="flex items-center gap-2 text-[10px] font-black text-orange-600 uppercase tracking-widest p-2 hover:opacity-70"
                    >
                      <ChevronLeft size={14} /> Back to Divisions
                    </button>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2">
                      {selectedMain.subs.map((sub) => (
                        <button
                          key={sub}
                          onClick={() => {
                            setSelectedSub(sub);
                            setIsDropdownOpen(false);
                          }}
                          className={`flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl transition-colors text-left border ${selectedSub === sub ? 'bg-orange-600 text-white border-transparent' : 'bg-foreground/5 border-transparent hover:border-orange-600/30'}`}
                        >
                          <span className="font-bold uppercase italic text-[10px] md:text-xs tracking-tight">{sub}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* SLIDE TO CONTACT */}
      <div className="relative w-full h-16 md:h-24 flex items-center rounded-full border border-foreground/10 bg-[var(--card-bg)] overflow-hidden shadow-lg">
        <motion.div 
          style={{ opacity: textOpacity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <span className="text-sm md:text-3xl font-black uppercase italic tracking-tighter text-[var(--foreground)] opacity-40">
            Slide to Contact
          </span>
        </motion.div>
        
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 280 }}
          dragElastic={0.1}
          dragSnapToOrigin={true}
          onDragEnd={handleDragEnd}
          style={{ x }}
          className="relative z-20 flex items-center justify-center w-[54px] h-[54px] md:w-[84px] md:h-[84px] ml-1 md:ml-1.5 rounded-full bg-emerald-600 cursor-grab active:cursor-grabbing shadow-xl hover:bg-emerald-500 transition-colors"
        >
          <div className="relative flex items-center justify-center w-full h-full">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-white/20 scale-110"
            />
            <ArrowRight className="w-5 h-5 md:w-8 md:h-8 text-white" />
          </div>
        </motion.div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans overflow-x-hidden">
      <HeaderBar />
      
      <section className="relative pt-40 pb-10 md:pb-20 px-6">
        <div className="mx-auto max-w-[1600px] relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div>
              <div className="flex items-center gap-3 text-orange-600 mb-6">
                <Construction className="w-5 h-5 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.8em]">Core Capabilities</span>
              </div>
              <h1 className="text-6xl md:text-[11rem] font-black tracking-tighter uppercase italic leading-[0.8] mb-4">Service <br /> <span className="text-orange-600">Divisions</span></h1>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MOBILE ONLY: SHOW CONTROLS AT TOP */}
      <div className="block md:hidden mb-12">
        <ContactControls />
      </div>

      <section className="mx-auto max-w-[1600px] px-6 pb-20">
        {/* UPDATED GRID: grid-cols-2 for mobile side-by-side */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 mb-12">
          {servicesData.map((service, idx) => {
            const isFeatured = service.id === "09" || service.id === "10";
            const shouldAnimateInstantly = idx < 2;

            return (
              <Link 
                key={service.id} 
                href={`/services/${service.slug}`}
                // isFeatured spans 2 columns on mobile AND laptop
                className={`${isFeatured ? "col-span-2" : "col-span-1"} block w-full`}
              >
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={shouldAnimateInstantly ? { opacity: 1, scale: 1 } : {}}
                  whileInView={!shouldAnimateInstantly ? { opacity: 1, scale: 1 } : {}}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ 
                    delay: shouldAnimateInstantly ? 0.1 : idx * 0.05,
                    duration: 0.5 
                  }}
                  className="group relative h-[300px] md:h-[650px] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border border-foreground/5 bg-[var(--card-bg)] cursor-pointer"
                >
                  <BoxSlider prefix={service.prefix} />
                  <div className="relative z-10 h-full p-5 md:p-10 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-orange-600 text-white shadow-2xl group-hover:rotate-[360deg] transition-transform duration-700">
                        <service.icon className="w-4 h-4 md:w-6 md:h-6" />
                      </div>
                      <Fingerprint className="text-orange-600/20 w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <div className="backdrop-blur-xl bg-[var(--background)]/60 p-4 md:p-6 rounded-[1.2rem] md:rounded-[2rem] border border-foreground/10 space-y-1 md:space-y-2">
                      <span className="text-[7px] md:text-[9px] font-black text-orange-500 uppercase tracking-widest italic">Division {service.id}</span>
                      <h3 className={`${isFeatured ? 'text-xl md:text-6xl' : 'text-xs md:text-3xl'} font-black uppercase italic leading-tight tracking-tighter text-[var(--foreground)]`}>
                        {service.title}
                      </h3>
                      <div className="flex items-center gap-1 md:gap-2 text-[7px] md:text-[9px] font-black uppercase tracking-[0.3em] text-orange-500 pt-0.5 md:pt-1">
                        View Process <ChevronRight className="w-2 h-2 md:w-3 md:h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* LAPTOP ONLY: SHOW CONTROLS AT BOTTOM */}
        <div className="hidden md:block">
          <ContactControls />
        </div>
      </section>

      <section className="py-40 px-6 border-t border-foreground/5 bg-gradient-to-b from-transparent to-foreground/5">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-4">
                <div className="h-1 w-20 bg-orange-600 mb-8" />
                <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.85] text-[var(--foreground)]">
                  Premium <br/><span className="text-orange-600">Assurance</span>
                </h2>
            </div>
            <div className="lg:pt-10">
              <p className="text-lg md:text-xl font-medium uppercase tracking-tight leading-relaxed text-[var(--foreground)] opacity-80 mb-8">
                Beside our core structural divisions, Built Wright provides an exhaustive suite of specialized premium services including hyper-realistic simulation and bespoke fabrication.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Acoustic Engineering", "Seismic Fortification", "Thermal Simulation", "BIM Integration"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-orange-500">
                    <ZapOff className="w-3 h-3" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}