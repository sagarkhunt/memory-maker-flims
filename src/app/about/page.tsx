import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GoldButton } from "@/components/ui/GoldButton";
import {
  Heart,
  Film,
  Sparkles,
  Compass,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About The Studio — Storytelling & Cinematic Philosophy",
  description:
    "Discover the artistic vision, creative philosophy, and storytelling ethos behind Memory Makers Films.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-cinematic-black">
      {/* Editorial Hero */}
      <section className="relative pt-28 sm:pt-36 md:pt-44 pb-14 sm:pb-24 overflow-hidden border-b border-metallic-gold/15">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85"
            alt="About Memory Makers Films"
            fill
            priority
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black via-cinematic-black/90 to-cinematic-black/70" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-metallic-gold/30 bg-dark-charcoal/60 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-metallic-gold" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-metallic-gold font-semibold">
              ABOUT THE STUDIO
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-pure-white leading-tight mb-4 sm:mb-6">
            We Don&apos;t Just Capture Frames. <br />
            <span className="gold-gradient-text italic font-light">
              We Preserve Heirlooms.
            </span>
          </h1>

          <p className="text-xs sm:text-base lg:text-lg text-champagne-ivory/80 font-light max-w-2xl leading-relaxed">
            Founded on the belief that love, sacred traditions, and unscripted laughter are the most profound stories of human life.
          </p>
        </div>
      </section>

      {/* Philosophy & Approach Section */}
      <section className="py-16 sm:py-24 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-metallic-gold/30 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85"
                  alt="Bridal editorial portrait"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute bottom-3 right-3 sm:-bottom-6 sm:-right-4 p-4 sm:p-6 bg-dark-charcoal border border-metallic-gold/40 max-w-[260px] sm:max-w-xs shadow-2xl">
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-metallic-gold font-mono mb-1">
                  Artistic Creed
                </p>
                <p className="font-display italic text-sm sm:text-base text-champagne-ivory">
                  &ldquo;A photograph should feel as alive fifty years from now as it does today.&rdquo;
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-6 h-px bg-metallic-gold" />
                <span className="text-xs uppercase tracking-[0.2em] text-metallic-gold font-semibold">
                  STUDIO PHILOSOPHY
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-pure-white leading-tight">
                Authenticity Over Artificial Poses.
              </h2>

              <p className="text-xs sm:text-base text-warm-grey font-light leading-relaxed">
                At Memory Makers Films, we approach every celebration not as
                spectators, but as respectful visual biographers. We understand
                that weddings are intimate, emotionally charged tapestries woven
                with sacred prayers, fleeting tears between mothers and daughters,
                and spontaneous laughter among lifelong friends.
              </p>

              <p className="text-xs sm:text-base text-warm-grey font-light leading-relaxed">
                Rather than interrupting the natural cadence of your ceremonies
                with repetitive directing or artificial setups, our directors blend
                discreetly into your surroundings. We utilize natural light,
                cinematic framing, and state-of-the-art camera sensors to capture
                genuine honesty.
              </p>

              <div className="pt-4 border-t border-dark-charcoal grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <p className="font-display text-xl sm:text-2xl text-metallic-gold">
                    Unobtrusive
                  </p>
                  <p className="text-xs text-warm-grey mt-1">
                    Silent cinema shutters and respectful distance so rituals remain sacred.
                  </p>
                </div>
                <div>
                  <p className="font-display text-xl sm:text-2xl text-metallic-gold">
                    Master Graded
                  </p>
                  <p className="text-xs text-warm-grey mt-1">
                    Every frame individually color balanced to skin tones and natural ambiance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storytelling Principles */}
      <section className="py-16 sm:py-24 lg:py-28 bg-dark-charcoal/50 border-y border-metallic-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="PILLARS OF ARTISTRY"
            title="Our Storytelling Principles"
            description="The four foundational principles that guide every camera movement, shutter click, and documentary edit."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            <div className="p-5 sm:p-8 bg-cinematic-black border border-metallic-gold/20 flex flex-col justify-between">
              <div>
                <Heart className="w-8 h-8 text-metallic-gold mb-4" />
                <h3 className="font-display text-xl text-pure-white mb-2">
                  Empathy First
                </h3>
                <p className="text-xs text-warm-grey font-light leading-relaxed">
                  We listen before we shoot. Understanding your family bonds and cultural heritage enables us to recognize the most meaningful moments.
                </p>
              </div>
            </div>

            <div className="p-5 sm:p-8 bg-cinematic-black border border-metallic-gold/20 flex flex-col justify-between">
              <div>
                <Film className="w-8 h-8 text-metallic-gold mb-4" />
                <h3 className="font-display text-xl text-pure-white mb-2">
                  Cinematic Timing
                </h3>
                <p className="text-xs text-warm-grey font-light leading-relaxed">
                  Capturing fleeting expressions requires razor-sharp anticipation. We study the ceremony schedule so we are always in position.
                </p>
              </div>
            </div>

            <div className="p-5 sm:p-8 bg-cinematic-black border border-metallic-gold/20 flex flex-col justify-between">
              <div>
                <Sparkles className="w-8 h-8 text-metallic-gold mb-4" />
                <h3 className="font-display text-xl text-pure-white mb-2">
                  Preserved Sanity
                </h3>
                <p className="text-xs text-warm-grey font-light leading-relaxed">
                  We preserve the true colors and textures of your wedding garments, decor flowers, and evening candlelight without harsh digital artifacts.
                </p>
              </div>
            </div>

            <div className="p-5 sm:p-8 bg-cinematic-black border border-metallic-gold/20 flex flex-col justify-between">
              <div>
                <Compass className="w-8 h-8 text-metallic-gold mb-4" />
                <h3 className="font-display text-xl text-pure-white mb-2">
                  Bespoke Delivery
                </h3>
                <p className="text-xs text-warm-grey font-light leading-relaxed">
                  Every film edit and physical photo album is customized to your preferred musical aesthetics and family storytelling desires.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Scenes Showcase */}
      <section className="py-16 sm:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="BEHIND THE LENS"
            title="Craftsmanship in Action"
            description="A glimpse into how our cinematographers and photographers operate discreetly on location."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] bg-dark-charcoal border border-metallic-gold/20 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1000&q=85"
                alt="Filmmakers filming couple"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] bg-dark-charcoal border border-metallic-gold/20 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1000&q=85"
                alt="Cinema camera rig"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] bg-dark-charcoal border border-metallic-gold/20 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=85"
                alt="Event atmosphere"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          <div className="mt-12 sm:mt-14 text-center">
            <Link
              href="/about/process"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-metallic-gold hover:text-champagne-ivory transition-colors font-medium"
            >
              Learn about our complete 4-step production process →
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 bg-dark-charcoal border-t border-metallic-gold/20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-2xl sm:text-4xl text-pure-white mb-3 sm:mb-4">
            Let&apos;s Discuss Your Vision
          </h2>
          <p className="text-xs sm:text-sm text-warm-grey mb-8 font-light max-w-xl mx-auto">
            We would love to hear all about your upcoming celebration and craft an unforgettable visual heirloom.
          </p>
          <GoldButton href="/contact" size="lg" className="w-full sm:w-auto justify-center">
            SCHEDULE A CONSULTATION
          </GoldButton>
        </div>
      </section>
    </div>
  );
}
