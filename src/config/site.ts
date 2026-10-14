export const siteConfig = {
  name: "MEMORY MAKERS FILMS",
  shortName: "Memory Makers",
  tagline: "Capturing Moments. Creating Memories.",
  description:
    "Luxury wedding photography, cinematic videography, pre-wedding films, baby shower, and celebration storytelling. Based in India, available worldwide.",
  url: "https://memorymakersfilms.com",
  logoPath: "/logos/logo.png",
  ogImage: "/logos/logo.png",
  heroVideo: {
    // Local video path (place your MP4 in public/films/hero-banner.mp4)
    localPath: "/films/hero-banner.mp4",
    // Fallback high-definition online cinematic wedding reel
    onlineUrl: "https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-holding-hands-43187-large.mp4",
    // High-resolution poster image shown instantly while buffering or if video is unsupported
    poster: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2400&q=90",
    // Interactive 4K cinema trailer opened via "Watch Showreel" button
    showreelUrl: "https://www.youtube.com/embed/LXb3EKWsInQ",
    showreelTitle: "Memory Makers Films — 4K Signature Wedding Trailer",
  },
  contact: {
    // Configurable studio contact details (Placeholders clearly identified until studio provides official contacts)
    phone: "+91 96011 34020",
    phoneDisplay: "+91 96011 34020",
    whatsappNumber: "919601134020", // 9601134020 with India country code 91
    email: "enquiry@memorymakersfilms.com",
    address: "Studio 402, Signature Art Tower, Creative Hub (Studio Address Configurable)",
    city: "Mumbai / Ahmedabad / Surat",
    country: "India",
    businessHours: "Monday – Saturday: 10:00 AM – 8:00 PM (IST)",
    googleMapsUrl: "https://maps.google.com",
  },
  socials: {
    instagram: "https://instagram.com/memorymakersfilms",
    facebook: "https://facebook.com/memorymakersfilms",
    youtube: "https://youtube.com/@memorymakersfilms",
    pinterest: "https://pinterest.com/memorymakersfilms",
  },
  seo: {
    defaultKeywords: [
      "Wedding Photographer",
      "Wedding Photography and Videography",
      "Cinematic Wedding Films",
      "Pre-Wedding Photography",
      "Engagement Photography",
      "Baby Shower Photography",
      "Chhathi Ceremony Photography",
      "Event Photography",
      "Wedding Reels",
      "Luxury Photography Studio",
      "Memory Makers Films",
    ],
  },
};

export type SiteConfig = typeof siteConfig;
