import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { BrandIntro } from "@/components/home/BrandIntro";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FeaturedPortfolio } from "@/components/home/FeaturedPortfolio";
import { CinematicFilmsSection } from "@/components/home/CinematicFilmsSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ProcessSection } from "@/components/home/ProcessSection";
import { SpotlightProject } from "@/components/home/SpotlightProject";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { InstagramSection } from "@/components/home/InstagramSection";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* SECTION A: CINEMATIC HERO */}
      <HeroSection />

      {/* SECTION B: BRAND INTRODUCTION */}
      <BrandIntro />

      {/* SECTION C: SERVICES OVERVIEW */}
      <ServicesSection />

      {/* SECTION D: FEATURED PORTFOLIO */}
      <FeaturedPortfolio />

      {/* SECTION E: CINEMATIC FILMS */}
      <CinematicFilmsSection />

      {/* SECTION F: WHY CHOOSE US */}
      <WhyChooseUs />

      {/* SECTION G: OUR PHOTOGRAPHY PROCESS */}
      <ProcessSection />

      {/* SECTION H: PORTFOLIO SPOTLIGHT */}
      <SpotlightProject />

      {/* SECTION I: TESTIMONIALS */}
      <TestimonialsSection />

      {/* SECTION J: INSTAGRAM AND REELS */}
      <InstagramSection />

      {/* SECTION K: FAQ */}
      <FaqSection />

      {/* SECTION L: FINAL CALL TO ACTION */}
      <FinalCta />
    </div>
  );
}
