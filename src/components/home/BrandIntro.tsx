import React from "react";
import Image from "next/image";
import { GoldButton } from "@/components/ui/GoldButton";

export const BrandIntro: React.FC = () => {
  return (
    <section id="brand-intro" className="py-16 sm:py-24 lg:py-32 bg-cinematic-black relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-metallic-gold/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column: Editorial Photo Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] w-full max-w-lg mx-auto overflow-hidden border border-metallic-gold/30 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85"
                alt="Editorial Portraiture by Memory Makers Films"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black/60 via-transparent to-transparent" />
            </div>

            {/* Overlapping Floating Stamp */}
            <div className="absolute bottom-3 right-3 sm:-bottom-6 sm:right-6 bg-dark-charcoal/95 border border-metallic-gold/40 p-3 sm:p-5 shadow-2xl backdrop-blur-md max-w-[200px] sm:max-w-[240px]">
              <p className="text-[10px] uppercase tracking-[0.22em] text-metallic-gold font-semibold mb-1">
                Visual Ethos
              </p>
              <p className="font-display italic text-xs sm:text-sm text-champagne-ivory">
                Timeless Emotion. Natural Light. Pure Story.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-6 h-px bg-metallic-gold" />
              <span className="text-xs uppercase tracking-[0.25em] text-metallic-gold font-semibold">
                WELCOME TO MEMORY MAKERS FILMS
              </span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl text-pure-white leading-tight">
              Moments Become <span className="gold-gradient-text italic">Memories.</span>
            </h2>

            <p className="text-warm-grey text-xs sm:text-base lg:text-lg font-light leading-relaxed">
              Every celebration has a story worth remembering. At Memory Makers
              Films, we capture genuine emotions, beautiful details and the
              moments that make your celebrations uniquely yours. Through
              photography and cinematic films, we help you revisit those memories
              for years to come.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4 border-t border-dark-charcoal w-full">
              <div>
                <p className="font-display text-xl sm:text-3xl text-champagne-ivory font-medium">
                  Documentary
                </p>
                <p className="text-xs text-warm-grey/80 mt-1">
                  Unobtrusive candid eye capturing raw, unposed truth.
                </p>
              </div>
              <div>
                <p className="font-display text-xl sm:text-3xl text-champagne-ivory font-medium">
                  Cinematic
                </p>
                <p className="text-xs text-warm-grey/80 mt-1">
                  Colour-graded film frames and master acoustic sound design.
                </p>
              </div>
            </div>

            <div className="pt-2 sm:pt-4 w-full sm:w-auto">
              <GoldButton href="/about" variant="outline" size="md" className="w-full sm:w-auto justify-center text-center">
                OUR STORY & PHILOSOPHY
              </GoldButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
