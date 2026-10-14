import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy — Memory Makers Films",
  description: "Privacy policy and client data protection practices of Memory Makers Films.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col w-full bg-cinematic-black">
      <section className="pt-28 sm:pt-36 md:pt-44 pb-12 sm:pb-16 border-b border-metallic-gold/15 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-metallic-gold font-semibold block mb-2">
            LEGAL & PRIVACY
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-pure-white mb-3 sm:mb-4">
            Privacy Policy
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
              1. Information We Collect
            </h2>
            <p>
              At {siteConfig.name}, we collect personal information you provide when
              inquiring about photography or filmmaking services, including your name,
              phone number, email address, event dates, event venues, and specific
              celebration requirements.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-2xl text-pure-white">
              2. How We Use Your Information
            </h2>
            <p>
              Your personal information is used exclusively to evaluate availability,
              communicate regarding your celebration, prepare service agreements,
              and coordinate on-site photography and cinematography logistics. We do
              not sell, rent, or trade your personal information to third parties.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-2xl text-pure-white">
              3. Image Rights & Client Privacy
            </h2>
            <p>
              We deeply respect our clients&apos; privacy. Before any photographs or
              cinematic films from your celebration are displayed in our portfolio,
              on social channels, or in print showcases, we respect agreements and
              permissions established in your commission agreement.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-2xl text-pure-white">
              4. Data Security
            </h2>
            <p>
              We maintain secure digital systems and redundant cloud storage protocols
              to safeguard your contact information, raw digital negatives, color-graded
              photographs, and cinematic film archives.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-2xl text-pure-white">
              5. Contact Us
            </h2>
            <p>
              For questions regarding our privacy practices or your data, please contact
              our studio at{" "}
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
