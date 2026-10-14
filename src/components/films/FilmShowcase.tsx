"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FilmItem } from "@/types";
import { VideoModal } from "@/components/ui/VideoModal";
import { Play, Clock } from "lucide-react";

interface FilmShowcaseProps {
  films: FilmItem[];
  featuredOnly?: boolean;
}

export const FilmShowcase: React.FC<FilmShowcaseProps> = ({
  films,
  featuredOnly = false,
}) => {
  const [selectedFilm, setSelectedFilm] = useState<FilmItem | null>(null);

  const displayedFilms = featuredOnly
    ? films.filter((f) => f.featured)
    : films;

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        {displayedFilms.map((film) => (
          <div
            key={film.id}
            className="group relative bg-dark-charcoal border border-metallic-gold/20 overflow-hidden flex flex-col transition-all duration-500 hover:border-metallic-gold/60 hover:shadow-2xl hover:shadow-black"
          >
            {/* 16:9 Thumbnail Container */}
            <div
              className="relative aspect-video w-full overflow-hidden bg-cinematic-black cursor-pointer"
              onClick={() => setSelectedFilm(film)}
            >
              <Image
                src={film.thumbnail}
                alt={film.title}
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black via-cinematic-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Category Pill */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex items-center gap-2">
                <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-semibold bg-cinematic-black/85 text-metallic-gold border border-metallic-gold/40 backdrop-blur-md">
                  {film.category}
                </span>
              </div>

              {/* Duration Pill */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[9px] sm:text-[10px] uppercase tracking-wider font-medium bg-cinematic-black/85 text-champagne-ivory border border-metallic-gold/20 backdrop-blur-md flex items-center gap-1">
                  <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-metallic-gold" />
                  {film.duration}
                </span>
              </div>

              {/* Center Play Button with Film Reel Glow */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-metallic-gold/90 text-cinematic-black flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-metallic-gold">
                  <Play className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 fill-cinematic-black ml-0.5 sm:ml-1" />
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-4 sm:p-6 flex flex-col space-y-2">
              <h3 className="font-display text-lg sm:text-xl md:text-2xl text-pure-white group-hover:text-champagne-ivory transition-colors">
                {film.title}
              </h3>
              <p className="text-xs sm:text-sm text-warm-grey font-light leading-relaxed">
                {film.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedFilm && (
        <VideoModal
          isOpen={!!selectedFilm}
          videoUrl={selectedFilm.videoUrl}
          title={selectedFilm.title}
          onClose={() => setSelectedFilm(null)}
        />
      )}
    </div>
  );
};
