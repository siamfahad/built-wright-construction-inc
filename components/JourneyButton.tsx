"use client";

import React from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function JourneyButton() {
  return (
    <div className="relative flex justify-center items-center py-12 z-20">
      <style jsx>{`
        @keyframes radar-pulse {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @keyframes subtle-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .pulse-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 1px solid #3b82f6; /* Blue glow to match 'Premium Finish' */
          border-radius: 9999px;
          animation: radar-pulse 2.5s infinite cubic-bezier(0.4, 0, 0.6, 1);
        }
        .journey-glow {
            filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.3));
        }
      `}</style>

      <Link href="/journey" className="group relative animate-[subtle-float_4s_infinite_ease-in-out]">
        {/* Animated Pulse Background */}
        <div className="pulse-ring" />
        <div className="pulse-ring" style={{ animationDelay: '1.2s' }} />

        {/* The Button */}
        <button className="relative flex items-center gap-4 px-10 py-5 bg-background border border-foreground/10 rounded-full shadow-xl hover:border-blue-500/50 transition-all duration-500 journey-glow group">
          <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.3em] text-foreground">
            Let&apos;s Walk Through The Journey
          </span>
          
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-foreground text-background group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:translate-x-1">
            <MoveRight size={16} />
          </div>

          {/* Bottom Interaction Line */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-blue-500 group-hover:w-1/2 transition-all duration-500 opacity-50" />
        </button>
      </Link>
    </div>
  );
}