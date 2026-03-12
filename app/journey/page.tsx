"use client";

import React, { useEffect, useRef, useState } from "react";
import HeaderBar from "@/components/HeaderBar";
import FooterSection from "@/components/FooterSection";
import { 
  Play, 
  Camera, 
  Film, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Calendar as CalendarIcon, 
  Clock, 
  CheckCircle2, 
  Send 
} from "lucide-react";

const processMedia = [
  {
    id: "01",
    title: "Project Initiation",
    desc: "The foundation of every build starts with a comprehensive site assessment. We establish the project perimeter, verify structural benchmarks, and prepare the environment for a safe and efficient workflow.",
    mediaType: "video",
    src: "/journey/step-01.mp4"
  },
  {
    id: "02",
    title: "Demolition & Clearing",
    desc: "Systematic removal of legacy structures while preserving the integrity of the core site. This phase ensures a clean, engineered slate for the new architecture, following strict safety and waste management protocols.",
    mediaType: "video",
    src: "/journey/step-02.mp4"
  },
  {
    id: "03",
    title: "Structural Framework",
    desc: "Precision engineering meets physical form. We install the load-bearing skeleton of the project, ensuring every joist, stud, and beam aligns perfectly with the architectural blueprints for long-term stability.",
    mediaType: "video",
    src: "/journey/step-03.mp4"
  },
  {
    id: "04",
    title: "Technical Rough-ins",
    desc: "Integrating the vital systems. Our team installs the complex network of electrical circuitry, plumbing lines, and HVAC ducting behind the scenes before the interior surfaces are sealed.",
    mediaType: "video",
    src: "/journey/step-04.mp4"
  },
  {
    id: "05",
    title: "Insulation & Drywall",
    desc: "Enhancing thermal efficiency and defining the interior volume. We apply high-performance insulation followed by expert drywall installation to create seamless, ready-to-finish wall and ceiling surfaces.",
    mediaType: "video",
    src: "/journey/step-05.mp4"
  },
  {
    id: "06",
    title: "Custom Carpentry",
    desc: "Where detail defines the space. Our master carpenters install bespoke trim, intricate moldings, and architectural woodwork that bring character and refined craftsmanship to every corner of the home.",
    mediaType: "video",
    src: "/journey/step-06.mp4"
  },
  {
    id: "07",
    title: "Flooring & Tiling",
    desc: "Executing high-durability finishes with aesthetic precision. From large-format stone tiling to premium hardwood layouts, we focus on perfect alignment and flawless grout lines across all surfaces.",
    mediaType: "video",
    src: "/journey/step-07.mp4"
  },
  {
    id: "08",
    title: "Cabinetry & Fixtures",
    desc: "The final integration of function and luxury. We install custom kitchen systems, designer vanities, and high-end hardware, ensuring every mechanism operates with smooth, premium performance.",
    mediaType: "video",
    src: "/journey/step-08.MOV"
  }
];


const VideoItem = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-15% 0px -15% 0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = videoRef.current;
        if (video) {
          if (entry.isIntersecting) {
            if (video.paused) {
              video.currentTime = 0;
              video.play().catch(() => {});
            }
          } else {
            video.pause();
          }
        }
      });
    }, options);

    if (videoRef.current) observer.observe(videoRef.current);
    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
    />
  );
};


const BookingModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingMonth, setBookingMonth] = useState(new Date().getMonth());
  const [bookingYear, setBookingYear] = useState(new Date().getFullYear());

  const today = new Date();
  const currentHour = today.getHours();
  const isTodayDisabled = currentHour >= 17;

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysInMonth = (month: number, year: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(bookingYear, bookingMonth, 1).getDay();

  const handlePrevMonth = () => {
    if (bookingMonth === today.getMonth() && bookingYear === today.getFullYear()) return;
    if (bookingMonth === 0) {
      setBookingMonth(11);
      setBookingYear(bookingYear - 1);
    } else {
      setBookingMonth(bookingMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (bookingMonth === 11) {
      setBookingMonth(0);
      setBookingYear(bookingYear + 1);
    } else {
      setBookingMonth(bookingMonth + 1);
    }
  };

  const isDateDisabled = (day: number) => {
    const checkDate = new Date(bookingYear, bookingMonth, day);
    checkDate.setHours(0, 0, 0, 0);
    const compareToday = new Date();
    compareToday.setHours(0, 0, 0, 0);
    if (checkDate < compareToday) return true;
    if (checkDate.getTime() === compareToday.getTime() && isTodayDisabled) return true;
    return false;
  };

  const handleSmsBooking = () => {
    if (!selectedDate || !selectedTime) return;
    const phoneNumber = "4167003426";
    const appointmentDate = `${monthNames[bookingMonth]} ${selectedDate}, ${bookingYear}`;
    const message = `Hey Built Wright! I would like to consult you about my home renovation. I'm looking at ${appointmentDate} at ${selectedTime}. Please let me know if this works!`;
    window.location.href = `sms:+1${phoneNumber}&body=${encodeURIComponent(message)}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-xl animate-in fade-in duration-500" 
        onClick={onClose} 
      />
      
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-background border border-foreground/10 rounded-[2rem] md:rounded-[3rem] shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-10 duration-500">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-[110] p-3 rounded-full bg-foreground/5 hover:bg-foreground hover:text-background transition-all"
        >
          <X size={20} />
        </button>

        <div className="p-8 md:p-12">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/20">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">Live Schedule</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-[0.9]">
                Book Your <br />
                <span className="opacity-30">Consultation.</span>
              </h2>
              
              <p className="text-xs font-medium opacity-50 max-w-sm leading-relaxed uppercase tracking-wide">
                Secure a site visit or virtual meeting. Our calendar reflects real-time availability for GTA projects.
              </p>

              <div className="space-y-3">
                 {[
                   "Same-day booking available",
                   "Professional site assessment",
                   "Detailed project estimation"
                 ].map((text, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                     <span className="text-[10px] font-black uppercase tracking-widest">{text}</span>
                   </div>
                 ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="bg-foreground/[0.02] border border-foreground/10 rounded-[2rem] p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-foreground text-background rounded-xl">
                      <CalendarIcon size={18} />
                    </div>
                    <div>
                      <h3 className="text-base font-black uppercase tracking-tighter">{monthNames[bookingMonth]}</h3>
                      <p className="text-[9px] font-black opacity-30 uppercase tracking-[0.2em]">{bookingYear}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button 
                      onClick={handlePrevMonth}
                      disabled={bookingMonth === today.getMonth() && bookingYear === today.getFullYear()}
                      className="p-1.5 rounded-lg border border-foreground/10 hover:bg-foreground/5 disabled:opacity-20 transition-all"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button 
                      onClick={handleNextMonth}
                      className="p-1.5 rounded-lg border border-foreground/10 hover:bg-foreground/5 transition-all"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-1.5 text-center mb-4">
                  {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                    <div key={day} className="text-[9px] font-black opacity-20 uppercase tracking-widest pb-2">{day}</div>
                  ))}
                  
                  {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                    <div key={`empty-${i}`} className="aspect-square" />
                  ))}

                  {Array.from({ length: daysInMonth(bookingMonth, bookingYear) }).map((_, i) => {
                    const day = i + 1;
                    const disabled = isDateDisabled(day);
                    const selected = selectedDate === day;

                    return (
                      <button
                        key={day}
                        disabled={disabled}
                        onClick={() => {
                          setSelectedDate(day);
                          setSelectedTime(null);
                        }}
                        className={`
                          aspect-square rounded-xl text-[10px] font-black transition-all flex items-center justify-center relative
                          ${disabled ? "opacity-10 cursor-not-allowed" : "hover:bg-foreground hover:text-background cursor-pointer"}
                          ${selected ? "bg-foreground text-background scale-105 shadow-lg z-10" : "bg-foreground/[0.03]"}
                        `}
                      >
                        {day}
                        {day === today.getDate() && bookingMonth === today.getMonth() && !disabled && (
                          <div className="absolute top-1 right-1 h-1 w-1 rounded-full bg-emerald-500" />
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className={`mt-6 pt-6 border-t border-foreground/5 transition-all duration-500 ${selectedDate ? 'opacity-100' : 'opacity-20 pointer-events-none'}`}>
                  <div className="flex items-center gap-2 mb-3 text-foreground/40">
                    <Clock size={14} />
                    <span className="text-[9px] font-black uppercase tracking-widest">Available Times</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {['10:00 AM', '11:30 AM','01:00 PM', '04:00 PM'].map(time => (
                      <button 
                        key={time} 
                        onClick={() => setSelectedTime(time)}
                        className={`py-2.5 rounded-lg border text-[9px] font-black transition-all uppercase tracking-tighter 
                          ${selectedTime === time 
                            ? 'bg-foreground text-background border-foreground' 
                            : 'border-foreground/10 hover:border-foreground'}
                        `}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {selectedDate && selectedTime && (
                  <div className="mt-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <button 
                      onClick={handleSmsBooking}
                      className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-lg hover:scale-[1.02] active:scale-95 transition-all"
                    >
                      <Send size={14} />
                      Confirm via Text
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default function JourneyPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <HeaderBar />
      
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-600/30 bg-blue-600/5 mb-6">
          <Film size={12} className="text-blue-600" />
          <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">The Built Wright Gallery</span>
        </div>
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase italic leading-[0.85] mb-8">
          Our Work <br />
          <span className="text-blue-600">In Motion.</span>
        </h1>
        <p className="max-w-2xl mx-auto md:mx-0 text-lg opacity-60 uppercase font-medium tracking-wide">
          A technical archive of our construction process. Explore the meticulous stages of transformation.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-20">
        <div className="space-y-32 md:space-y-64">
          {processMedia.map((item, index) => (
            <div 
              key={item.id} 
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className={`w-[85%] md:w-[60%] shrink-0 ${
                index % 2 === 0 ? "self-start md:self-center" : "self-end md:self-center"
              }`}>
                <div className="relative aspect-[16/10] rounded-3xl md:rounded-[4rem] overflow-hidden bg-foreground/5 border border-foreground/10 group shadow-2xl">
                  {item.mediaType === "video" ? (
                    <VideoItem src={item.src} />
                  ) : (
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute bottom-4 left-6 z-20 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Film size={14} className="text-white" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white">Process {item.id}</span>
                  </div>
                </div>
              </div>

              <div className={`w-[90%] md:w-full space-y-4 md:space-y-6 ${
                index % 2 === 0 ? "self-end text-right md:text-left" : "self-start text-left"
              }`}>
                <div className={`flex items-baseline gap-4 ${index % 2 === 0 ? "flex-row-reverse md:flex-row" : "flex-row"}`}>
                  <span className="text-4xl md:text-6xl font-black opacity-10 italic leading-none">{item.id}</span>
                  <div className="h-px flex-1 bg-foreground/10" />
                </div>
                <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tighter leading-tight">
                  {item.title}
                </h2>
                <p className="text-[11px] md:text-base opacity-70 uppercase tracking-widest leading-relaxed font-semibold">
                  {item.desc}
                </p>
                <div className={`h-1 w-12 bg-blue-600 rounded-full ${index % 2 === 0 ? "ml-auto md:ml-0" : "mr-auto"}`} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Refined Button Section --- */}
      <section className="max-w-6xl mx-auto px-6 pb-32 flex flex-col items-center">
        <div className="w-full h-px bg-foreground/10 mb-20" />
        
        <button 
          onClick={() => setIsBookingOpen(true)}
          className="group relative px-12 py-5 overflow-hidden rounded-full bg-foreground text-background transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl"
        >
          {/* Animated Shimmer Effect */}
          <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:animate-shimmer" />
          
          {/* Glow Pulse */}
          <div className="absolute -inset-1 bg-blue-600/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <span className="relative text-xs font-black uppercase tracking-[0.4em] flex items-center gap-4">
            Book Your Consultation
            <div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
          </span>
        </button>
      </section>

      <FooterSection />

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      {/* Tailwind Custom Keyframes (Add these to your global CSS or via a style tag) */}
      <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(250%); }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </main>
  );
}