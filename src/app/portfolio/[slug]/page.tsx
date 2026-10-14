import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioProjects } from "@/data/portfolio";
import {
  MapPin,
  Calendar,
  Sparkles,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { getProjectWhatsAppUrl } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioProjects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.seo.title,
    description: project.seo.description,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [{ url: project.coverImage }],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const currentIndex = portfolioProjects.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const project = portfolioProjects[currentIndex];

  const prevProject =
    currentIndex > 0
      ? portfolioProjects[currentIndex - 1]
      : portfolioProjects[portfolioProjects.length - 1];

  const nextProject =
    currentIndex < portfolioProjects.length - 1
      ? portfolioProjects[currentIndex + 1]
      : portfolioProjects[0];

  return (
    <div className="flex flex-col w-full bg-cinematic-black">
      {/* Editorial Cover Hero */}
      <section className="relative min-h-[60vh] sm:min-h-[75vh] flex items-end justify-center pb-12 sm:pb-16 pt-28 sm:pt-36 overflow-hidden border-b border-metallic-gold/15">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black via-cinematic-black/60 to-transparent" />
          <div className="absolute inset-0 cinematic-vignette opacity-80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-champagne-ivory hover:text-metallic-gold transition-colors mb-4 sm:mb-6 font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Works</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-metallic-gold/30 bg-cinematic-black/80 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-metallic-gold" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-metallic-gold font-semibold">
              {project.categoryDisplay}
            </span>
          </div>

          <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-pure-white leading-tight mb-4 drop-shadow-lg">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-champagne-ivory/80 font-light mb-6 sm:mb-8">
            {project.location && (
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-metallic-gold" />
                {project.location}
              </span>
            )}
            {project.date && (
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-metallic-gold" />
                {project.date}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Story & Context Section */}
      <section className="py-14 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-5 sm:p-10 lg:p-12 bg-dark-charcoal/70 border border-metallic-gold/30 shadow-2xl space-y-6">
          <h2 className="font-display text-xl sm:text-3xl text-pure-white">
            The Narrative
          </h2>

          <p className="text-xs sm:text-base text-champagne-ivory/90 font-light leading-relaxed">
            {project.story}
          </p>

          {project.cameraDetails && (
            <div className="mt-8 pt-6 border-t border-metallic-gold/20 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {project.cameraDetails.shotOn && (
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-metallic-gold font-mono mb-1">
                    Equipment
                  </p>
                  <p className="text-warm-grey">{project.cameraDetails.shotOn}</p>
                </div>
              )}
              {project.cameraDetails.colorGrade && (
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-metallic-gold font-mono mb-1">
                    Color Chemistry
                  </p>
                  <p className="text-warm-grey">{project.cameraDetails.colorGrade}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Full Gallery Showcase */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-metallic-gold font-semibold block mb-2">
            GALLERY ARCHIVE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-pure-white">
            Frames From This Story
          </h2>
        </div>

        <div className="space-y-8">
          {project.galleryImages.map((image, idx) => (
            <figure
              key={idx}
              className="bg-dark-charcoal/40 border border-metallic-gold/20 overflow-hidden"
            >
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              </div>
              {image.caption && (
                <figcaption className="p-4 bg-cinematic-black/90 border-t border-dark-charcoal text-center text-xs text-warm-grey italic font-display">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </section>

      {/* WhatsApp Enquiry for Similar Wedding */}
      <section className="py-16 bg-dark-charcoal/60 border-y border-metallic-gold/20 text-center">
        <div className="max-w-2xl mx-auto px-4 flex flex-col items-center">
          <h3 className="font-display text-2xl sm:text-3xl text-pure-white mb-3">
            Envisioning Similar Coverage For Your Event?
          </h3>
          <p className="text-xs sm:text-sm text-warm-grey mb-8 font-light">
            Connect directly with us to discuss styling, location logistics, and availability for your upcoming dates.
          </p>
          <a
            href={getProjectWhatsAppUrl(project.title)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center px-6 sm:px-8 py-3.5 bg-metallic-gold text-cinematic-black text-xs font-semibold uppercase tracking-[0.16em] sm:tracking-[0.18em] hover:bg-gold-bright transition-colors shadow-lg"
          >
            Enquire About This Style on WhatsApp →
          </a>
        </div>
      </section>

      {/* Prev / Next Project Navigation Bar */}
      <section className="py-8 sm:py-12 border-b border-dark-charcoal bg-cinematic-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
          <Link
            href={`/portfolio/${prevProject.slug}`}
            className="flex items-center gap-2 sm:gap-3 text-xs uppercase tracking-wider text-warm-grey hover:text-metallic-gold transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 shrink-0" />
            <div className="text-left hidden sm:block">
              <span className="text-[10px] text-warm-grey/60 block">Previous Story</span>
              <span className="font-display text-sm text-pure-white truncate max-w-[160px] md:max-w-[220px] block">{prevProject.title}</span>
            </div>
            <span className="sm:hidden text-[11px]">Prev</span>
          </Link>

          <Link
            href="/portfolio"
            className="text-[11px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] text-metallic-gold hover:underline font-semibold whitespace-nowrap px-2"
          >
            All Projects
          </Link>

          <Link
            href={`/portfolio/${nextProject.slug}`}
            className="flex items-center gap-2 sm:gap-3 text-xs uppercase tracking-wider text-warm-grey hover:text-metallic-gold transition-colors group"
          >
            <span className="sm:hidden text-[11px]">Next</span>
            <div className="text-right hidden sm:block">
              <span className="text-[10px] text-warm-grey/60 block">Next Story</span>
              <span className="font-display text-sm text-pure-white truncate max-w-[160px] md:max-w-[220px] block">{nextProject.title}</span>
            </div>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 shrink-0" />
          </Link>
        </div>
      </section>
    </div>
  );
}
