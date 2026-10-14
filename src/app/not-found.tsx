import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { GoldButton } from "@/components/ui/GoldButton";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-cinematic-black px-4 relative overflow-hidden">
      <div className="absolute inset-0 film-grain opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-metallic-gold/5 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto text-center flex flex-col items-center">
        <div className="relative h-12 w-48 mb-8">
          <Image
            src={siteConfig.logoPath}
            alt={siteConfig.name}
            fill
            className="object-contain"
            style={{ mixBlendMode: "screen" }}
            sizes="192px"
          />
        </div>

        <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-metallic-gold font-bold mb-2">
          ERROR 404 • FRAME NOT FOUND
        </p>

        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl text-pure-white mb-4">
          Lost in the Archive.
        </h1>

        <p className="text-xs sm:text-sm text-warm-grey font-light leading-relaxed mb-8 max-w-md">
          The memory frame or page you are searching for might have moved, been archived, or never existed in our current roll.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <GoldButton href="/" size="md" className="w-full sm:w-auto justify-center text-center">
            <Home className="w-4 h-4 mr-2" />
            RETURN TO HOMEPAGE
          </GoldButton>

          <GoldButton href="/portfolio" variant="outline" size="md" className="w-full sm:w-auto justify-center text-center">
            BROWSE PORTFOLIO
          </GoldButton>
        </div>
      </div>
    </div>
  );
}
