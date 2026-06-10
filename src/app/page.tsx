"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import HeroSection from "@/sections/HeroSection";
import MessageSection from "@/sections/MessageSection";
import FlavorSection from "@/sections/FlavorSection";
import NutritionSection from "@/sections/NutritionSection";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  return (
    <main>
      <Preloader
        isLoaded={isLoaded}
        onFinish={() => setTriggerAnimation(true)}
      />
      <Navbar />
      <HeroSection
        onLoaded={() => setIsLoaded(true)}
        triggerAnimation={triggerAnimation}
      />
      <MessageSection />
      <FlavorSection />
      <NutritionSection />
    </main>
  );
}
