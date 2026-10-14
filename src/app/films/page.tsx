import React from "react";
import type { Metadata } from "next";
import { filmsData } from "@/data/films";
import { FilmShowcase } from "@/components/films/FilmShowcase";
import { GoldButton } from "@/components/ui/GoldButton";
import { Film } from "lucide-react";

export const metadata: Metadata = {
  title: "Cinematic Films & Documentary Highlights — 4K Cinema",
  description:
    "Watch our award-grade 4K wedding films, pre-wedding trailers, and celebration highlights produced by Memory Makers Films.",
};

export default function FilmsPage() {
  return (
    <div className="flex flex-col w-full bg-cinematic-black">
      {/* Films Hero Header */}
      <section className="pt-28 sm:pt-36 md:pt-44 pb-14 sm:pb-20 border-b border-metallic-gold/15 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-metallic-gold/30 bg-dark-charcoal/60">
            <Film className="w-3.5 h-3.5 text-metallic-gold" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-metallic-gold font-semibold">
              MOTION • EMOTION • MEMORY
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-pure-white leading-tight mb-4 sm:mb-6">
            Your Story. <br />
            <span className="gold-gradient-text italic font-light">
              In Pure Cinema Motion.
            </span>
          </h1>

          <p className="text-xs sm:text-base lg:text-lg text-champagne-ivory/80 font-light max-w-2xl mx-auto leading-relaxed">
            Filmed with professional cinema cameras, anamorphic lenses, and pristine wireless audio recording to transport you right back to the joy and emotion of your celebration.
          </p>
        </div>
      </section>

      {/* Main Films Showcase */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FilmShowcase films={filmsData} featuredOnly={false} />
        </div>
      </section>

      {/* Filmmaking Equipment & Standards */}
      <section className="py-16 sm:py-20 bg-dark-charcoal/60 border-y border-metallic-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-metallic-gold font-semibold block mb-2">
              CINEMA METHODOLOGY
            </span>
            <h2 className="font-display text-2xl sm:text-4xl text-pure-white">
              Why Our Films Feel Like Feature Movies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            <div className="p-5 sm:p-6 bg-cinematic-black border border-metallic-gold/20">
              <h3 className="font-display text-lg sm:text-xl text-champagne-ivory mb-2">
                Pristine Audio Recording
              </h3>
              <p className="text-xs sm:text-sm text-warm-grey font-light leading-relaxed">
                A great film is 50% sound. We record crystal-clear audio of vows, mantras, parent blessings, and laughter using discrete lavalier mics.
              </p>
            </div>

            <div className="p-5 sm:p-6 bg-cinematic-black border border-metallic-gold/20">
              <h3 className="font-display text-lg sm:text-xl text-champagne-ivory mb-2">
                Custom Color Emulation
              </h3>
              <p className="text-xs sm:text-sm text-warm-grey font-light leading-relaxed">
                Color graded in DaVinci Resolve using bespoke 35mm film print emulations that bring out warm golds, velvet blacks, and flattering skin tones.
              </p>
            </div>

            <div className="p-5 sm:p-6 bg-cinematic-black border border-metallic-gold/20">
              <h3 className="font-display text-lg sm:text-xl text-champagne-ivory mb-2">
                Licensed Soundtrack Scoring
              </h3>
              <p className="text-xs sm:text-sm text-warm-grey font-light leading-relaxed">
                Each film edit is scored with fully licensed music, ranging from traditional acoustic sitar to contemporary orchestral arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 bg-cinematic-black text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-2xl sm:text-4xl text-pure-white mb-3 sm:mb-4">
            Want a Bespoke Film For Your Big Day?
          </h2>
          <p className="text-xs sm:text-sm text-warm-grey mb-8 font-light max-w-xl mx-auto">
            Inquire about our dedicated cinema crew availability and teaser turnaround times.
          </p>
          <GoldButton href="/contact" size="lg" className="w-full sm:w-auto justify-center">
            BOOK CINEMA CREW
          </GoldButton>
        </div>
      </section>
    </div>
  );
}
