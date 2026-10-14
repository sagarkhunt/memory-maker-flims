import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FilmShowcase } from "@/components/films/FilmShowcase";
import { filmsData } from "@/data/films";
import { GoldButton } from "@/components/ui/GoldButton";
import { Film } from "lucide-react";

export const CinematicFilmsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-dark-charcoal relative overflow-hidden">
      {/* Cinematic subtle spotlight */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-metallic-gold/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="MOTION. EMOTION. MEMORY."
          title="Your Story. In Motion."
          description="Relive the voices, the laughter, the promises and the moments that made your celebration unforgettable."
        />

        <FilmShowcase films={filmsData} featuredOnly={true} />

        <div className="mt-12 sm:mt-16 text-center">
          <GoldButton href="/films" variant="outline" size="lg" className="w-full sm:w-auto justify-center">
            <Film className="w-4 h-4 mr-2" />
            WATCH ALL FILMS
          </GoldButton>
        </div>
      </div>
    </section>
  );
};
