import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Heart, Clapperboard, Eye, History } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      num: "01",
      icon: Heart,
      title: "Genuine Emotions",
      description: "Real expressions and meaningful moments captured with care.",
    },
    {
      num: "02",
      icon: Clapperboard,
      title: "Cinematic Storytelling",
      description: "Visual storytelling that brings your celebration back to life.",
    },
    {
      num: "03",
      icon: Eye,
      title: "Attention to Detail",
      description: "From beautiful details to important traditions, every moment matters.",
    },
    {
      num: "04",
      icon: History,
      title: "Timeless Memories",
      description: "Photographs and films created to be cherished for years to come.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-cinematic-black relative border-y border-metallic-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="OUR COMMITMENT"
          title="More Than Photography."
          description="Crafted with intentionality, artistic sensitivity, and unwavering dedication to preserving your family's legacy."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="p-5 sm:p-7 lg:p-8 bg-dark-charcoal/60 border border-metallic-gold/20 flex flex-col justify-between transition-all duration-300 hover:border-metallic-gold/50 hover:bg-dark-charcoal group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs tracking-widest text-metallic-gold font-bold">
                      {pillar.num}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-metallic-gold/10 border border-metallic-gold/30 flex items-center justify-center text-metallic-gold group-hover:bg-metallic-gold group-hover:text-cinematic-black transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display text-2xl text-pure-white mb-3 group-hover:text-champagne-ivory transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-warm-grey font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-dark-charcoal">
                  <span className="h-0.5 w-8 bg-metallic-gold/40 block group-hover:w-16 transition-all" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
