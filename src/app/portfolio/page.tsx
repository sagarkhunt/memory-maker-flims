import React from "react";
import type { Metadata } from "next";
import { portfolioProjects } from "@/data/portfolio";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { Sparkles } from "lucide-react";
import { GoldButton } from "@/components/ui/GoldButton";

export const metadata: Metadata = {
  title: "Selected Portfolio — Wedding Photography & Cinematic Stories",
  description:
    "Browse our complete archive of royal wedding photography, pre-wedding films, engagement ceremonies, and celebrations by Memory Makers Films.",
};

export default function PortfolioPage() {
  return (
    <div className="flex flex-col w-full bg-cinematic-black">
      {/* Portfolio Hero Header */}
      <section className="pt-28 sm:pt-36 md:pt-44 pb-14 sm:pb-20 border-b border-metallic-gold/15 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-metallic-gold/30 bg-dark-charcoal/60">
            <Sparkles className="w-3.5 h-3.5 text-metallic-gold" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-metallic-gold font-semibold">
              CURATED ARCHIVE
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-pure-white leading-tight mb-4 sm:mb-6">
            Stories We&apos;ve Captured. <br />
            <span className="gold-gradient-text italic font-light">
              Memories You Will Cherish.
            </span>
          </h1>

          <p className="text-xs sm:text-base lg:text-lg text-champagne-ivory/80 font-light max-w-2xl mx-auto leading-relaxed">
            Every couple, every sacred ceremony, and every joyful family milestone holds its own unique soul. Filter through our assignments below.
          </p>
        </div>
      </section>

      {/* Main Filterable Grid */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PortfolioGrid projects={portfolioProjects} showFilters={true} />
        </div>
      </section>

      {/* Bottom Booking Invitation */}
      <section className="py-16 sm:py-20 bg-dark-charcoal border-t border-metallic-gold/20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-2xl sm:text-4xl text-pure-white mb-3 sm:mb-4">
            Have a Dream Venue in Mind?
          </h2>
          <p className="text-xs sm:text-sm text-warm-grey mb-8 font-light max-w-xl mx-auto">
            Whether you are celebrating in an ancestral heritage courtyard, a modern coastal villa, or a grand palace, we are excited to tell your story.
          </p>
          <GoldButton href="/contact" size="lg" className="w-full sm:w-auto justify-center">
            INQUIRE ABOUT YOUR DATE
          </GoldButton>
        </div>
      </section>
    </div>
  );
}
