import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface GoldButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  target?: string;
  rel?: string;
}

export const GoldButton: React.FC<GoldButtonProps> = ({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  disabled = false,
  target,
  rel,
}) => {
  const sizeClasses = {
    sm: "px-3.5 sm:px-4 py-2 text-xs tracking-[0.14em] sm:tracking-[0.15em]",
    md: "px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.18em]",
    lg: "px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm tracking-[0.16em] sm:tracking-[0.2em]",
  };

  const variantClasses = {
    primary:
      "gold-button-gradient text-cinematic-black font-semibold shadow-lg hover:shadow-metallic-gold/25",
    outline:
      "bg-transparent border border-metallic-gold/50 text-champagne-ivory hover:border-metallic-gold hover:bg-metallic-gold/10 hover:text-pure-white",
    ghost:
      "bg-transparent text-champagne-ivory hover:text-metallic-gold hover:bg-dark-charcoal/50",
  };

  const baseClasses = cn(
    "inline-flex items-center justify-center uppercase font-medium rounded-none transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-metallic-gold active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none group",
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
