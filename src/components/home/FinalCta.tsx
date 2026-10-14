import React from "react";
import Image from "next/image";
import { GoldButton } from "@/components/ui/GoldButton";
import { MessageCircle, Calendar, Sparkles } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export const FinalCta: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-28 lg:py-36 bg-cinematic-black overflow-hidden text-center">
      {/* Background Cinematic Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2000&q=85"
          alt="Cinematic Wedding Celebration"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Layered overlays */}
        <div className="absolute inset-0 bg-cinematic-black/85" />
        <div className="absolute inset-0 cinematic-vignette opacity-90" />
        <div className="absolute inset-0 film-grain opacity-40 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 sm:mb-6 border border-metallic-gold/30 bg-cinematic-black/60 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-metallic-gold" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-metallic-gold font-semibold">
            START YOUR JOURNEY
          </span>
        </div>

        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-pure-white leading-tight mb-4 sm:mb-6">
          LET&apos;S CREATE <br />
          <span className="gold-gradient-text italic font-light">
            MEMORIES TOGETHER.
          </span>
        </h2>

        <p className="text-xs sm:text-base lg:text-lg text-champagne-ivory/80 font-light max-w-2xl mb-8 sm:mb-10 leading-relaxed">
          Every celebration is different. Tell us your story, and let&apos;s plan
          the perfect coverage for your special day.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto px-2 sm:px-0">
          <GoldButton href="/contact" size="lg" className="w-full sm:w-auto justify-center text-center">
            <Calendar className="w-4 h-4 mr-2" />
            BOOK YOUR DATE
          </GoldButton>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-[#25D366] text-cinematic-black text-xs sm:text-sm uppercase tracking-wider sm:tracking-[0.18em] font-semibold flex items-center justify-center gap-2 hover:bg-[#20ba59] transition-all shadow-lg active:scale-95 text-center"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>Chat on WhatsApp</span>
            <span className="hidden sm:inline">(+91 96011 34020)</span>
          </a>
        </div>
      </div>
    </section>
  );
};
