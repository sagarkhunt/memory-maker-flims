"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PortfolioProject, PortfolioCategory } from "@/types";
import { LightboxModal } from "@/components/ui/LightboxModal";
import { VideoModal } from "@/components/ui/VideoModal";
import {
  Play,
  Maximize2,
  MapPin,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface PortfolioGridProps {
  projects: PortfolioProject[];
  initialCategory?: PortfolioCategory;
  limit?: number;
  showFilters?: boolean;
}

const filterTabs: { label: string; value: PortfolioCategory }[] = [
  { label: "All Works", value: "all" },
  { label: "Weddings", value: "weddings" },
  { label: "Pre-Wedding", value: "pre-wedding" },
  { label: "Engagement", value: "engagement" },
  { label: "Baby & Family", value: "baby-family" },
  { label: "Events", value: "events" },
  { label: "Reels & Films", value: "reels-films" },
];

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({
  projects,
  initialCategory = "all",
  limit,
  showFilters = true,
}) => {
  const [activeCategory, setActiveCategory] =
    useState<PortfolioCategory>(initialCategory);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<
    { url: string; alt: string; caption?: string }[]
  >([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Video modal state
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string>("");
  const [activeVideoTitle, setActiveVideoTitle] = useState<string>("");

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "all") return true;
    return project.category === activeCategory;
  });

  const displayedProjects = limit
    ? filteredProjects.slice(0, limit)
    : filteredProjects;

  const openLightboxForProject = (project: PortfolioProject) => {
    const images = [
      {
        url: project.coverImage,
        alt: project.title,
        caption: project.summary,
      },
      ...project.galleryImages.map((g) => ({
        url: g.url,
        alt: g.alt,
        caption: g.caption,
      })),
    ];
    setLightboxImages(images);
    setLightboxIndex(0);
    setLightboxOpen(true);
  };

  const openVideo = (videoUrl: string, title: string) => {
    setActiveVideoUrl(videoUrl);
    setActiveVideoTitle(title);
    setVideoModalOpen(true);
  };

  return (
    <div className="w-full">
      {/* Filter Tabs */}
      {showFilters && (
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto sm:flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-14 pb-2 sm:pb-0 px-2 sm:px-0 -mx-4 sm:mx-0 max-w-full no-scrollbar">
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveCategory(tab.value)}
                className={cn(
                  "px-3.5 sm:px-5 py-1.5 sm:py-2 text-[11px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.18em] transition-all duration-300 font-medium border shrink-0 whitespace-nowrap",
                  isActive
                    ? "bg-metallic-gold text-cinematic-black border-metallic-gold font-semibold shadow-md shadow-metallic-gold/20"
                    : "bg-dark-charcoal/50 text-champagne-ivory/80 border-metallic-gold/20 hover:border-metallic-gold/60 hover:text-champagne-ivory"
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Grid of Projects */}
      {displayedProjects.length === 0 ? (
        <div className="text-center py-20 px-4 bg-dark-charcoal/40 border border-metallic-gold/20">
          <p className="font-display text-2xl text-champagne-ivory mb-2">
            No projects in this category yet.
          </p>
          <p className="text-xs text-warm-grey">
            Check back soon or explore our other collections.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedProjects.map((project) => {
            return (
              <article
                key={project.id}
                className="group relative bg-dark-charcoal border border-metallic-gold/20 overflow-hidden flex flex-col transition-all duration-500 hover:border-metallic-gold/60 hover:shadow-2xl hover:shadow-black"
              >
                {/* Image Cover Container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-cinematic-black">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Gradient Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black via-cinematic-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between z-10">
                    <span className="px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] font-semibold bg-cinematic-black/80 text-metallic-gold border border-metallic-gold/40 backdrop-blur-md">
                      {project.categoryDisplay}
                    </span>

                    <div className="flex items-center gap-1.5">
                      {project.videoUrl && (
                        <button
                          onClick={() =>
                            openVideo(project.videoUrl!, project.title)
                          }
                          className="w-8 h-8 flex items-center justify-center bg-metallic-gold text-cinematic-black hover:bg-gold-bright transition-colors shadow-lg"
                          title="Watch Film"
                          aria-label={`Watch ${project.title} film`}
                        >
                          <Play className="w-3.5 h-3.5 fill-cinematic-black" />
                        </button>
                      )}

                      <button
                        onClick={() => openLightboxForProject(project)}
                        className="w-8 h-8 flex items-center justify-center bg-cinematic-black/80 border border-metallic-gold/30 text-champagne-ivory hover:text-metallic-gold transition-colors backdrop-blur-md"
                        title="View Fullscreen"
                        aria-label={`Open fullscreen view for ${project.title}`}
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Hover Meta Slide-up */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-10 flex flex-col space-y-1.5 sm:space-y-2">
                    <div className="flex items-center gap-4 text-[11px] text-metallic-gold/90 font-light">
                      {project.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-metallic-gold" />
                          {project.location}
                        </span>
                      )}
                      {project.date && (
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-metallic-gold" />
                          {project.date}
                        </span>
                      )}
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl text-pure-white group-hover:text-champagne-ivory transition-colors leading-snug">
                      <Link href={`/portfolio/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>

                    <p className="text-xs text-warm-grey line-clamp-2 font-light leading-relaxed">
                      {project.summary}
                    </p>

                    <div className="pt-2">
                      <Link
                        href={`/portfolio/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-metallic-gold hover:text-champagne-ivory transition-colors group/link font-medium"
                      >
                        <span>View Project Story</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={() =>
          setLightboxIndex((prev) => (prev + 1) % lightboxImages.length)
        }
        onPrev={() =>
          setLightboxIndex(
            (prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length
          )
        }
      />

      {/* Video Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        videoUrl={activeVideoUrl}
        title={activeVideoTitle}
        onClose={() => setVideoModalOpen(false)}
      />
    </div>
  );
};
