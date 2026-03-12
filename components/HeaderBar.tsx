"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Info, Hammer, Briefcase, Phone, MessageSquare, MoreHorizontal, Home } from "lucide-react";

export default function HeaderBar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  
  // LOGIC: Default to "dark" (Espresso Mode) on first load
  const [theme, setTheme] = useState("dark"); 
  
  const [showConsultation, setShowConsultation] = useState(false);
  const [showMiniMenu, setShowMiniMenu] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const THEME_DARK_HEX = "#121212"; 
  const ESPRESSO_GLASS = "rgba(22, 18, 15, 0.75)"; 

  const isProcessPage = pathname?.startsWith("/process/");

  useEffect(() => {
    // Check if the user has a saved preference; otherwise, force "dark"
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme === "light") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      // Default path: No saved theme or explicitly "dark"
      setTheme("dark");
      document.documentElement.classList.add("dark");
      if (!savedTheme) localStorage.setItem("theme", "dark");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navItems = pathname === "/" 
    ? ["About", "Services", "Projects", "Contact"] 
    : ["Home", "About", "Services", "Projects", "Contact"];

  const mobileNavRight = [
    ...(pathname !== "/" ? [{ name: "Home", href: "/", icon: <Home size={22} />, color: "#FFFFFF" }] : []),
    { name: "About", href: "/about", icon: <Info size={22} />, color: "#10B981" }, 
    { name: "Services", href: "/services", icon: <Hammer size={22} />, color: "#F59E0B" }, 
    { name: "Projects", href: "/projects", icon: <Briefcase size={22} />, color: "#8B5CF6" }, 
  ];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    try {
      const response = await fetch("https://formspree.io/f/xykdpvyj", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => { setShowConsultation(false); setSubmitted(false); }, 4000);
      }
    } catch (err) { console.error(err); } finally { setIsSubmitting(false); }
  }

  return (
    <>
      <style jsx global>{`
        @media (max-width: 768px) {
          body { padding-bottom: 140px !important; }
        }
        @keyframes mini-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .hover-bounce:hover { animation: mini-bounce 0.6s ease-in-out infinite; }
        .active-bounce { animation: mini-bounce 2s ease-in-out infinite; }
      `}</style>

      {/* MOBILE TOP BAR */}
      <div className="md:hidden fixed top-0 left-0 z-[100] w-full px-6 py-4 flex items-center justify-between backdrop-blur-2xl border-b border-white/10" style={{ backgroundColor: ESPRESSO_GLASS }}>
        <a href="/" className="flex items-center gap-3">
          <Image src="/logo/bwcc_logo.png" alt="Built Wright" width={35} height={35} priority />
          <div className="leading-tight">
            <p className="text-[11px] font-black tracking-tighter uppercase text-white">Built Wright</p>
            <p className="text-[8px] font-bold tracking-widest uppercase opacity-50 text-white">Construction Inc.</p>
          </div>
        </a>
        <button onClick={toggleTheme} className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 text-white text-lg">
          {theme === "light" ? "☕" : "☀️"}
        </button>
      </div>

      {/* LAPTOP HEADER */}
      <div className="fixed top-0 left-0 z-[100] w-full pointer-events-none hidden md:block">
        <header className={`mx-auto max-w-7xl transition-all duration-500 pointer-events-auto ${isScrolled ? "py-2 px-4" : "py-0 px-6"}`}>
          <div 
            style={{ backgroundColor: ESPRESSO_GLASS }} 
            className={`flex items-center justify-between px-6 py-3 border-x border-b border-white/10 shadow-2xl backdrop-blur-3xl transition-all duration-500 ${isScrolled ? "rounded-full mt-2 border-t" : "rounded-b-[2rem]"}`}
          >
            <a href="/" className="flex items-center gap-3 group">
              <Image src="/logo/bwcc_logo.png" alt="Built Wright" width={40} height={40} className="group-hover:scale-110 transition-transform" priority />
              <div className="hidden sm:block leading-tight">
                <p className="text-sm font-black tracking-tighter uppercase text-white">Built Wright</p>
                <p className="text-[10px] font-bold tracking-widest uppercase opacity-50 text-white">Construction</p>
              </div>
            </a>
            <nav className="flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item} href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:opacity-100 text-white/80 hover:text-white">
                  {item}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <button onClick={toggleTheme} className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 hover:bg-white/5 transition-all text-white">
                {theme === "light" ? "☕" : "☀️"}
              </button>
              <button onClick={() => setShowConsultation(true)} className="bg-white text-black px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:opacity-90 active:scale-95 shadow-lg">
                Free Consultation
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* MOBILE BOTTOM DOCK */}
      <div 
        className="md:hidden fixed bottom-6 z-[150] w-fit flex flex-col pointer-events-auto transition-all duration-700 ease-in-out" 
        style={{ 
          left: isProcessPage ? '1.5rem' : '50%', 
          transform: isProcessPage ? 'translateX(0)' : 'translateX(-50%)',
          alignItems: isProcessPage ? 'flex-start' : 'center'
        }}
      >
        <div className="relative flex flex-col items-center">
          <div 
            style={{ backgroundColor: THEME_DARK_HEX }}
            className="relative border border-white/10 rounded-[2.5rem] p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex items-center justify-center gap-1 w-fit px-4 z-[170]"
          >
            {showMiniMenu && (
              <div 
                className="absolute -top-[145px] -left-6 w-[135px] border border-white/10 rounded-[2rem] p-2 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300 z-[200]"
                style={{ backgroundColor: THEME_DARK_HEX }}
              >
                 <div className="flex flex-col gap-1">
                    <button onClick={() => { setShowConsultation(true); setShowMiniMenu(false); }} className="flex items-center gap-3 px-3 py-3 hover:bg-white/5 rounded-2xl transition-colors text-left">
                      <div className="h-7 w-7 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400"><MessageSquare size={14} /></div>
                      <span className="text-[10px] font-black uppercase tracking-tight text-white">Inquiry</span>
                    </button>
                    <a href="/contact" onClick={() => setShowMiniMenu(false)} className="flex items-center gap-3 px-3 py-3 hover:bg-white/5 rounded-2xl transition-colors">
                      <div className="h-7 w-7 rounded-full bg-red-500/20 flex items-center justify-center text-red-400"><Phone size={14} /></div>
                      <span className="text-[10px] font-black uppercase tracking-tight text-white">Contact</span>
                    </a>
                 </div>
              </div>
            )}

            <button 
              onClick={() => setShowMiniMenu(!showMiniMenu)}
              className={`flex flex-col items-center justify-center h-12 w-12 rounded-full transition-all active:scale-90 ${showMiniMenu ? 'bg-blue-600 text-white' : 'hover:bg-white/5'}`}
            >
              < MoreHorizontal size={24} className={showMiniMenu ? "rotate-90 transition-transform duration-300" : ""} />
              {!showMiniMenu && <span className="text-[6px] font-black uppercase mt-0.5 text-white">More</span>}
            </button>

            {mobileNavRight.map((item) => {
              const isActive = pathname === item.href;
              return (
                <a key={item.name} href={item.href} className={`flex flex-col items-center justify-center px-4 py-2.5 transition-all hover-bounce ${isActive ? 'active-bounce opacity-100' : 'opacity-60'}`}>
                  <span style={{ color: item.color }}>{item.icon}</span>
                  <span className="text-[7px] font-extrabold uppercase mt-1 text-white">{item.name}</span>
                </a>
              )
            })}
          </div>
        </div>
      </div>

      {/* CONSULTATION POPUP */}
      {showConsultation && (
        <div className="fixed inset-0 z-[250] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setShowConsultation(false)} />
          <div style={{ backgroundColor: THEME_DARK_HEX }} className="relative w-full max-w-lg border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl text-white animate-in zoom-in duration-300 overflow-y-auto max-h-[90vh]">
            <button onClick={() => setShowConsultation(false)} className="absolute top-6 right-8 font-bold opacity-40 hover:opacity-100 p-2 text-xl">✕</button>
            {submitted ? (
              <div className="py-16 text-center">
                <div className="text-6xl mb-6">✅</div>
                <h3 className="text-2xl font-black tracking-tighter mb-2 uppercase italic text-center">Request Logged</h3>
                <p className="text-sm opacity-60 text-center">A project manager will review your inquiry shortly.</p>
              </div>
            ) : (
              <>
                <div className="mb-8 text-center">
                  <h3 className="text-3xl font-black tracking-tighter mb-1 uppercase italic text-center">Project Inquiry</h3>
                  <p className="text-[9px] opacity-40 tracking-[0.3em] uppercase font-bold text-center text-white/40">BWC Infrastructure & Development</p>
                </div>
                <div className="flex justify-center gap-10 mb-8">
                  <div className="flex flex-col items-center gap-2">
                    <a href="tel:4167003426" className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-black hover:scale-110 shadow-xl transition-all"><span className="text-xl">📞</span></a>
                    <span className="text-[9px] font-black uppercase tracking-widest opacity-40">Call</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <a href="mailto:bwcinc2020@gmail.com" className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-black hover:scale-110 shadow-xl transition-all"><span className="text-xl">✉️</span></a>
                    <span className="text-[9px] font-black uppercase tracking-widest opacity-40">Email</span>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input required name="name" placeholder="Full Name" type="text" className="w-full p-4 bg-white/5 rounded-xl border border-white/10 outline-none" />
                    <input required name="phone" placeholder="Phone" type="tel" className="w-full p-4 bg-white/5 rounded-xl border border-white/10 outline-none" />
                  </div>
                  <input required name="email" placeholder="Email" type="email" className="w-full p-4 bg-white/5 rounded-xl border border-white/10 outline-none" />
                  <select name="type" required defaultValue="" className="w-full p-4 bg-white/5 rounded-xl border border-white/10 outline-none appearance-none font-medium text-white/60">
                    <option value="" disabled className="bg-black">Project Type...</option>
                    <option value="Residential" className="bg-black">Residential</option>
                    <option value="Renovation" className="bg-black">Luxury Renovation</option>
                    <option value="Commercial" className="bg-black">Commercial</option>
                  </select>
                  <textarea name="message" placeholder="Details" rows={3} className="w-full p-4 bg-white/5 rounded-xl border border-white/10 outline-none resize-none" />
                  <button type="submit" disabled={isSubmitting} className="w-full py-5 bg-white text-black rounded-xl font-black uppercase text-[11px] tracking-[0.3em] shadow-2xl hover:bg-gray-200 transition-all">
                    {isSubmitting ? "Processing..." : "Submit Inquiry"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}