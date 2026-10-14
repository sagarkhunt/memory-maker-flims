export interface NavLink {
  label: string;
  href: string;
  badge?: string;
  children?: {
    label: string;
    href: string;
    description?: string;
  }[];
}

export const mainNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story & Philosophy", href: "/about", description: "Who we are and our storytelling ethos" },
      { label: "Our Creative Process", href: "/about/process", description: "How we guide you from discovery to delivery" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Wedding Photography & Films",
        href: "/services/wedding-photography",
        description: "Grand royal weddings & sacred ceremonies",
      },
      {
        label: "Pre-Wedding Romance Shoots",
        href: "/services/pre-wedding",
        description: "Bespoke narrative films in scenic locations",
      },
      {
        label: "Engagement Ceremonies",
        href: "/services/engagement",
        description: "Ring exchanges & evening soirees",
      },
      {
        label: "Baby Shower & Godh Bharai",
        href: "/services/baby-shower",
        description: "Maternal grace and traditional blessings",
      },
      {
        label: "Chhathi Ceremony",
        href: "/services/chhathi-ceremony",
        description: "Sacred sixth-day naming and baby Vidhi",
      },
      {
        label: "Birthday & Family Celebrations",
        href: "/services/birthday-and-family-events",
        description: "Golden jubilees & joyful family reunions",
      },
      {
        label: "Reels & Social Media Films",
        href: "/services/reels-and-short-films",
        description: "High-impact vertical 9:16 cinematography",
      },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Films", href: "/films", badge: "4K Cinema" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];
