"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxImage {
  url: string;
  alt: string;
  caption?: string;
}

interface LightboxModalProps {
  isOpen: boolean;
  images: LightboxImage[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
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
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-cinematic-black/98 backdrop-blur-2xl animate-in fade-in duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="High Resolution Image Viewer"
    >
      {/* Top Header Bar */}
      <div
        className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-b from-cinematic-black/95 to-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-xs uppercase tracking-[0.2em] text-metallic-gold font-medium">
          {currentIndex + 1} / {images.length}
        </span>

        <button
          onClick={onClose}
          className="p-1.5 sm:p-2 text-champagne-ivory hover:text-metallic-gold transition-colors focus:outline-none"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Prev Control */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-2 sm:left-6 z-20 p-2 sm:p-3 bg-dark-charcoal/80 border border-metallic-gold/30 text-champagne-ivory hover:text-metallic-gold hover:border-metallic-gold transition-all"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}

      {/* Main Image */}
      <div
        className="relative max-w-6xl max-h-[85vh] w-full h-full p-2 sm:p-4 flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[65vh] sm:h-[75vh]">
          <Image
            src={currentImage.url}
            alt={currentImage.alt}
            fill
            className="object-contain"
            sizes="95vw"
            priority
          />
        </div>

        {/* Caption */}
        {currentImage.caption && (
          <div className="mt-3 sm:mt-4 text-center max-w-2xl px-4">
            <p className="text-xs sm:text-sm text-champagne-ivory/90 font-light font-display italic tracking-wide">
              {currentImage.caption}
            </p>
          </div>
        )}
      </div>

      {/* Next Control */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-2 sm:right-6 z-20 p-2 sm:p-3 bg-dark-charcoal/80 border border-metallic-gold/30 text-champagne-ivory hover:text-metallic-gold hover:border-metallic-gold transition-all"
          aria-label="Next Image"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}
    </div>
  );
};
