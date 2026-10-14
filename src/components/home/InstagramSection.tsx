import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Play, ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/ui/SocialIcons";

export const InstagramSection: React.FC = () => {
  const posts = [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      caption: "Golden hour pheras under royal chandeliers. #WeddingCinema",
      isVideo: false,
    },
    {
      id: "2",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
      caption: "Goa sunset moments along Cabo de Rama cliffs. #PreWeddingFilm",
      isVideo: true,
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80",
      caption: "The moment rings were exchanged in the palace ballroom. #Engagement",
      isVideo: false,
    },
    {
      id: "4",
      image: "https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=800&q=80",
      caption: "Maternal radiance and floral Godh Bharai blessings. #BabyShower",
      isVideo: false,
    },
    {
      id: "5",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
      caption: "Behind the lens: 4K vertical cinema rigs at high-energy Baraat. #BTS",
      isVideo: true,
    },
    {
      id: "6",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
      caption: "The heirloom vows. Captured for generations to come. #MemoryMakers",
      isVideo: false,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-cinematic-black relative border-t border-dark-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-px bg-metallic-gold" />
              <span className="text-xs uppercase tracking-[0.25em] text-metallic-gold font-semibold">
                SOCIAL JOURNAL
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-pure-white">
              Follow Our Stories.
            </h2>
            <p className="text-xs sm:text-sm text-warm-grey mt-2 font-light">
              Discover our latest celebrations, behind-the-scenes moments and cinematic reels.
            </p>
          </div>

          <a
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-metallic-gold/40 text-metallic-gold text-xs uppercase tracking-[0.18em] font-medium hover:bg-metallic-gold hover:text-cinematic-black transition-colors w-fit"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>@memorymakersfilms</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 6-Column Responsive Reel Grid: 2 cols on mobile, 3 on tablet, 6 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {posts.map((post) => (
            <a
              key={post.id}
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[4/5] overflow-hidden bg-dark-charcoal border border-metallic-gold/20"
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />

              <div className="absolute inset-0 bg-cinematic-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4">
                <div className="flex justify-end">
                  {post.isVideo ? (
                    <Play className="w-4 h-4 text-metallic-gold fill-metallic-gold" />
                  ) : (
                    <InstagramIcon className="w-4 h-4 text-metallic-gold" />
                  )}
                </div>
                <p className="text-[11px] text-champagne-ivory line-clamp-3 leading-snug">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
