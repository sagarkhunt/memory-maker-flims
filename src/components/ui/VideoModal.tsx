"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  videoUrl: string;
  title?: string;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  videoUrl,
  title = "Cinematic Film Preview",
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Transform standard watch URL to embed URL if needed
  let embedUrl = videoUrl;
  if (videoUrl.includes("watch?v=")) {
    embedUrl = videoUrl.replace("watch?v=", "embed/");
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 lg:p-10 bg-cinematic-black/95 backdrop-blur-xl animate-in fade-in duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="relative w-full max-w-5xl bg-dark-charcoal border border-metallic-gold/30 shadow-2xl shadow-black overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-cinematic-black border-b border-metallic-gold/20">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-metallic-gold" />
            <h3 className="text-[11px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] font-medium text-champagne-ivory truncate max-w-[180px] sm:max-w-md">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 sm:p-1.5 text-champagne-ivory hover:text-metallic-gold transition-colors focus:outline-none focus:ring-1 focus:ring-metallic-gold"
            aria-label="Close Film Player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 16:9 Cinematic Video Container */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={`${embedUrl}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
};
