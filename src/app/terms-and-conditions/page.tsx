import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms & Conditions — Memory Makers Films",
  description: "Terms and conditions governing photography and videography commissions with Memory Makers Films.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col w-full bg-cinematic-black">
      <section className="pt-28 sm:pt-36 md:pt-44 pb-12 sm:pb-16 border-b border-metallic-gold/15 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-metallic-gold font-semibold block mb-2">
            STUDIO POLICIES
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-pure-white mb-3 sm:mb-4">
            Terms & Conditions
          </h1>
          <p className="text-xs sm:text-sm text-warm-grey">
            Last Updated: January 2025
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-invert max-w-none text-warm-grey text-sm sm:text-base leading-relaxed space-y-8 font-light">
          <div className="space-y-3">
            <h2 className="font-display text-2xl text-pure-white">
              1. Date Reservation & Retainer
            </h2>
            <p>
              Dates are reserved exclusively upon the execution of a formal service
              agreement and receipt of the agreed booking advance. Inquiries without an
              advance deposit do not hold a reservation on our studio calendar.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-2xl text-pure-white">
              2. Coverage & Schedule Coordination
            </h2>
            <p>
              The client agrees to provide a finalized event timeline at least 14 days
              prior to the celebration. {siteConfig.name} will not be held liable for
              missed moments caused by delays in venue access, severe schedule changes,
              or external weather conditions beyond our control.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-2xl text-pure-white">
              3. Post-Production & Delivery Timelines
            </h2>
            <p>
              Artistry requires meticulous craftsmanship. Sneak peek preview images are
              delivered within 48 to 72 hours following the event. Full color-graded
              digital photo galleries are delivered within 3 to 4 weeks. Cinematic films
              and physical heirloom albums require approximately 6 to 8 weeks for color
              grading, sound design, and custom bookbinding.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-2xl text-pure-white">
              4. Copyright & Archival
            </h2>
            <p>
              All photographs and films created by {siteConfig.name} are protected by
              copyright laws. Clients receive perpetual personal, non-commercial reproduction
              rights for online sharing and personal printing. High-resolution raw files
              remain archived for 12 months following delivery.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-2xl text-pure-white">
              5. Governing Law
            </h2>
            <p>
              These terms are governed by the laws of India. For any questions or customized
              contractual agreements, please contact our studio at{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-metallic-gold hover:underline"
              >
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
