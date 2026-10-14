import React from "react";
import type { Metadata } from "next";
import { GoldButton } from "@/components/ui/GoldButton";
import {
  MessageSquare,
  CalendarCheck,
  Camera,
  Sparkles,
  Sliders,
  CheckCircle2,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Photography & Film Process — From Celebration to Story",
  description:
    "Explore our complete 4-step photography and cinematography production process at Memory Makers Films.",
};

export default function ProcessPage() {
  const detailedSteps = [
    {
      num: "01",
      title: "Connect With Us & Discovery",
      eyebrow: "DISCOVERY & VISION",
      icon: MessageSquare,
      summary: "Discuss the event, date, location and requirements.",
      timeline: "Immediately upon enquiry",
      details: [
        "Initial discovery conversation via WhatsApp, phone, or video call.",
        "Verification of studio calendar availability for your specific dates.",
        "Reviewing venue lighting conditions, event flow, and special cultural traditions.",
        "Preliminary custom proposal outlining crew configuration and investment.",
      ],
    },
    {
      num: "02",
      title: "Plan Your Coverage & Styling",
      eyebrow: "PRE-PRODUCTION",
      icon: CalendarCheck,
      summary: "Understand the event schedule, preferred photography style and deliverables.",
      timeline: "2 to 4 weeks prior to the event",
      details: [
        "Detailed timeline coordination with your wedding planner or family elders.",
        "Color palette guidance to ensure wardrobe harmonizes with ambient venue decors.",
        "Shot list definition for key family portraits and mandatory ritual milestones.",
        "Logistics setup for drone permissions, wireless audio lavaliers, and backup gear.",
      ],
    },
    {
      num: "03",
      title: "Capture the Moments",
      eyebrow: "PRODUCTION ON-SITE",
      icon: Camera,
      summary: "Photograph and film the meaningful moments throughout the celebration.",
      timeline: "Event day execution",
      details: [
        "Discreet, multi-camera synchronized coverage with cinema primes and silent shutters.",
        "Master candid photographer focusing solely on unscripted tears, laughs, and glances.",
        "High-definition wireless audio recording of vows, speeches, and sacred mantras.",
        "Dual-card redundancy recording on all cinema cameras to ensure zero data loss.",
      ],
    },
    {
      num: "04",
      title: "Relive the Memories & Delivery",
      eyebrow: "POST-PRODUCTION & CURATION",
      icon: Sparkles,
      summary: "Deliver the agreed photographs and films after editing and post-production.",
      timeline: "Previews in 48 hours • Complete suite in 3-6 weeks",
      details: [
        "Curated sneak peek gallery delivered within 48 hours for immediate social sharing.",
        "Individual high-end color grading and retouching of every final photograph.",
        "Cinematic film editing in DaVinci Resolve with customized sound design and music licensing.",
        "Private password-protected cloud gallery and luxury physical heirloom album delivery.",
      ],
    },
  ];

  return (
    <div className="flex flex-col w-full bg-cinematic-black">
      {/* Hero Section */}
      <section className="pt-28 sm:pt-36 md:pt-44 pb-14 sm:pb-20 border-b border-metallic-gold/15 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-metallic-gold/30 bg-dark-charcoal/60">
            <Sliders className="w-3.5 h-3.5 text-metallic-gold" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-metallic-gold font-semibold">
              OUR PRODUCTION BLUEPRINT
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-pure-white leading-tight mb-4 sm:mb-6">
            From Your Celebration <br />
            <span className="gold-gradient-text italic font-light">
              To Your Timeless Story.
            </span>
          </h1>

          <p className="text-xs sm:text-base lg:text-lg text-champagne-ivory/80 font-light max-w-2xl mx-auto leading-relaxed">
            Every masterpiece is born of preparation. Explore how our meticulous planning, discreet on-site filming, and bespoke editing ensure effortless perfection.
          </p>
        </div>
      </section>

      {/* Step by Step Breakdown */}
      <section className="py-16 sm:py-24 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12 lg:space-y-16">
          {detailedSteps.map((step) => {
            return (
              <div
                key={step.num}
                className="bg-dark-charcoal/80 border border-metallic-gold/30 p-5 sm:p-8 lg:p-12 relative overflow-hidden shadow-2xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-5 sm:pb-6 border-b border-metallic-gold/20 mb-5 sm:mb-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="font-mono text-base sm:text-2xl text-metallic-gold font-bold px-2.5 sm:px-3 py-1 bg-cinematic-black border border-metallic-gold/30 shrink-0">
                      Phase {step.num}
                    </span>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-metallic-gold font-semibold">
                        {step.eyebrow}
                      </p>
                      <h2 className="font-display text-xl sm:text-3xl text-pure-white">
                        {step.title}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-champagne-ivory/80 bg-cinematic-black px-3 py-1.5 border border-dark-charcoal self-start sm:self-auto">
                    <Clock className="w-3.5 h-3.5 text-metallic-gold" />
                    <span>{step.timeline}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-base text-champagne-ivory/90 italic font-display mb-5 sm:mb-6">
                  &ldquo;{step.summary}&rdquo;
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {step.details.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-warm-grey">
                      <CheckCircle2 className="w-4 h-4 text-metallic-gold shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 bg-dark-charcoal border-t border-metallic-gold/20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-2xl sm:text-4xl text-pure-white mb-3 sm:mb-4">
            Ready to Begin Phase 01?
          </h2>
          <p className="text-xs sm:text-sm text-warm-grey mb-8 font-light max-w-xl mx-auto">
            Share your event date and location. We will guide you through every stage with warm, expert care.
          </p>
          <GoldButton href="/contact" size="lg" className="w-full sm:w-auto justify-center">
            BOOK YOUR DATE TODAY
          </GoldButton>
        </div>
      </section>
    </div>
  );
}
