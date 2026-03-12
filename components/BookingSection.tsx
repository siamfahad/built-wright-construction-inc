"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BookingSection() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingMonth, setBookingMonth] = useState(new Date().getMonth());
  const [bookingYear, setBookingYear] = useState(new Date().getFullYear());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const today = new Date();
  const currentHour = today.getHours();
  const isTodayDisabled = currentHour >= 17;

  const daysInMonth = (month: number, year: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(bookingYear, bookingMonth, 1).getDay();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const handleBooking = async () => {
    setIsSubmitting(true);
    
    // Immediate trigger for the native SMS app
    const phoneNumber = "4167003426";
    const appointmentDate = `${monthNames[bookingMonth]} ${selectedDate}, ${bookingYear}`;
    const message = `Hi Built Wright, I'd like to book a consultation for ${appointmentDate} at ${selectedTime}. Please confirm if this works!`;
    
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const separator = isIOS ? '&' : '?';
    window.location.href = `sms:+1${phoneNumber}${separator}body=${encodeURIComponent(message)}`;

    // Slight delay to show the confirmation state on our end after trigger
    await new Promise(resolve => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setIsConfirmed(true);
  };

  const handlePrevMonth = () => {
    if (bookingMonth === today.getMonth() && bookingYear === today.getFullYear()) return;
    if (bookingMonth === 0) {
      setBookingMonth(11);
      setBookingYear(bookingYear - 1);
    } else {
      setBookingMonth(bookingMonth - 1);
    }
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const handleNextMonth = () => {
    if (bookingMonth === 11) {
      setBookingMonth(0);
      setBookingYear(bookingYear + 1);
    } else {
      setBookingMonth(bookingMonth + 1);
    }
    setSelectedDate(null);
    setSelectedTime(null);
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

  if (isConfirmed) {
    return (
      <section className="py-24 bg-background border-t border-foreground/5 flex items-center justify-center min-h-[600px]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-6 p-12 bg-foreground/[0.02] border border-foreground/10 rounded-[3rem] max-w-md mx-auto"
        >
          <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-2xl">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-black uppercase italic tracking-tighter">SMS Sent</h2>
          <p className="text-xs font-medium opacity-50 uppercase tracking-widest leading-relaxed">
            Your request for {monthNames[bookingMonth]} {selectedDate} at {selectedTime} has been drafted. If your messaging app didn't open, please text us directly at 416-700-3426.
          </p>
          <button onClick={() => setIsConfirmed(false)} className="text-[10px] font-black uppercase tracking-widest text-emerald-500 underline underline-offset-4 hover:opacity-70 transition-opacity">
            Modify Booking
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-background border-t border-foreground/5 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Direct Booking</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-[0.9]">
              Secure Your <br />
              <span className="opacity-30 text-emerald-500/50">Consult.</span>
            </h2>
            
            <p className="text-sm font-medium opacity-50 max-w-md leading-relaxed uppercase tracking-wide">
              Pick a date & time slot below. We will automatically generate a text message for you to send directly to our lead coordinator.
            </p>

            <div className="space-y-4">
               {["Instant Booking", "Site-Ready Coordination", "GTA Wide Coverage"].map((text, i) => (
                 <div key={i} className="flex items-center gap-3">
                   <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                   <span className="text-xs font-black uppercase tracking-widest">{text}</span>
                 </div>
               ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-foreground/[0.02] border border-foreground/10 rounded-[3rem] p-8 shadow-2xl backdrop-blur-sm">
              
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-foreground text-background rounded-2xl">
                    <CalendarIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black uppercase tracking-tighter">{monthNames[bookingMonth]}</h3>
                    <p className="text-[10px] font-black opacity-30 uppercase tracking-[0.2em]">{bookingYear}</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button onClick={handlePrevMonth} disabled={bookingMonth === today.getMonth() && bookingYear === today.getFullYear()} className="p-2 rounded-xl border border-foreground/10 hover:bg-foreground/5 disabled:opacity-20 transition-all">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={handleNextMonth} className="p-2 rounded-xl border border-foreground/10 hover:bg-foreground/5 transition-all">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-2 text-center mb-4">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                  <div key={day} className="text-[10px] font-black opacity-20 uppercase tracking-widest pb-4">{day}</div>
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
                      onClick={() => { setSelectedDate(day); setSelectedTime(null); }}
                      className={`aspect-square rounded-2xl text-xs font-black transition-all flex items-center justify-center relative
                        ${disabled ? "opacity-10 cursor-not-allowed grayscale" : "hover:bg-foreground hover:text-background cursor-pointer"}
                        ${selected ? "bg-foreground text-background scale-110 shadow-xl z-10" : "bg-foreground/[0.03]"}
                      `}
                    >
                      {day}
                      {day === today.getDate() && bookingMonth === today.getMonth() && !disabled && (
                        <div className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Time Section - Always Visible */}
              <div className="mt-8 pt-8 border-t border-foreground/5 transition-all duration-500">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-foreground/40">
                    <Clock className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Select Time</span>
                  </div>
                  {!selectedDate && (
                    <span className="text-[9px] font-black uppercase tracking-widest text-emerald-500/60 animate-pulse">Select a date first</span>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {['10:00 AM', '11:30 AM','01:00 PM', '04:00 PM'].map(time => (
                    <button 
                      key={time} 
                      disabled={!selectedDate}
                      onClick={() => setSelectedTime(time)}
                      className={`flex-1 min-w-[80px] py-3 rounded-xl border text-[10px] font-black transition-all uppercase tracking-tighter hover:scale-105 active:scale-95
                        ${!selectedDate ? "opacity-20 cursor-not-allowed border-foreground/10" : ""}
                        ${selectedTime === time ? "bg-emerald-500 border-transparent text-white shadow-lg" : "border-foreground/10 hover:border-foreground"}
                      `}
                    >
                      {time}
                    </button>
                  ))}
                </div>

                <AnimatePresence>
                  {selectedTime && (
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      onClick={handleBooking}
                      disabled={isSubmitting}
                      className="w-full mt-8 py-6 rounded-2xl bg-emerald-600 text-white font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:bg-emerald-500 transition-all shadow-2xl"
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <>Confirm Appointment<ArrowRight className="w-4 h-4" /></>
                      )}
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}