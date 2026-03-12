"use client";

import { useEffect, useState } from "react";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Video is 8s. We start the fade at 7.3s and finish at 8s.
    const fadeTimer = setTimeout(() => setFade(true), 7300);
    const finishTimer = setTimeout(() => onFinish(), 7800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a] transition-opacity duration-700 ${
        fade ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Using 'object-contain' keeps the whole video visible.
        The 'bg-[#0a0a0a]' matches the dark tones of your video 
        to make the 'empty space' look like part of the design.
      */}
      <video
        autoPlay
        muted
        playsInline
        preload="auto"
        className="h-full w-full object-contain"
      >
        <source src="/Splashscreen/splashscreen.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}