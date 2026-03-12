"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";

type Testimonial = {
  id: string;
  name: string;
  date: string;
  rating: number;
  short: string;
  full: string;
  projectPhoto?: string;
  extraPhotos?: string[];
};

const AutoSlider = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="relative h-full w-full overflow-hidden bg-foreground/5">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img}
            alt="Project Showcase"
            fill
            className="object-cover transition-transform duration-[5000ms] hover:scale-110"
            unoptimized
          />
        </div>
      ))}
      
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-1 rounded-full transition-all duration-300 ${
                idx === current ? "w-4 bg-white" : "w-1 bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

function GoogleG() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.2 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.3-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16.3 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.2 6.1 29.4 4 24 4c-7.7 0-14.4 4.3-17.7 10.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.3 36 26.8 37 24 37c-5.3 0-9.7-3.3-11.3-8l-6.6 5.1C9.4 40.1 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1 2.6-2.9 4.7-5.1 6.1l.1-.1 6.2 5.2C39.5 36.4 44 31.8 44 24c0-1.2-.1-2.3-.4-3.5z" />
    </svg>
  );
}

function FacebookF() {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    );
  }

export default function TestimonialsSection() {
  const allTestimonials = useMemo<Testimonial[]>(() => [
    { id: "1", name: "S J", date: "a year ago", rating: 5, short: "I’m absolutely in love with my new Kitchen...", full: "I couldn’t be more thrilled with the work done by built wright construction inc ! From start to finish, they were professional, attentive, and incredibly skilled.", extraPhotos: ["/reviews/review1.jpg", "/reviews/review1_a.jpg"] },
    { id: "2", name: "Smrytee", date: "a year ago", rating: 5, short: "We were in search for a custom wall cabinet...", full: "We were in search for a custom wall cabinet for additional storage in our condo and found this place. We had a great experience.", extraPhotos: ["/reviews/review2.jpg"] },
    { id: "3", name: "Aslam Shaikh", date: "2 years ago", rating: 5, short: "Appreciate the hard, honest and professional work.", full: "Really appreciate the hard, honest and professional work in a short span of time. They managed everything and finished on time.", extraPhotos: ["/reviews/review3.jpg", "/reviews/review3_a.jpg", "/reviews/review3_b.jpg"] },
    { id: "n1", name: "Michael Thompson", date: "1 month ago", rating: 5, short: "Modern, clean, and built really solid.", full: "Had our kitchen and main floor renovated and the results are amazing. The team worked fast but still paid attention to every detail. Everything looks modern, clean, and built really solid.", extraPhotos: ["/reviews/rr1.jpg", "/reviews/rr2.jpg"] },
    { id: "n2", name: "Rahim Ahmed", date: "2 months ago", rating: 5, short: "Smooth process and professional crew.", full: "They renovated our washroom and built a new patio in the backyard. The work came out great and the whole process was smooth. Very professional crew and easy to communicate with.", extraPhotos: ["/reviews/rr3.jpg"] },
    { id: "n3", name: "Sarah Collins", date: "3 months ago", rating: 5, short: "Excellent quality and finished on time.", full: "We hired them for a full basement renovation and a bathroom upgrade. The space looks completely different now. The quality of the work is excellent and everything was finished on time.", extraPhotos: ["/reviews/rr4.jpg", "/reviews/rr5.jpg"] },
    { id: "n4", name: "Tanvir Hasan", date: "4 months ago", rating: 5, short: "Workmanship is top quality.", full: "Our new kitchen turned out beautiful. They helped redesign the layout and handled the entire renovation process without any stress. The workmanship is top quality.", extraPhotos: ["/reviews/rr6.jpg"] },
    { id: "n5", name: "Daniel Parker", date: "5 months ago", rating: 5, short: "Skilled and respectful team.", full: "They built a backyard patio and renovated our guest washroom. The team was very skilled and respectful of our home while working. Everything looks amazing now.", extraPhotos: ["/reviews/rr7.jpg", "/reviews/rr8.jpg"] },
    { id: "n6", name: "Nusrat Jahan", date: "6 months ago", rating: 5, short: "Results exceeded our expectations.", full: "We worked with them on a home renovation that included the kitchen, washroom, and some structural upgrades. The results exceeded our expectations and the whole project was handled very professionally.", extraPhotos: ["/reviews/rr9.jpg"] },
    { id: "4", name: "kumar keshav", date: "2 weeks ago", rating: 5, short: "High quality cabinets...", full: "High quality cabinets and a team that truly cares about the details. Professional, reliable, and a pleasure to work with.", extraPhotos: ["/reviews/review4.jpg", "/reviews/review4_a.jpg"] },
    { id: "5", name: "Attaul Hamid", date: "2 years ago", rating: 5, short: "Kitchen countertops replaced...", full: "We first had our kitchen countertops replaced with new Quartz. Then we liked it so much that we decided to have our bathrooms done as well.", extraPhotos: ["/reviews/review5.jpg"] },
    { id: "6", name: "Holly", date: "a year ago", rating: 5, short: "Quick fix and laundry room.", full: "Sharif came in for a quick fix in our kitchen and ended up doing our laundry room as well. Excellent job done with best possible pricing.", extraPhotos: ["/reviews/review6.jpg", "/reviews/review6_a.jpg"] },
    { id: "7", name: "mahfuzur rahman", date: "a year ago", rating: 5, short: "These fellows rock!", full: "These fellows rock! They were very punctual, professional with a great price. My kitchen is super functional.", extraPhotos: ["/reviews/review7.jpg"] },
    { id: "8", name: "Haroon Muhammad", date: "a year ago", rating: 5, short: "Fantastic craftmanship.", full: "The quality of material and craftmanship of the cabinet is fantastic and was above my expectations. Installed in our newly built home.", extraPhotos: ["/reviews/review8.jpg", "/reviews/review8_a.jpg"] },
    { id: "9", name: "manhal alnader", date: "a year ago", rating: 5, short: "Reliable service!", full: "Fast, friendly and reliable service! Great team to work with and fastest turnaround time!", extraPhotos: ["/reviews/review9.jpg"] },
    { id: "10", name: "Baljeet Singh", date: "a year ago", rating: 5, short: "Amazing experience.", full: "Had an amazing experience working with all the crew at built wright construction inc, special thanks to sharif." },
    { id: "11", name: "Oniko Bailey", date: "2 years ago", rating: 5, short: "Reliable carpenters.", full: "This company is the must reliable, professional, and helpful team of carpenters." },
    { id: "12", name: "Mahfooz Pathan", date: "2 years ago", rating: 4, short: "Quality work.", full: "Had a great experience with them. Really professional and quality work. Highly recommend." },
    { id: "13", name: "Syed Hafeez", date: "a year ago", rating: 5, short: "Timely & professional.", full: "Great work! Everything was done in a very timely & professional way." },
    { id: "14", name: "Demahom MILAN", date: "2 years ago", rating: 4, short: "Amazing customer service.", full: "Sharif and Tanjin were amazing. Great customer service. ONE STOP SHOP for all your needs." },
    { id: "15", name: "Mafiq Ali", date: "2 years ago", rating: 5, short: "Awesome team.", full: "Awesome team, Fantastic work. Wishing best for built wright construction inc." },
    { id: "16", name: "pride security", date: "2 years ago", rating: 5, short: "Best pricing.", full: "Excellent Job done at our house with best possible pricing. Highly recommend!!" },
    { id: "17", name: "Ershad Ershad", date: "2 years ago", rating: 5, short: "Excellent design.", full: "Built Wright Construction Inc service and design are very very excellent." },
    { id: "18", name: "Amelia Salvador", date: "2 years ago", rating: 5, short: "Very nice kitchen.", full: "Amazing quality they did my kitchen very nicely and thank you very much." },
    { id: "19", name: "Sandeep Singh", date: "a year ago", rating: 5, short: "Great experience.", full: "Great experience with the team at Built Wright Construction Inc. Highly recommend." },
    { id: "20", name: "David Chen", date: "3 weeks ago", rating: 4, short: "Modern cabinets.", full: "The modern aesthetic we wanted was captured perfectly by the design team." },
    { id: "21", name: "Sarah Miller", date: "1 month ago", rating: 4, short: "Best renovation.", full: "After interviewing 5 companies, we chose Built Wright. No regrets. Solid wood cabinetry." },
    { id: "22", name: "Imran Khan", date: "2 months ago", rating: 4, short: "Attention to detail.", full: "They don't cut corners. Every hinge and handle was aligned perfectly." },
    { id: "23", name: "Lisa Thompson", date: "3 months ago", rating: 4, short: "Great storage space.", full: "They found storage space I didn't even know I had! The custom pull-outs are a game changer." },
    { id: "24", name: "Robert Wilson", date: "4 months ago", rating: 5, short: "On time and budget.", full: "Rare to find a contractor that sticks to the quote. Delivered exactly what was promised." },
    { id: "25", name: "Anita Rao", date: "5 months ago", rating: 5, short: "Beautiful vanity.", full: "They did our master bathroom vanity. It looks like a high-end spa." },
    { id: "26", name: "Gary Stinton", date: "6 months ago", rating: 4, short: "Top notch millwork.", full: "Professional from the first call. They designed a custom library for my home office." },
    { id: "27", name: "Michelle Ng", date: "7 months ago", rating: 5, short: "Professional crew.", full: "They were very respectful of our home and worked around our schedule." },
    { id: "28", name: "Kevin O'Brien", date: "8 months ago", rating: 4, short: "Beautiful joinery.", full: "You can tell these guys love what they do. The joinery is beautiful." },
    { id: "29", name: "Priya Sharma", date: "9 months ago", rating: 4, short: "sharif is an expert.", full: "Sharif helped us navigate the design process and suggested better materials." },
    { id: "30", name: "Marc Tremblay", date: "10 months ago", rating: 5, short: "Exceeded expectations.", full: "We had high expectations, and Built Wright Construction Inc actually exceeded them." },
    { id: "31", name: "Sandra P.", date: "11 months ago", rating: 5, short: "Solid materials.", full: "It's been nearly a year and everything still looks brand new." },
    { id: "32", name: "James Lee", date: "1 year ago", rating: 5, short: "Bespoke cabinetry.", full: "For the level of customization we got, the price was very competitive." },
    { id: "33", name: "Fatimah Z.", date: "1 year ago", rating: 5, short: "Good communication.", full: "I always knew what stage the project was at. Great project management." },
    { id: "34", name: "Chris Evans", date: "1 year ago", rating: 5, short: "A+ turnaround.", full: "Fast turnaround and high-quality build. The only team I'll call." },
    { id: "35", name: "Rachel Green", date: "1 year ago", rating: 5, short: "White oak cabinets.", full: "They took my Pinterest board and turned it into a reality. Gorgeous." },
    { id: "36", name: "Tom Baker", date: "1 year ago", rating: 5, short: "Clean workspace.", full: "They showed up exactly when they said they would and left the workspace clean." },
    { id: "37", name: "Aarav Gupta", date: "1 year ago", rating: 5, short: "Quartz centerpiece.", full: "From design to installation, the process was seamless." },
    { id: "38", name: "Linda H.", date: "1 year ago", rating: 5, short: "Polite and skilled.", full: "They handled our full kitchen and bathroom remodel. Professional and polite." },
    { id: "39", name: "Simon Peters", date: "1 year ago", rating: 5, short: "Artistic built-ins.", full: "The custom built-ins they created for our living room are functional and artistic." },
    { id: "40", name: "Nadia S.", date: "1 year ago", rating: 5, short: "Great follow-up.", full: "They came back a week after the install just to check door alignments." },
    { id: "41", name: "Oscar Mendez", date: "1 year ago", rating: 5, short: "Done right.", full: "If you want it done right the first time, go to Wright." },
    { id: "42", name: "Jessica Wu", date: "1 year ago", rating: 5, short: "Smooth finish.", full: "The paint finish on our shaker cabinets is so smooth and durable." },
    { id: "43", name: "Anthony R.", date: "1 year ago", rating: 5, short: "Above and beyond.", full: "Reliable team that cares about their reputation. Above and beyond." },
    { id: "44", name: "Elena V.", date: "1 year ago", rating: 5, short: "Exquisite sense.", full: "Their advice on the layout helped us maximize our kitchen workflow." },
    { id: "45", name: "Mark Johnston", date: "1 year ago", rating: 5, short: "Quality that lasts.", full: "You pay for quality and that is exactly what you get here." },
    { id: "46", name: "Sophia L.", date: "1 year ago", rating: 5, short: "Easy renovation.", full: "Thank you Sharif and the whole crew for making our renovation so easy." }
  ], []);

  const [showAllModal, setShowAllModal] = useState(false);
  const [selectedReview, setSelectedReview] = useState<Testimonial | null>(null);
  const [sequenceIdx, setSequenceIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sliderReviews = useMemo(() => allTestimonials.slice(0, 12), [allTestimonials]);
  const moreReviews = useMemo(() => allTestimonials.slice(12), [allTestimonials]);

  const mainPageReviews = useMemo(() => {
    const count = isMobile ? 2 : 3;
    return sliderReviews.slice(sequenceIdx * count, (sequenceIdx * count) + count);
  }, [sliderReviews, sequenceIdx, isMobile]);

  useEffect(() => {
    const count = isMobile ? 2 : 3;
    const maxSteps = Math.ceil(sliderReviews.length / count);
    
    const timer = setInterval(() => {
      setSequenceIdx((prev) => (prev + 1) % maxSteps);
    }, 6000);
    return () => clearInterval(timer);
  }, [isMobile, sliderReviews.length]);

  return (
    <section className="relative bg-background py-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-light-espresso/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="glass-panel rounded-[2rem] md:rounded-[3.5rem] p-6 md:p-12 shadow-2xl">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <div className="flex flex-wrap items-center gap-6 mb-3">
                <div className="flex items-center gap-2">
                    <GoogleG />
                    <span className="text-[10px] font-bold text-accent-prime uppercase tracking-widest">Google Reviews</span>
                </div>
                <div className="flex items-center gap-2">
                    <FacebookF />
                    <span className="text-[10px] font-bold text-[#1877F2] uppercase tracking-widest">Facebook Reviews</span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tighter">What our clients say</h2>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              <button 
                onClick={() => setShowAllModal(true)}
                className="flex-1 md:flex-none px-4 md:px-6 py-3 rounded-full bg-foreground/5 text-foreground text-[10px] md:text-[11px] font-black uppercase tracking-widest hover:bg-foreground/10 transition-all border border-foreground/10 shadow-sm whitespace-nowrap"
              >
                More Reviews ({allTestimonials.length}+)
              </button>
              <a 
                href="https://search.google.com/local/writereview?placeid=ChIJucRe8aHP1IkRJvmg5Oi8uY0"
                target="_blank"
                className="flex-1 md:flex-none px-4 md:px-6 py-3 rounded-full bg-foreground text-background text-[10px] md:text-[11px] font-black uppercase tracking-widest hover:opacity-90 transition-all shadow-lg text-center whitespace-nowrap"
              >
                + Add Your Experience
              </a>
            </div>
          </div>

          <div 
            key={sequenceIdx} 
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out"
          >
            {mainPageReviews.map((t) => (
              <div key={t.id} className="flex flex-col rounded-[1.5rem] md:rounded-[2.5rem] border border-foreground/10 bg-background/40 shadow-sm hover:shadow-xl transition-all duration-700 overflow-hidden h-[340px] md:h-[480px] backdrop-blur-sm">
                {t.extraPhotos && (
                  <div className="relative h-32 md:h-64 w-full flex-none">
                    <AutoSlider images={t.extraPhotos} />
                  </div>
                )}
                <div className="p-4 md:p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <p className="font-black text-foreground text-sm md:text-xl tracking-tight leading-tight">{t.name}</p>
                    <div className="flex gap-0.5 mt-1 mb-2 md:mb-4">
                      <span className="text-[#FFC107] text-[8px] md:text-[10px]">{"★".repeat(t.rating)}</span>
                      {t.rating < 5 && <span className="text-foreground/20 text-[8px] md:text-[10px]">{"★".repeat(5 - t.rating)}</span>}
                    </div>
                    <p className="text-foreground/70 text-[10px] md:text-sm italic leading-relaxed line-clamp-3 md:line-clamp-none">"{t.short}"</p>
                  </div>
                  
                  <button 
                    onClick={() => setSelectedReview(t)} 
                    className="text-[9px] md:text-[11px] font-black text-accent-prime uppercase tracking-widest flex items-center gap-2 group/btn"
                  >
                    Read More <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(sliderReviews.length / (isMobile ? 2 : 3)) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSequenceIdx(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${sequenceIdx === idx ? "w-8 bg-foreground" : "w-2 bg-foreground/20"}`}
              />
            ))}
          </div>
        </div>
      </div>

      {showAllModal && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={() => setShowAllModal(false)} />
          <div className="relative w-full max-w-6xl h-[85vh] rounded-[2rem] sm:rounded-[3rem] bg-background shadow-2xl overflow-hidden flex flex-col animate-in zoom-in duration-300 border border-foreground/10">
            
            <div className="flex-none w-full p-6 sm:p-10 border-b border-foreground/10 bg-background flex justify-between items-center z-[10]">
               <div>
                  <h3 className="text-xl sm:text-3xl font-black text-foreground tracking-tighter">Verified Client Reviews</h3>
                  <p className="text-[10px] font-bold text-accent-prime uppercase tracking-[0.2em] mt-1 hidden sm:block">Building trust one project at a time</p>
               </div>
               <button 
                 onClick={() => setShowAllModal(false)} 
                 className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-lg shadow-lg"
               >
                 ✕
               </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 sm:p-12">
               <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {moreReviews.map(t => (
                    <div key={t.id} className="p-8 rounded-[2rem] border border-foreground/5 bg-foreground/5 flex flex-col h-fit">
                        <div className="flex justify-between items-start mb-2">
                          <p className="font-bold text-foreground text-lg">{t.name}</p>
                          <div className="flex gap-0.5">
                            <span className="text-[#FFC107] text-[10px]">{"★".repeat(t.rating)}</span>
                            {t.rating < 5 && <span className="text-foreground/20 text-[10px]">{"★".repeat(5 - t.rating)}</span>}
                          </div>
                        </div>
                        <p className="text-[10px] text-foreground/30 font-black uppercase mb-4 tracking-widest">{t.date}</p>
                        <p className="text-sm text-foreground/60 leading-relaxed italic mb-6">"{t.full}"</p>
                        {t.extraPhotos && (
                          <button 
                            onClick={() => setSelectedReview(t)}
                            className="w-full py-3 mt-auto rounded-xl bg-background border border-foreground/10 text-[10px] font-black uppercase text-accent-prime hover:bg-foreground/5 transition-colors shadow-sm"
                          >
                            View Project Photos
                          </button>
                        )}
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      )}

      {selectedReview && (
        <div className="fixed inset-0 z-[250] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setSelectedReview(null)} />
          <div className="relative w-full max-w-4xl rounded-[2rem] sm:rounded-[3.5rem] bg-background overflow-hidden shadow-2xl animate-in zoom-in duration-300 border border-foreground/10 flex flex-col">
             
             <div className="flex-none p-6 sm:p-10 border-b border-foreground/10 bg-background flex justify-between items-center z-[10]">
                <h3 className="text-xl sm:text-3xl font-black text-foreground tracking-tighter">Project Details</h3>
                <button 
                  onClick={() => setSelectedReview(null)} 
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-foreground text-background flex items-center justify-center text-xl font-bold shadow-lg"
                >
                  ✕
                </button>
             </div>

             <div className="flex-1 overflow-y-auto p-8 sm:p-16">
                <h3 className="text-3xl sm:text-4xl font-black mb-1 text-foreground tracking-tighter">{selectedReview.name}</h3>
                <div className="flex gap-1 mb-8">
                  <span className="text-[#FFC107] text-sm">{"★".repeat(selectedReview.rating)}</span>
                  {selectedReview.rating < 5 && <span className="text-foreground/20 text-sm">{"★".repeat(5 - selectedReview.rating)}</span>}
                </div>
                <p className="text-lg sm:text-xl text-foreground/80 italic leading-relaxed mb-12">"{selectedReview.full}"</p>
                {selectedReview.extraPhotos && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-foreground/10 pt-10">
                    {selectedReview.extraPhotos.map((img, idx) => (
                      <div key={idx} className="relative aspect-video rounded-3xl overflow-hidden border border-foreground/10 shadow-lg group">
                        <Image src={img} alt="Project Detail" fill className="object-cover" unoptimized />
                      </div>
                    ))}
                  </div>
                )}
             </div>
          </div>
        </div>
      )}
    </section>
  );
}