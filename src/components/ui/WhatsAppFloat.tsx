"use client";

import React, { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/utils";

export const WhatsAppFloat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const presets = [
    {
      label: "💍 Wedding Coverage",
      msg: `Hello ${siteConfig.name}, I would like to check availability and packages for my wedding.`,
    },
    {
      label: "🎬 Pre-Wedding Shoot",
      msg: `Hello ${siteConfig.name}, I want to enquire about a pre-wedding photography and film shoot.`,
    },
    {
      label: "✨ General Enquiry",
      msg: `Hello ${siteConfig.name}, I would like to discuss photography and cinematic film coverage for an upcoming event.`,
    },
  ];

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end max-w-full">
      {/* Quick Inquiry Popover */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] max-w-sm sm:w-88 bg-cinematic-black/95 backdrop-blur-xl border border-metallic-gold/30 p-4 shadow-2xl shadow-black/90 text-champagne-ivory animate-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-metallic-gold/20 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span className="text-xs uppercase tracking-[0.18em] text-metallic-gold font-semibold">
                Studio Concierge (+91 96011 34020)
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-warm-grey hover:text-pure-white transition-colors p-1"
              aria-label="Close WhatsApp Concierge"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-warm-grey mb-3 font-light leading-relaxed">
            Connect directly with {siteConfig.shortName}&apos;s creative directors on
            WhatsApp (+91 96011 34020) for immediate dates and custom bespoke proposals.
          </p>

          <div className="flex flex-col space-y-2 mb-3">
            {presets.map((preset, idx) => (
              <a
                key={idx}
                href={getWhatsAppUrl(preset.msg)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs py-2 px-3 bg-dark-charcoal/80 hover:bg-metallic-gold/15 border border-dark-charcoal hover:border-metallic-gold/40 text-left transition-all text-champagne-ivory flex items-center justify-between group"
              >
                <span>{preset.label}</span>
                <Send className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 text-metallic-gold transition-all" />
              </a>
            ))}
          </div>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-3 bg-[#25D366] text-cinematic-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#20ba59] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Chat on 9601134020 Now
          </a>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 px-4 py-3 bg-[#25D366] text-cinematic-black font-semibold text-xs tracking-wider uppercase shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-metallic-gold"
        aria-label="WhatsApp Studio Concierge"
      >
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-metallic-gold opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-metallic-gold" />
        </span>
        <MessageCircle className="w-5 h-5 fill-cinematic-black" />
        <span className="hidden sm:inline font-bold">Chat On WhatsApp</span>
      </button>
    </div>
  );
};
