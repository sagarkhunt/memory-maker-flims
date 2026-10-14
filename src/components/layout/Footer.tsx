import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { servicesData } from "@/data/services";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import {
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
} from "@/components/ui/SocialIcons";
import { getWhatsAppUrl } from "@/lib/utils";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cinematic-black border-t border-metallic-gold/20 pt-16 sm:pt-20 pb-12 relative overflow-hidden">
      {/* Background Film Grain and Radial Vignette Accent */}
      <div className="absolute inset-0 film-grain pointer-events-none opacity-40" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-metallic-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-dark-charcoal">
          {/* Column 1: Studio Branding & Logo */}
          <div className="lg:col-span-4 flex flex-col space-y-5">
            <Link href="/" className="inline-block" aria-label="Memory Makers Films">
              <div className="relative h-11 sm:h-14 w-44 sm:w-56">
                <Image
                  src={siteConfig.logoPath}
                  alt={siteConfig.name}
                  fill
                  className="object-contain object-left"
                  style={{ mixBlendMode: "screen" }}
                  sizes="(max-width: 640px) 176px, 224px"
                />
              </div>
            </Link>

            <p className="font-display italic text-lg text-champagne-ivory/90">
              &ldquo;{siteConfig.tagline}&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-warm-grey font-light leading-relaxed max-w-sm">
              A luxury photography and cinematic filmmaking studio dedicated to
              immortalizing sacred weddings, romantic love stories, and treasured
              family celebrations with artistic grandeur.
            </p>

            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-metallic-gold/30 text-champagne-ivory hover:border-metallic-gold hover:text-metallic-gold transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-metallic-gold/30 text-champagne-ivory hover:border-metallic-gold hover:text-metallic-gold transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-metallic-gold/30 text-champagne-ivory hover:border-metallic-gold hover:text-metallic-gold transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-[#25D366]/40 text-[#25D366] hover:border-[#25D366] hover:bg-[#25D366]/10 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-metallic-gold font-semibold">
              Exploration
            </h4>
            <ul className="flex flex-col space-y-2.5 text-xs text-warm-grey">
              <li>
                <Link href="/" className="hover:text-champagne-ivory transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-champagne-ivory transition-colors">
                  About The Studio
                </Link>
              </li>
              <li>
                <Link href="/about/process" className="hover:text-champagne-ivory transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-champagne-ivory transition-colors">
                  Selected Portfolio
                </Link>
              </li>
              <li>
                <Link href="/films" className="hover:text-champagne-ivory transition-colors">
                  Cinematic Films
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-champagne-ivory transition-colors">
                  Client Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-champagne-ivory transition-colors">
                  Book Your Date
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Catalog */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-metallic-gold font-semibold">
              Key Services
            </h4>
            <ul className="flex flex-col space-y-2.5 text-xs text-warm-grey">
              {servicesData.slice(0, 7).map((srv) => (
                <li key={srv.slug}>
                  <Link
                    href={`/services/${srv.slug}`}
                    className="hover:text-champagne-ivory transition-colors flex items-center justify-between group"
                  >
                    <span>{srv.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-metallic-gold transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Studio Connect */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-metallic-gold font-semibold">
              Studio Details
            </h4>
            <div className="flex flex-col space-y-3 text-xs text-warm-grey">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-metallic-gold shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-metallic-gold shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                  className="hover:text-champagne-ivory transition-colors"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-metallic-gold shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-champagne-ivory transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-metallic-gold shrink-0 mt-0.5" />
                <span>{siteConfig.contact.businessHours}</span>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#25D366] hover:underline"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Direct WhatsApp Concierge →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-warm-grey/70">
          <p className="text-center sm:text-left">
            © {currentYear} {siteConfig.name}. All rights reserved. Handcrafted for timeless memories.
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-4 gap-y-1.5 sm:gap-6 text-center">
            <Link
              href="/privacy-policy"
              className="hover:text-metallic-gold transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-dark-charcoal hidden sm:inline">|</span>
            <Link
              href="/terms-and-conditions"
              className="hover:text-metallic-gold transition-colors"
            >
              Terms & Conditions
            </Link>
            <span className="text-dark-charcoal hidden sm:inline">|</span>
            <Link
              href="/contact"
              className="hover:text-metallic-gold transition-colors"
            >
              Studio Availability
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
