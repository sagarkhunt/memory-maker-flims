"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { mainNavLinks } from "@/data/navigation";
import { GoldButton } from "@/components/ui/GoldButton";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  MessageCircle,
  Calendar,
} from "lucide-react";
import { cn, getWhatsAppUrl } from "@/lib/utils";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const [prevPath, setPrevPath] = useState(pathname);

  // Close menus on route navigation
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-cinematic-black/95 backdrop-blur-md border-b border-metallic-gold/20 py-2 sm:py-3 shadow-2xl shadow-black/80"
          : "bg-gradient-to-b from-cinematic-black/90 via-cinematic-black/50 to-transparent py-4 sm:py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Area */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-metallic-gold py-1"
            aria-label="Memory Makers Films - Home"
          >
            <div className="relative h-11 sm:h-14 w-40 sm:w-52 transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src={siteConfig.logoPath}
                alt={siteConfig.name}
                fill
                priority
                className="object-contain object-left"
                style={{ mixBlendMode: "screen" }}
                sizes="(max-width: 640px) 160px, 208px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {mainNavLinks.map((link) => {
              const hasChildren = link.children && link.children.length > 0;
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              if (hasChildren) {
                return (
                  <div
                    key={link.label}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center gap-1.5 px-3.5 py-2 text-xs uppercase tracking-[0.18em] transition-colors duration-200 font-medium",
                        isActive
                          ? "text-metallic-gold"
                          : "text-champagne-ivory/90 hover:text-metallic-gold"
                      )}
                    >
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-metallic-gold/70" />
                    </Link>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 pt-2 w-72 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out z-50">
                      <div className="bg-charcoal-card/98 backdrop-blur-xl border border-metallic-gold/30 p-2 shadow-2xl shadow-black/90">
                        <div className="p-2 border-b border-metallic-gold/15 mb-1">
                          <p className="text-[10px] tracking-[0.2em] uppercase text-metallic-gold font-semibold">
                            {link.label} Portfolio & Coverage
                          </p>
                        </div>
                        <div className="flex flex-col space-y-1">
                          {link.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="px-3 py-2 text-xs text-champagne-ivory/80 hover:text-pure-white hover:bg-dark-charcoal/80 transition-colors flex flex-col group/item"
                            >
                              <span className="font-medium group-hover/item:text-metallic-gold transition-colors flex items-center justify-between">
                                {child.label}
                                <span className="text-[10px] opacity-0 group-hover/item:opacity-100 text-metallic-gold">
                                  →
                                </span>
                              </span>
                              {child.description && (
                                <span className="text-[11px] text-warm-grey/70 mt-0.5 line-clamp-1">
                                  {child.description}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "relative px-3.5 py-2 text-xs uppercase tracking-[0.18em] transition-colors duration-200 font-medium",
                    isActive
                      ? "text-metallic-gold"
                      : "text-champagne-ivory/90 hover:text-metallic-gold"
                  )}
                >
                  {link.label}
                  {link.badge && (
                    <span className="ml-1.5 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider bg-metallic-gold/20 text-metallic-gold border border-metallic-gold/40 rounded-none">
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[1.5px] bg-metallic-gold" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
              className="p-2 text-champagne-ivory/80 hover:text-metallic-gold transition-colors"
              title="Call Studio"
              aria-label="Call Memory Makers Films Studio"
            >
              <Phone className="w-4 h-4" />
            </a>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-champagne-ivory/80 hover:text-[#25D366] transition-colors"
              title="Chat on WhatsApp"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <GoldButton href="/contact" size="sm">
              <Calendar className="w-3.5 h-3.5 mr-2" />
              Book Your Date
            </GoldButton>
          </div>

          {/* Mobile Right Action + Hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-metallic-gold hover:text-champagne-ivory transition-colors"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-champagne-ivory hover:text-metallic-gold focus:outline-none focus:ring-1 focus:ring-metallic-gold"
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Navigation Menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[56px] sm:top-[70px] bg-cinematic-black/98 backdrop-blur-2xl z-40 overflow-y-auto border-t border-metallic-gold/20 animate-in fade-in duration-300 pb-16">
          <div className="max-w-lg mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col space-y-5 sm:space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-metallic-gold/15">
              <p className="text-xs uppercase tracking-[0.25em] text-metallic-gold font-semibold">
                Explore The Studio
              </p>
              <span className="text-[11px] text-warm-grey">
                {siteConfig.shortName}
              </span>
            </div>

            <nav className="flex flex-col space-y-3">
              {mainNavLinks.map((link) => {
                const hasChildren = link.children && link.children.length > 0;
                const isExpanded = activeDropdown === link.label;

                if (hasChildren) {
                  return (
                    <div key={link.label} className="flex flex-col border-b border-dark-charcoal/60 pb-2">
                      <button
                        type="button"
                        onClick={() =>
                          setActiveDropdown(isExpanded ? null : link.label)
                        }
                        className="flex items-center justify-between py-2 text-sm uppercase tracking-[0.2em] font-medium text-champagne-ivory text-left"
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 text-metallic-gold transition-transform",
                            isExpanded ? "rotate-180" : ""
                          )}
                        />
                      </button>

                      {isExpanded && (
                        <div className="pl-3 py-2 flex flex-col space-y-2 border-l border-metallic-gold/30 my-2">
                          {link.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="text-xs text-warm-grey hover:text-metallic-gold py-1.5 transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="py-2 text-sm uppercase tracking-[0.2em] font-medium text-champagne-ivory hover:text-metallic-gold transition-colors border-b border-dark-charcoal/60"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Booking CTA */}
            <div className="pt-4 flex flex-col space-y-3">
              <GoldButton href="/contact" size="lg" className="w-full">
                <Calendar className="w-4 h-4 mr-2" />
                Book Your Date
              </GoldButton>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 flex items-center justify-center gap-2 border border-[#25D366]/40 text-[#25D366] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#25D366]/10 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Direct Chat
              </a>

              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                className="w-full py-3 px-4 flex items-center justify-center gap-2 border border-metallic-gold/30 text-champagne-ivory text-xs uppercase tracking-[0.18em] font-medium hover:bg-dark-charcoal transition-colors"
              >
                <Phone className="w-4 h-4 text-metallic-gold" />
                Call: {siteConfig.contact.phoneDisplay}
              </a>
            </div>

            <div className="pt-6 text-center text-[11px] text-warm-grey/70">
              <p className="font-display italic text-champagne-ivory/90 text-sm mb-1">
                &ldquo;{siteConfig.tagline}&rdquo;
              </p>
              <p>{siteConfig.contact.city}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
