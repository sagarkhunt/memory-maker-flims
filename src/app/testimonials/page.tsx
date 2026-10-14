import React from "react";
import type { Metadata } from "next";
import { testimonialsData } from "@/data/testimonials";
import { GoldButton } from "@/components/ui/GoldButton";
import { Quote, Sparkles, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Testimonials & Kind Words — Memory Makers Films",
  description:
    "Read genuine reviews and memories shared by couples and families who celebrated with Memory Makers Films.",
};

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col w-full bg-cinematic-black">
      {/* Testimonials Hero */}
      <section className="pt-28 sm:pt-36 md:pt-44 pb-14 sm:pb-20 border-b border-metallic-gold/15 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-metallic-gold/30 bg-dark-charcoal/60">
            <Sparkles className="w-3.5 h-3.5 text-metallic-gold" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-metallic-gold font-semibold">
              KIND WORDS
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-pure-white leading-tight mb-4 sm:mb-6">
            Words That Inspire <br />
            <span className="gold-gradient-text italic font-light">
              Our Craft.
            </span>
          </h1>

          <p className="text-xs sm:text-base lg:text-lg text-champagne-ivory/80 font-light max-w-2xl mx-auto leading-relaxed">
            The greatest reward of our work is witnessing families relive their sacred moments through the photographs and films we create together.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {testimonialsData.map((t) => (
              <div
                key={t.id}
                className="bg-dark-charcoal/80 border border-metallic-gold/25 p-5 sm:p-7 lg:p-8 flex flex-col justify-between hover:border-metallic-gold/60 transition-all duration-300 shadow-xl"
              >
                <div>
                  <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-metallic-gold/30 mb-3 sm:mb-4" />
                  <p className="font-display italic text-sm sm:text-base lg:text-lg text-champagne-ivory leading-relaxed mb-6">
                    &ldquo;{t.review}&rdquo;
                  </p>
                </div>

                <div className="pt-5 sm:pt-6 border-t border-metallic-gold/15">
                  <p className="font-display text-base sm:text-lg text-metallic-gold font-medium">
                    {t.clientName}
                  </p>
                  <p className="text-[11px] text-warm-grey uppercase tracking-wider mt-0.5">
                    {t.eventCategory}
                    {t.location && ` • ${t.location}`}
                  </p>
                  {t.date && (
                    <p className="text-[10px] text-warm-grey/60 mt-1 font-mono">
                      {t.date}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Past Client Note */}
          <div className="mt-12 sm:mt-16 p-5 sm:p-8 bg-dark-charcoal/50 border border-metallic-gold/20 text-center max-w-2xl mx-auto">
            <MessageSquare className="w-6 h-6 text-metallic-gold mx-auto mb-2" />
            <h3 className="font-display text-lg sm:text-xl text-pure-white mb-2">
              Were You Photographed By Memory Makers Films?
            </h3>
            <p className="text-xs text-warm-grey mb-4 font-light leading-relaxed">
              We would cherish hearing your thoughts about your photographs and films.
            </p>
            <GoldButton href="/contact" variant="outline" size="sm" className="w-full sm:w-auto justify-center">
              LEAVE A REVIEW OR NOTE
            </GoldButton>
          </div>
        </div>
      </section>
    </div>
  );
}
