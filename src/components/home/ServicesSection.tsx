import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { allServicesCatalog } from "@/data/services";
import { ArrowRight } from "lucide-react";

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-dark-charcoal/50 relative overflow-hidden">
      {/* Background Perforation Line Accent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="WHAT WE DO"
          title="Your Moments. Our Perspective."
          description="A comprehensive suite of luxury photography and cinematic filmmaking tailored to celebrate life's most meaningful milestones."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {allServicesCatalog.map((service, index) => {
            return (
              <div
                key={service.id}
                className="group relative bg-cinematic-black border border-metallic-gold/20 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-metallic-gold/60 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black"
              >
                {/* Image Cover Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-dark-charcoal">
                  <Image
                    src={service.coverImage}
                    alt={service.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black via-cinematic-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Index Number */}
                  <span className="absolute top-3 left-3 sm:left-4 text-[10px] font-mono tracking-widest text-metallic-gold/80 px-2 py-0.5 bg-cinematic-black/70 backdrop-blur-sm border border-metallic-gold/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl text-pure-white group-hover:text-champagne-ivory transition-colors mb-2">
                      <Link href={`/services/${service.slug}`}>
                        {service.title}
                      </Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-warm-grey font-light leading-relaxed line-clamp-3 mb-6">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-dark-charcoal/80 flex items-center justify-between">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-metallic-gold hover:text-champagne-ivory transition-colors font-medium group/link"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>

                    <span className="text-[10px] text-warm-grey/50 uppercase tracking-widest font-mono">
                      Bespoke
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Booking Notice */}
        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-warm-grey">
            Planning a custom event with multi-day coverage?{" "}
            <Link
              href="/contact"
              className="text-metallic-gold hover:underline font-semibold ml-1"
            >
              Discuss with our Creative Directors →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
