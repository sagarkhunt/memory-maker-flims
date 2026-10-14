import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MessageSquare, CalendarClock, Camera, Sparkles } from "lucide-react";
import Link from "next/link";

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Connect With Us",
      summary: "Discuss the event, date, location and requirements.",
      icon: MessageSquare,
      details:
        "Begin by telling us about your vision. We check calendar availability, discuss your venues, and share initial portfolio samples tailored to your style.",
    },
    {
      step: "02",
      title: "Plan Your Coverage",
      summary: "Understand the event schedule, preferred photography style and deliverables.",
      icon: CalendarClock,
      details:
        "We craft a personalized coverage itinerary, coordinate lighting requirements for every ritual, and finalize custom photography & film packages.",
    },
    {
      step: "03",
      title: "Capture the Moments",
      summary: "Photograph and film the meaningful moments throughout the celebration.",
      icon: Camera,
      details:
        "Our discreet, professional crew arrives equipped with multi-camera cinema rigs and prime lenses, capturing emotions naturally without intrusion.",
    },
    {
      step: "04",
      title: "Relive the Memories",
      summary: "Deliver the agreed photographs and films after editing and post-production.",
      icon: Sparkles,
      details:
        "We color-grade every image, master cinematic sound design, deliver social teasers, and present your private cloud gallery and handcrafted heirloom album.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-cinematic-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="OUR WORKFLOW"
          title="From Your Celebration to Your Story."
          description="A seamless, respectful creative process engineered to ensure effortless communication and timeless visual artistry."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 relative">
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-metallic-gold/30 to-transparent -translate-y-8 pointer-events-none" />

          {steps.map((stepItem, idx) => {
            const Icon = stepItem.icon;
            return (
              <div
                key={stepItem.step}
                className="bg-dark-charcoal/70 border border-metallic-gold/20 p-5 sm:p-7 lg:p-8 flex flex-col justify-between relative group hover:border-metallic-gold/60 hover:bg-dark-charcoal transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs tracking-widest text-metallic-gold font-bold px-2 py-1 bg-cinematic-black border border-metallic-gold/30">
                      Step {stepItem.step}
                    </span>
                    <Icon className="w-5 h-5 text-metallic-gold/70 group-hover:text-metallic-gold transition-colors" />
                  </div>

                  <h3 className="font-display text-2xl text-pure-white mb-2 group-hover:text-champagne-ivory transition-colors">
                    {stepItem.title}
                  </h3>

                  <p className="text-xs uppercase tracking-wider text-metallic-gold/90 font-medium mb-3">
                    {stepItem.summary}
                  </p>

                  <p className="text-xs text-warm-grey font-light leading-relaxed">
                    {stepItem.details}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-dark-charcoal/80 flex items-center justify-between text-[11px] text-warm-grey/60 font-mono">
                  <span>Phase {idx + 1}</span>
                  <span className="text-metallic-gold opacity-0 group-hover:opacity-100 transition-opacity">
                    ✓ Verified
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/about/process"
            className="text-xs uppercase tracking-[0.2em] text-metallic-gold hover:text-champagne-ivory inline-flex items-center gap-2 transition-colors font-medium"
          >
            Read our in-depth step-by-step production process →
          </Link>
        </div>
      </div>
    </section>
  );
};
