import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/forms/ContactForm";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Book Your Date — Contact Memory Makers Films",
  description:
    "Check availability, schedule a consultation, or inquire about photography and cinematic film packages for your upcoming celebration.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-cinematic-black">
      {/* Contact Hero Header */}
      <section className="pt-28 sm:pt-36 md:pt-44 pb-14 sm:pb-20 border-b border-metallic-gold/15 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-metallic-gold/30 bg-dark-charcoal/60">
            <Calendar className="w-3.5 h-3.5 text-metallic-gold" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-metallic-gold font-semibold">
              CALENDAR AVAILABILITY
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-pure-white leading-tight mb-4 sm:mb-6">
            Let&apos;s Reserve <br />
            <span className="gold-gradient-text italic font-light">
              Your Special Date.
            </span>
          </h1>

          <p className="text-xs sm:text-base lg:text-lg text-champagne-ivory/80 font-light max-w-2xl mx-auto leading-relaxed">
            Every celebration begins with a conversation. Fill out the enquiry form below or message our studio directly on WhatsApp.
          </p>
        </div>
      </section>

      {/* Main Two-Column Contact Layout */}
      <section className="py-14 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Column: Studio Information & Direct Channels */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
              <div className="bg-dark-charcoal/80 border border-metallic-gold/30 p-5 sm:p-8 lg:p-10 shadow-2xl space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-metallic-gold font-semibold block mb-2">
                    DIRECT REACH
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl text-pure-white">
                    Studio Communications
                  </h3>
                </div>

                <div className="space-y-4 sm:space-y-5 text-xs sm:text-sm text-warm-grey">
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-metallic-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-metallic-gold font-mono">
                        Direct Telephone
                      </p>
                      <a
                        href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                        className="text-champagne-ivory hover:text-metallic-gold transition-colors font-medium break-all"
                      >
                        {siteConfig.contact.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-metallic-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-metallic-gold font-mono">
                        Inquiry Email
                      </p>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-champagne-ivory hover:text-metallic-gold transition-colors font-medium break-all"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-metallic-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-metallic-gold font-mono">
                        Studio Location
                      </p>
                      <p className="text-champagne-ivory leading-relaxed">
                        {siteConfig.contact.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-metallic-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-metallic-gold font-mono">
                        Studio Working Hours
                      </p>
                      <p className="text-champagne-ivory">
                        {siteConfig.contact.businessHours}
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp One-Click Action Card */}
                <div className="pt-6 border-t border-metallic-gold/20">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 sm:py-4 px-4 sm:px-6 bg-[#25D366] text-cinematic-black text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-[0.18em] font-semibold flex items-center justify-center gap-2 hover:bg-[#20ba59] transition-all shadow-xl text-center"
                  >
                    <MessageCircle className="w-4 h-4 fill-cinematic-black shrink-0" />
                    <span>Instant WhatsApp Chat</span>
                  </a>
                  <p className="text-[11px] text-warm-grey/70 text-center mt-2">
                    Typical response time: under 1 hour during business hours.
                  </p>
                </div>
              </div>

              {/* What to Expect Card */}
              <div className="bg-cinematic-black border border-metallic-gold/20 p-4 sm:p-6 space-y-4">
                <p className="text-xs uppercase tracking-[0.2em] text-metallic-gold font-semibold">
                  What Happens Next?
                </p>
                <div className="space-y-3 text-xs text-warm-grey font-light">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-3.5 h-3.5 text-metallic-gold shrink-0 mt-0.5" />
                    <span>We check calendar availability for your event date.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-3.5 h-3.5 text-metallic-gold shrink-0 mt-0.5" />
                    <span>Our creative director shares a tailored coverage proposal.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-3.5 h-3.5 text-metallic-gold shrink-0 mt-0.5" />
                    <span>We arrange a video consultation to discuss moodboards and rituals.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
