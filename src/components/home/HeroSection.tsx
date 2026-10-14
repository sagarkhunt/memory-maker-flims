"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { GoldButton } from "@/components/ui/GoldButton";
import { ChevronDown } from "lucide-react";

export const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Guarantee seamless muted autoplay per browser requirements
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Fallback handled gracefully
        });
      }
    }
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-cinematic-black">
      {/* Background Media Container */}
      <div className="absolute inset-0 z-0">
        {/* High-res Poster Image Behind Video */}
        <Image
          src={siteConfig.heroVideo.poster}
          alt="Cinematic Wedding Photography by Memory Makers Films"
          fill
          priority
          className="object-cover object-center scale-[1.02] transform transition-transform duration-1000"
          sizes="100vw"
        />

        {/* Continuous Autoplay Looping Background Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={siteConfig.heroVideo.poster}
          className="absolute inset-0 w-full h-full object-cover object-center scale-[1.02]"
        >
          <source src="/films/hero-banner.webm" type="video/webm" />
          <source src="/films/hero-banner.mp4" type="video/mp4" />
        </video>

        {/* Layered cinematic overlays: Dark gradient vignette, grain, and warmth */}
        <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black via-cinematic-black/60 to-cinematic-black/75" />
        <div className="absolute inset-0 cinematic-vignette opacity-80" />
        <div className="absolute inset-0 film-grain opacity-30 pointer-events-none" />
      </div>

      {/* Floating Center Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16 sm:pb-20 text-center flex flex-col items-center">
        {/* Studio Golden Logo - Seamlessly blended with mixBlendMode: screen (zero black box) */}
        <div className="relative h-14 sm:h-22 md:h-28 lg:h-32 w-56 sm:w-80 md:w-96 lg:w-[420px] max-w-[85vw] mb-4 sm:mb-6 flex items-center justify-center transition-transform duration-500 hover:scale-[1.02]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,149,60,0.18)_0%,_transparent_70%)] pointer-events-none -z-10" />
          <Image
            src={siteConfig.logoPath}
            alt={siteConfig.name}
            fill
            priority
            className="object-contain"
            style={{ mixBlendMode: "screen" }}
            sizes="(max-width: 640px) 224px, (max-width: 768px) 320px, 420px"
          />
        </div>

        {/* Small Eyebrow */}
        <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1 sm:py-1.5 mb-4 sm:mb-6 border border-metallic-gold/30 bg-cinematic-black/60 backdrop-blur-md max-w-[95vw]">
          <span className="w-1.5 h-1.5 rounded-full bg-metallic-gold animate-pulse shrink-0" />
          <span className="text-[9px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.28em] text-champagne-ivory font-medium truncate">
            WEDDING PHOTOGRAPHY & CINEMATIC FILMS
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-metallic-gold animate-pulse shrink-0" />
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[1.1] mb-4 sm:mb-6 text-pure-white font-medium max-w-4xl drop-shadow-2xl">
          WE CAPTURE <br className="hidden sm:inline" />
          <span className="gold-gradient-text italic font-light sm:ml-2">YOUR MEMORIES.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-xs sm:text-base md:text-lg text-champagne-ivory/80 font-light max-w-2xl mb-8 sm:mb-10 tracking-wide leading-relaxed px-2">
          Beautiful photographs. Cinematic films. Stories you will cherish forever.
        </p>

        {/* Clean Call To Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
          <GoldButton href="/portfolio" size="lg" className="w-full sm:w-auto">
            EXPLORE OUR WORK
          </GoldButton>

          <GoldButton
            href="/contact"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
          >
            BOOK YOUR DATE
          </GoldButton>
        </div>

        {/* Film reel aesthetic stamp */}
        <div className="mt-14 hidden sm:flex items-center gap-6 text-[10px] uppercase tracking-[0.25em] text-warm-grey/60">
          <span>4K Ultra HD Cinema</span>
          <span>•</span>
          <span>Master Color Grading</span>
          <span>•</span>
          <span>Available Worldwide</span>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#brand-intro"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-metallic-gold/70 hover:text-metallic-gold transition-colors group"
        aria-label="Scroll down to introduction"
      >
        <span className="text-[9px] uppercase tracking-[0.25em] font-medium">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-metallic-gold" />
      </a>
    </section>
  );
};
