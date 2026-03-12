"use client";

import React from "react";
import HeaderBar from "@/components/HeaderBar";
import Beginning from "@/components/beginning"; 
import JourneyButton from "@/components/JourneyButton"; // Import the new bridge button
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactInfoBox from "@/components/ContactInfoBox";
import ServiceAndFaq from "@/components/ServiceAndFaq";
import FooterSection from "@/components/FooterSection";
import BookingSection from "@/components/BookingSection";

export default function Homepage() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <HeaderBar />

      {/* --- HERO SECTION --- */}
      <Beginning />

      {/* --- TRANSITION BUTTON: THE JOURNEY --- */}
      {/* Placed specifically between Beginning and Services */}
      <JourneyButton />

      {/* --- SERVICES SECTION --- */}
      <ServicesSection />

      {/* --- BUILDING PROCESS SECTION --- */}
      <ProcessSection />

      {/* --- TESTIMONIALS SECTION --- */}
      <TestimonialsSection />

      {/* --- MEETING BOOKING SECTION --- */}
      <BookingSection />

      {/* --- SERVICE AREAS & HQ SECTION --- */}
      <section className="py-24 border-t border-foreground/5">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="w-full lg:w-auto flex-shrink-0">
              <ContactInfoBox />
            </div>
            <div className="flex-1 w-full">
              <ServiceAndFaq />
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER SECTION --- */}
      <FooterSection />
    </main>
  );
}