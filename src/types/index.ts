export type ServiceCategory =
  | "wedding"
  | "pre-wedding"
  | "engagement"
  | "baby-shower"
  | "chhathi"
  | "birthdays-family"
  | "reels-films"
  | "events"
  | "portraits";

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  coverImage: string;
  category: ServiceCategory;
  features: string[];
  deliverables: string[];
  options: {
    title: string;
    description: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
}

export type PortfolioCategory =
  | "all"
  | "weddings"
  | "pre-wedding"
  | "engagement"
  | "baby-family"
  | "events"
  | "reels-films";

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  category: PortfolioCategory;
  categoryDisplay: string;
  location?: string;
  date?: string;
  coverImage: string;
  galleryImages: {
    url: string;
    alt: string;
    aspectRatio?: "landscape" | "portrait" | "square" | "panoramic";
    caption?: string;
  }[];
  videoUrl?: string;
  videoDuration?: string;
  summary: string;
  story: string;
  cameraDetails?: {
    shotOn?: string;
    colorGrade?: string;
    musicVibe?: string;
  };
  seo: {
    title: string;
    description: string;
  };
}

export interface FilmItem {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl: string; // YouTube, Vimeo, or MP4
  duration: string;
  description: string;
  featured?: boolean;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  eventCategory: string;
  location?: string;
  review: string;
  rating?: number;
  avatarUrl?: string;
  date?: string;
  isPlaceholder?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email?: string;
  eventType: string;
  eventDate?: string;
  eventLocation?: string;
  preferredService?: string;
  message: string;
}
