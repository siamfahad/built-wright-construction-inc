"use client";

import { useState, useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";
import Homepage from "@/components/Homepage";

export default function Page() {
  const [showSplash, setShowSplash] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // 1. Check if the user has already seen the splash screen in this session
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
    
    if (hasSeenSplash === "true") {
      // 2. If they have, skip the splash screen immediately
      setShowSplash(false);
    }
    
    // 3. Mark the component as ready to prevent hydration flicker
    setIsReady(true);
  }, []);

  const handleSplashFinish = () => {
    // 4. Set the session flag when the splash finishes for the first time
    sessionStorage.setItem("hasSeenSplash", "true");
    setShowSplash(false);
  };

  // Prevent rendering until we've checked sessionStorage to avoid a "flash" of the splash
  if (!isReady) return null;

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={handleSplashFinish} />
      ) : (
        <Homepage />
      )}
    </>
  );
}