"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioProjects } from "@/data/portfolio";
import { GoldButton } from "@/components/ui/GoldButton";
import { VideoModal } from "@/components/ui/VideoModal";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  ArrowRight,
  MapPin,
} from "lucide-react";

export const SpotlightProject: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const project = portfolioProjects[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioProjects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? portfolioProjects.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-dark-charcoal/80 border-t border-metallic-gold/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-px bg-metallic-gold" />
              <span className="text-xs uppercase tracking-[0.25em] text-metallic-gold font-semibold">
                PORTFOLIO SPOTLIGHT
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl text-pure-white">
              Featured Editorial Story
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-warm-grey">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(portfolioProjects.length).padStart(2, "0")}
            </span>
            <button
              onClick={handlePrev}
              className="p-2.5 sm:p-3 bg-cinematic-black border border-metallic-gold/30 text-champagne-ivory hover:text-metallic-gold hover:border-metallic-gold transition-colors"
              aria-label="Previous Spotlight Project"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 sm:p-3 bg-cinematic-black border border-metallic-gold/30 text-champagne-ivory hover:text-metallic-gold hover:border-metallic-gold transition-colors"
              aria-label="Next Spotlight Project"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Feature Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-stretch bg-cinematic-black border border-metallic-gold/30 p-4 sm:p-8 lg:p-10 shadow-2xl">
          {/* Main Visual */}
          <div className="lg:col-span-7 relative aspect-[16/11] w-full overflow-hidden bg-dark-charcoal">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover object-center transition-all duration-700"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black/60 via-transparent to-transparent" />

            {project.videoUrl && (
              <button
                onClick={() => setVideoModalOpen(true)}
                className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-4 sm:py-2 bg-cinematic-black/90 border border-metallic-gold text-metallic-gold hover:bg-metallic-gold hover:text-cinematic-black transition-colors text-[10px] sm:text-xs uppercase tracking-wider font-semibold backdrop-blur-md"
              >
                <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                Play Story Video ({project.videoDuration || "4K"})
              </button>
            )}
          </div>

          {/* Project Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] font-semibold bg-dark-charcoal text-metallic-gold border border-metallic-gold/40">
                  {project.categoryDisplay}
                </span>

                {project.location && (
                  <span className="text-xs text-warm-grey flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-metallic-gold" />
                    {project.location}
                  </span>
                )}
              </div>

              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-pure-white leading-snug">
                {project.title}
              </h3>

              <p className="text-xs sm:text-sm text-warm-grey font-light leading-relaxed">
                {project.story}
              </p>

              {project.cameraDetails && (
                <div className="p-4 bg-dark-charcoal/60 border-l-2 border-metallic-gold text-xs space-y-1.5">
                  <p className="text-[10px] uppercase tracking-wider text-metallic-gold font-mono">
                    Artistic Notes
                  </p>
                  {project.cameraDetails.shotOn && (
                    <p className="text-champagne-ivory/90">
                      <strong className="text-warm-grey">Shot On:</strong>{" "}
                      {project.cameraDetails.shotOn}
                    </p>
                  )}
                  {project.cameraDetails.colorGrade && (
                    <p className="text-champagne-ivory/90">
                      <strong className="text-warm-grey">Color Grade:</strong>{" "}
                      {project.cameraDetails.colorGrade}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Gallery Thumbnails Preview */}
            <div className="space-y-3">
              <p className="text-[11px] uppercase tracking-[0.2em] text-metallic-gold font-medium">
                Gallery Previews ({project.galleryImages.length} Photographs)
              </p>
              <div className="grid grid-cols-4 gap-2">
                {project.galleryImages.slice(0, 4).map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-square overflow-hidden border border-metallic-gold/20"
                  >
                    <Image
                      src={img.url}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex items-center">
              <GoldButton
                href={`/portfolio/${project.slug}`}
                size="md"
                className="w-full sm:w-auto justify-center text-center"
              >
                EXPLORE FULL GALLERY
                <ArrowRight className="w-4 h-4 ml-2" />
              </GoldButton>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {project.videoUrl && (
        <VideoModal
          isOpen={videoModalOpen}
          videoUrl={project.videoUrl}
          title={project.title}
          onClose={() => setVideoModalOpen(false)}
        />
      )}
    </section>
  );
};
