"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonialsData } from "@/data/testimonials";
import { ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-cinematic-black relative border-t border-metallic-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="CLIENT VOICES"
          title="Kind Words. Lasting Memories."
          description="Reflections and heartfelt memories shared by the couples and families who entrusted us with their celebrations."
        />

        {testimonialsData.length === 0 ? (
          <div className="max-w-2xl mx-auto text-center p-8 sm:p-12 bg-dark-charcoal/50 border border-metallic-gold/20">
            <Sparkles className="w-8 h-8 text-metallic-gold mx-auto mb-3" />
            <p className="font-display text-xl text-champagne-ivory mb-2">
              Curating Recent Stories
            </p>
            <p className="text-xs text-warm-grey">
              Client testimonials for our latest season are being lovingly compiled.
            </p>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto relative bg-dark-charcoal/80 border border-metallic-gold/30 p-5 sm:p-10 lg:p-14 shadow-2xl">
            {/* Elegant Large Quote Motif */}
            <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-metallic-gold/30 mb-4 sm:mb-6" />

            <div className="min-h-[110px] sm:min-h-[140px] flex flex-col justify-center">
              <p className="font-display italic text-base sm:text-2xl text-pure-white leading-relaxed mb-6 sm:mb-8">
                &ldquo;{current.review}&rdquo;
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-metallic-gold/20 gap-4">
              <div>
                <p className="font-display text-xl text-metallic-gold font-medium">
                  {current.clientName}
                </p>
                <p className="text-xs text-warm-grey uppercase tracking-wider">
                  {current.eventCategory} {current.location && `• ${current.location}`}
                </p>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-warm-grey/70">
                  {currentIndex + 1} / {testimonialsData.length}
                </span>
                <button
                  onClick={handlePrev}
                  className="p-2.5 bg-cinematic-black border border-metallic-gold/30 text-champagne-ivory hover:text-metallic-gold hover:border-metallic-gold transition-colors"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 bg-cinematic-black border border-metallic-gold/30 text-champagne-ivory hover:text-metallic-gold hover:border-metallic-gold transition-colors"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
