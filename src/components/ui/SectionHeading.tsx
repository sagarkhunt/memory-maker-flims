import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  lightHeading?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  lightHeading = false,
}) => {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div
      className={cn(
        "flex flex-col max-w-3xl mb-10 sm:mb-14 md:mb-16 w-full",
        alignmentClasses[align],
        className
      )}
    >
      {eyebrow && (
        <div className="flex items-center gap-2 sm:gap-3 mb-2.5 sm:mb-3">
          <span className="h-px w-4 sm:w-6 bg-metallic-gold/60 inline-block" />
          <span className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase font-semibold text-metallic-gold">
            {eyebrow}
          </span>
          <span className="h-px w-4 sm:w-6 bg-metallic-gold/60 inline-block" />
        </div>
      )}

      <h2
        className={cn(
          "font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight mb-3 sm:mb-4 break-words",
          lightHeading ? "text-pure-white" : "gold-gradient-text"
        )}
      >
        {title}
      </h2>

      {description && (
        <p className="text-warm-grey text-xs sm:text-base lg:text-lg font-light leading-relaxed max-w-2xl">
          {description}
        </p>
      )}

      {/* Refined subtle gold hairline flourish */}
      <div className="mt-5 flex items-center gap-1.5 opacity-60">
        <span className="w-1.5 h-1.5 rounded-full bg-metallic-gold/70" />
        <span className="w-12 h-px bg-gradient-to-r from-metallic-gold to-transparent" />
      </div>
    </div>
  );
};
