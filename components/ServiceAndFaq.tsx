"use client";

import React, { useState } from "react";
import { Plus, Map, ShieldCheck, Zap, Globe } from "lucide-react";

export default function ServiceAndFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const regions = [
    { label: "Core Hubs", cities: "Toronto, Scarborough, Etobicoke, North York" },
    { label: "East & North Corridors", cities: "Pickering, Ajax, Whitby, Markham, Vaughan" },
    { label: "West & Southern Zones", cities: "Mississauga, Brampton, Oakville, Milton" },
    { label: "Extended Reach", cities: "Serving select locations outside the GTA corridor" },
  ];

  const faqs = [
    { 
      q: "What core services do you provide?", 
      a: "Built Wright Construction Inc. offers full-service residential construction, including major home additions, structural remodeling, and complete interior renovations." 
    },
    { 
      q: "Are you fully licensed for structural work?", 
      a: "Yes, Built Wright Construction Inc. is fully licensed and carries comprehensive liability insurance and WSIB coverage for all structural and general contracting work." 
    },
    { 
      q: "How does the permit process work?", 
      a: "Built Wright Construction Inc. handles the entire process, from architectural drawings to submitting permit applications and coordinating with city inspectors." 
    },
    { 
      q: "Do you specialize in custom cabinetry?", 
      a: "Absolutely. Built Wright Construction Inc. designs and installs premium custom cabinetry, ranging from high-end kitchens to bespoke walk-in closets and built-ins." 
    },
    { 
      q: "Can you handle full-scale home renovations?", 
      a: "Built Wright Construction Inc. excels at 'studs-out' renovations, managing everything from demolition and framing to the final high-end finishings." 
    },
    { 
      q: "What is your typical project timeline?", 
      a: "Timelines depend on the scope, but Built Wright Construction Inc. typically delivers custom builds and renovations within a 4 to 12-week window." 
    },
    { 
      q: "Do you provide architectural design services?", 
      a: "Built Wright Construction Inc. partners with leading architects to provide a seamless design-build experience from initial concept to reality." 
    },
    { 
      q: "What materials do you recommend for longevity?", 
      a: "Built Wright Construction Inc. prioritizes premium-grade materials and moisture-resistant substrates to ensure your investment stands the test of time." 
    },
    { 
      q: "Is a dedicated project manager assigned?", 
      a: "Every project at Built Wright Construction Inc. is overseen by a dedicated supervisor who ensures quality control and daily site updates." 
    },
    { 
      q: "Do you offer a warranty on craftsmanship?", 
      a: "Built Wright Construction Inc. stands behind every project with a 2-year craftsmanship warranty on top of manufacturer material warranties." 
    },
    { 
      q: "How is site cleanliness managed?", 
      a: "Built Wright Construction Inc. operates under a strict 'Clean Site' policy, utilizing HEPA air scrubbers and floor protection to maintain a professional environment." 
    },
    { 
      q: "Do you manage sub-trades like plumbing and electrical?", 
      a: "Yes, Built Wright Construction Inc. coordinates all licensed mechanical, electrical, and plumbing trades to ensure everything is up to code." 
    },
    { 
      q: "What is the payment structure for projects?", 
      a: "Built Wright Construction Inc. uses a transparent, milestone-based payment schedule tied to specific phases of project completion." 
    }
  ];

  return (
    <div className="w-full transition-colors duration-500">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Left Side: Service Reach */}
        <div className="space-y-10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-prime/10 border border-accent-prime/20">
              <Globe size={12} className="text-accent-prime" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-prime">Service Coverage</span>
            </div>
            <h3 className="text-4xl font-black tracking-tighter text-foreground uppercase italic leading-none">
              Where We <br/><span className="text-accent-prime text-5xl">Operate.</span>
            </h3>
            <p className="text-sm opacity-50 max-w-sm leading-relaxed">
              Based in Scarborough, Built Wright Construction Inc. provides premium construction services across the GTA and surrounding regions.
            </p>
          </div>

          <div className="grid gap-3">
            {regions.map((region, i) => (
              <div key={i} className="group p-5 rounded-2xl bg-foreground/[0.03] border border-foreground/5 hover:border-accent-prime/30 transition-all">
                <div className="flex justify-between items-start mb-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-accent-prime">{region.label}</p>
                  <Map size={12} className="opacity-20 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm font-bold text-foreground/80 tracking-tight">{region.cities}</p>
              </div>
            ))}
          </div>

          <div className="flex items-start gap-4 p-6 rounded-[2rem] bg-foreground text-background shadow-2xl">
             <div className="p-2 bg-background/10 rounded-lg">
                <ShieldCheck size={20} className="text-accent-prime" />
             </div>
             <div>
                <p className="font-black text-sm tracking-tight">Broad Scale Projects</p>
                <p className="text-[11px] opacity-60 mt-1 leading-relaxed">
                   Built Wright Construction Inc. accepts specialized custom work outside our standard zones for clients seeking premium finishes.
                </p>
             </div>
          </div>
        </div>

        {/* Right Side: Accordion FAQ */}
        <div className="pt-10 lg:pt-0">
          <div className="flex items-center gap-3 mb-10">
            <Zap size={18} className="text-accent-prime" />
            <h3 className="text-2xl font-black tracking-tighter uppercase text-foreground">Common Questions</h3>
          </div>
          
          <div className="space-y-1">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border-b border-foreground/5 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between py-4 text-left group"
                >
                  <span className="text-[12px] font-bold text-foreground/70 group-hover:text-foreground transition-colors uppercase tracking-tight">
                    {faq.q}
                  </span>
                  <div className={`transition-transform duration-300 ${openIndex === index ? 'rotate-45 text-accent-prime' : 'text-foreground/30'}`}>
                    <Plus size={16} />
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-60 pb-6 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[11px] leading-relaxed text-foreground/50 pl-4 border-l border-accent-prime italic">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}