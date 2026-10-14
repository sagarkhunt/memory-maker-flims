import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { portfolioProjects } from "@/data/portfolio";
import { GoldButton } from "@/components/ui/GoldButton";

export const FeaturedPortfolio: React.FC = () => {
  return (
    <section id="featured-work" className="py-16 sm:py-24 lg:py-32 bg-cinematic-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="SELECTED WORK"
          title="Stories We've Captured."
          description="Each photograph is a testament to genuine love, sacred traditions, and unrepeatable memories preserved with artistic integrity."
        />

        {/* Portfolio Grid with category filters and limit */}
        <PortfolioGrid projects={portfolioProjects} limit={6} showFilters={true} />

        {/* View All Projects Button */}
        <div className="mt-12 sm:mt-16 text-center">
          <GoldButton href="/portfolio" size="lg" className="w-full sm:w-auto justify-center">
            VIEW ALL PROJECTS ({portfolioProjects.length})
          </GoldButton>
        </div>
      </div>
    </section>
  );
};
