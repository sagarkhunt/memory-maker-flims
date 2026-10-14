import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allServicesCatalog } from "@/data/services";
import { portfolioProjects } from "@/data/portfolio";
import { GoldButton } from "@/components/ui/GoldButton";
import { ContactForm } from "@/components/forms/ContactForm";
import {
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  Package,
} from "lucide-react";
import { getServiceWhatsAppUrl } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allServicesCatalog.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = allServicesCatalog.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} — Memory Makers Films`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = allServicesCatalog.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Related services
  const relatedServices = allServicesCatalog
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  // Relevant portfolio samples
  const relevantPortfolio = portfolioProjects.filter(
    (p) =>
      p.category === service.category ||
      (service.category === "wedding" && p.category === "weddings")
  );

  return (
    <div className="flex flex-col w-full bg-cinematic-black">
      {/* Hero Header */}
      <section className="relative min-h-[55vh] sm:min-h-[60vh] flex items-center justify-center pt-28 sm:pt-36 pb-14 sm:pb-20 overflow-hidden border-b border-metallic-gold/15">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.heroImage || service.coverImage}
            alt={service.title}
            fill
            priority
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black via-cinematic-black/80 to-cinematic-black/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-metallic-gold/30 bg-dark-charcoal/70">
            <Sparkles className="w-3.5 h-3.5 text-metallic-gold" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-metallic-gold font-semibold">
              SERVICE SPOTLIGHT
            </span>
          </div>

          <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-pure-white leading-tight mb-4 sm:mb-6">
            {service.title}
          </h1>

          <p className="text-xs sm:text-base lg:text-lg text-champagne-ivory/90 font-light max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8">
            {service.fullDescription}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <GoldButton href="#enquiry-form" size="md" className="w-full sm:w-auto text-center justify-center">
              <Calendar className="w-4 h-4 mr-2" />
              BOOK THIS COVERAGE
            </GoldButton>

            <a
              href={getServiceWhatsAppUrl(service.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 border border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366]/10 transition-colors text-xs uppercase tracking-wider font-semibold text-center flex items-center justify-center"
            >
              WhatsApp Availability
            </a>
          </div>
        </div>
      </section>

      {/* What's Included & Features */}
      <section className="py-20 sm:py-28 bg-dark-charcoal/40 border-b border-metallic-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Features list */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-6 h-px bg-metallic-gold" />
                <span className="text-xs uppercase tracking-[0.2em] text-metallic-gold font-semibold">
                  COVERAGE SPECIFICATIONS
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl text-pure-white">
                What Is Included in Your Experience
              </h2>

              <p className="text-xs sm:text-sm text-warm-grey font-light leading-relaxed">
                We believe in complete transparency. Every commission is executed with high-end cinema equipment, dedicated specialists, and meticulous post-production.
              </p>

              <div className="space-y-4 pt-2">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 bg-cinematic-black border border-metallic-gold/20"
                  >
                    <CheckCircle2 className="w-4 h-4 text-metallic-gold shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-champagne-ivory/90 leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables Suite */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-6 h-px bg-metallic-gold" />
                <span className="text-xs uppercase tracking-[0.2em] text-metallic-gold font-semibold">
                  HEIRLOOM DELIVERABLES
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl text-pure-white">
                Tangible Memories You Receive
              </h2>

              <p className="text-xs sm:text-sm text-warm-grey font-light leading-relaxed">
                From fast-turnaround digital teasers to archival photo books, here is what your family will cherish for generations.
              </p>

              <div className="space-y-4 pt-2">
                {service.deliverables.map((deliv, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 bg-cinematic-black border border-metallic-gold/20"
                  >
                    <Package className="w-4 h-4 text-metallic-gold shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-champagne-ivory/90 leading-snug">
                      {deliv}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Options / Packages if available */}
          {service.options && service.options.length > 0 && (
            <div className="mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-dark-charcoal">
              <h3 className="font-display text-2xl sm:text-3xl text-pure-white text-center mb-6 sm:mb-8">
                Tailored Coverage Configurations
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
                {service.options.map((opt, i) => (
                  <div
                    key={i}
                    className="p-5 sm:p-8 bg-cinematic-black border border-metallic-gold/30 hover:border-metallic-gold/60 transition-colors"
                  >
                    <span className="text-[11px] sm:text-xs font-mono uppercase text-metallic-gold font-bold mb-2 block">
                      Configuration 0{i + 1}
                    </span>
                    <h4 className="font-display text-lg sm:text-2xl text-pure-white mb-2">
                      {opt.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-warm-grey font-light leading-relaxed">
                      {opt.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Relevant Portfolio Examples if available */}
      {relevantPortfolio.length > 0 && (
        <section className="py-20 sm:py-28 bg-cinematic-black border-b border-metallic-gold/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-metallic-gold font-semibold block mb-2">
                  PORTFOLIO EVIDENCE
                </span>
                <h2 className="font-display text-3xl sm:text-4xl text-pure-white">
                  Recent Work in this Category
                </h2>
              </div>
              <Link
                href="/portfolio"
                className="text-xs uppercase tracking-[0.18em] text-metallic-gold hover:text-champagne-ivory inline-flex items-center gap-1.5"
              >
                <span>All Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relevantPortfolio.slice(0, 3).map((proj) => (
                <Link
                  key={proj.id}
                  href={`/portfolio/${proj.slug}`}
                  className="group relative bg-dark-charcoal border border-metallic-gold/20 overflow-hidden flex flex-col"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src={proj.coverImage}
                      alt={proj.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black via-transparent to-transparent opacity-80" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg text-pure-white group-hover:text-metallic-gold transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-warm-grey mt-1 line-clamp-2">
                      {proj.summary}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service-Specific FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-16 sm:py-20 bg-dark-charcoal/50 border-b border-metallic-gold/15">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl sm:text-3xl text-pure-white text-center mb-6 sm:mb-8">
              Frequently Asked Questions About {service.title}
            </h2>
            <div className="space-y-4">
              {service.faqs.map((f, i) => (
                <div
                  key={i}
                  className="p-4 sm:p-6 bg-cinematic-black border border-metallic-gold/20 space-y-2"
                >
                  <h3 className="font-display text-base sm:text-lg text-champagne-ivory">
                    {f.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-warm-grey leading-relaxed">
                    {f.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Booking Form Integration */}
      <section id="enquiry-form" className="py-20 sm:py-28 bg-cinematic-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            initialEventType={service.title}
            initialService={service.title}
          />
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-dark-charcoal border-t border-metallic-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-metallic-gold mb-6 font-semibold">
            Explore Other Studio Services
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                href={`/services/${rel.slug}`}
                className="p-5 bg-cinematic-black border border-metallic-gold/20 hover:border-metallic-gold/60 transition-colors group"
              >
                <h4 className="font-display text-lg text-pure-white group-hover:text-metallic-gold transition-colors">
                  {rel.title}
                </h4>
                <p className="text-xs text-warm-grey line-clamp-2 mt-1">
                  {rel.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
