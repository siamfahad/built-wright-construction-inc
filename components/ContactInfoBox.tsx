"use client";

import React from "react";
import { Clock, MapPin, Navigation, PhoneCall } from "lucide-react";

export default function ContactInfoBox() {
  
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.736043135118!2d-79.2483849234164!3d43.7783359710965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d05d76d66e77%3A0x673c6833b3a7281c!2s1960%20Ellesmere%20Rd%20unit%2016%2C%20Scarborough%2C%20ON%20M1H%202V9!5e0!3m2!1sen!2sca!4v1708300000000!5m2!1sen!2sca";
  const googleMapsAddress = "https://www.google.com/maps/dir/?api=1&destination=1960+Ellesmere+Rd+Unit+16+Scarborough+ON+M1H+2V9";

  return (
    <div className="w-full max-w-[360px] overflow-hidden rounded-[2.5rem] bg-background border border-foreground/10 shadow-xl transition-colors duration-500">
      {/* 1. Map on Top */}
      <div className="h-[240px] w-full">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          src={mapEmbedUrl}
          loading="lazy"
          allowFullScreen
          className="grayscale-[0.2] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
        ></iframe>
      </div>

      {/* 2. Info Content */}
      <div className="p-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-accent-prime animate-pulse" />
          <span className="font-black uppercase tracking-widest text-[9px] text-foreground/60">
            Our Headquarters
          </span>
        </div>

        {/* Address */}
        <div className="mb-6">
          <h3 className="text-2xl font-black tracking-tighter leading-[1.1] text-foreground">
            1960 Ellesmere Rd <br />
            <span className="text-accent-prime">Unit 16</span>, Scarborough <br />
            ON M1H 2V9
          </h3>
        </div>

        {/* NEW: Quick Action Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <a 
            href={googleMapsAddress}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-foreground text-background hover:bg-accent-prime hover:text-foreground transition-all group"
          >
            <Navigation size={14} className="group-hover:animate-bounce" />
            <span className="text-[10px] font-black uppercase tracking-widest">Directions</span>
          </a>
          <a 
            href="tel:+14167003426" 
            className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 transition-all"
          >
            <PhoneCall size={14} className="text-accent-prime" />
            <span className="text-[10px] font-black uppercase tracking-widest">Call Office</span>
          </a>
        </div>

        <div className="h-px bg-foreground/10 w-full mb-5" />

        {/* Footer Info */}
        <div className="flex justify-between items-center gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5 opacity-50">
              <Clock size={10} />
              <p className="text-[8px] uppercase font-black tracking-widest">Office Hours</p>
            </div>
            <p className="text-[10px] font-bold text-foreground/80">Mon — Sat: 9AM - 8PM</p>
          </div>

          <div className="flex flex-col gap-1 text-right">
            <div className="flex items-center gap-1.5 opacity-50 justify-end">
              <MapPin size={10} />
              <p className="text-[8px] uppercase font-black tracking-widest">Region</p>
            </div>
            <p className="text-[10px] font-bold text-foreground/80">GTA & Scarborough</p>
          </div>
        </div>
      </div>
    </div>
  );
}