import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { allServicesCatalog } from "@/data/services";
import { GoldButton } from "@/components/ui/GoldButton";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Coverage — Photography, Cinema & Reels",
  description:
    "Explore our complete range of bespoke photography and filmmaking services for weddings, pre-weddings, baby showers, and family celebrations.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-cinematic-black">
      {/* Services Hero */}
      <section className="pt-28 sm:pt-36 md:pt-44 pb-14 sm:pb-20 border-b border-metallic-gold/15 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-metallic-gold/30 bg-dark-charcoal/60">
            <Sparkles className="w-3.5 h-3.5 text-metallic-gold" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-metallic-gold font-semibold">
              OUR COMPLETE SUITE
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-pure-white leading-tight mb-4 sm:mb-6">
            Services Tailored to <br />
            <span className="gold-gradient-text italic font-light">
              Your Milestone.
            </span>
          </h1>

          <p className="text-xs sm:text-base lg:text-lg text-champagne-ivory/80 font-light max-w-2xl mx-auto leading-relaxed">
            From intimate sacred rituals to multi-day palace destination weddings, we curate our cinematography and photography teams to preserve your story with editorial grandeur.
          </p>
        </div>
      </section>

      {/* Services List Grid */}
      <section className="py-16 sm:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16">
          {allServicesCatalog.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center bg-dark-charcoal/60 border border-metallic-gold/25 p-4 sm:p-8 lg:p-12 hover:border-metallic-gold/50 transition-all duration-300 shadow-xl"
              >
                {/* Visual Cover */}
                <div
                  className={`lg:col-span-6 relative aspect-[16/11] w-full overflow-hidden border border-metallic-gold/20 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={service.coverImage}
                    alt={service.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black/60 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 sm:top-4 sm:left-4 font-mono text-[11px] sm:text-xs text-metallic-gold px-2.5 py-1 bg-cinematic-black/80 border border-metallic-gold/30">
                    Service {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content Area */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-between space-y-6 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div>
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-pure-white mb-3">
                      {service.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-warm-grey font-light leading-relaxed mb-6">
                      {service.fullDescription || service.shortDescription}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feat, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 text-xs text-champagne-ivory/90"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-metallic-gold shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-dark-charcoal flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                    <GoldButton
                      href={`/services/${service.slug}`}
                      size="md"
                      className="w-full sm:w-auto text-center justify-center"
                    >
                      VIEW FULL DETAILS
                      <ArrowRight className="w-3.5 h-3.5 ml-2" />
                    </GoldButton>

                    <GoldButton
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      variant="outline"
                      size="md"
                      className="w-full sm:w-auto text-center justify-center"
                    >
                      BOOK THIS SERVICE
                    </GoldButton>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Booking Notice */}
      <section className="py-16 sm:py-20 bg-dark-charcoal border-t border-metallic-gold/20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-2xl sm:text-4xl text-pure-white mb-3 sm:mb-4">
            Need a Custom Multi-City Package?
          </h2>
          <p className="text-xs sm:text-sm text-warm-grey mb-8 font-light max-w-xl mx-auto">
            We happily tailor crew configurations for destination celebrations, multi-cultural weddings, and private estates.
          </p>
          <GoldButton href="/contact" size="lg" className="w-full sm:w-auto justify-center">
            INQUIRE ABOUT BESPOKE COVERAGE
          </GoldButton>
        </div>
      </section>
    </div>
  );
}
