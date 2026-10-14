"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqsData } from "@/data/faqs";
import { ChevronDown, MessageCircle } from "lucide-react";
import { cn, getWhatsAppUrl } from "@/lib/utils";

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqsData[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-dark-charcoal/40 relative border-t border-metallic-gold/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FREQUENT QUESTIONS"
          title="Everything You Need to Know."
          description="Clear answers about our studio's availability, creative process, and delivery commitments."
        />

        <div className="space-y-3 sm:space-y-4">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-cinematic-black border border-metallic-gold/20 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full px-4 sm:px-6 py-3.5 sm:py-5 text-left flex items-center justify-between gap-3 sm:gap-4 text-champagne-ivory hover:text-metallic-gold transition-colors focus:outline-none focus:ring-1 focus:ring-metallic-gold"
                >
                  <span className="font-display text-base sm:text-xl font-medium">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 sm:w-5 sm:h-5 text-metallic-gold shrink-0 transition-transform duration-300",
                      isOpen ? "rotate-180" : ""
                    )}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 text-xs sm:text-sm text-warm-grey font-light leading-relaxed border-t border-dark-charcoal/80 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 p-5 sm:p-6 bg-cinematic-black border border-metallic-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-display text-lg sm:text-xl text-champagne-ivory">
              Have a specific question not covered here?
            </p>
            <p className="text-xs text-warm-grey mt-0.5">
              Our directors are always available to help plan your celebration.
            </p>
          </div>

          <a
            href={getWhatsAppUrl("Hello Memory Makers Films, I have a specific question regarding my event.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-3 bg-[#25D366] text-cinematic-black text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 hover:bg-[#20ba59] transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            Ask On WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
