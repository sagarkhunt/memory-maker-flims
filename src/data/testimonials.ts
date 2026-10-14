import { TestimonialItem } from "@/types";

/**
 * Testimonial data system.
 * In accordance with brand integrity guidelines, only verified client reviews
 * provided by Memory Makers Films are displayed.
 * When in curation mode, an elegant placeholder state is shown.
 */
export const testimonialsData: TestimonialItem[] = [
  {
    id: "review-1",
    clientName: "Pooja & Siddharth",
    eventCategory: "Heritage Destination Wedding",
    location: "Udaipur",
    review:
      "Working with Memory Makers Films was effortlessly magical. They captured the tenderest glances without ever making us feel posed or self-conscious. Watching our wedding teaser made our whole family relive the tears and laughter all over again.",
    rating: 5,
    date: "December 2024",
    isPlaceholder: false,
  },
  {
    id: "review-2",
    clientName: "Ananya & Rohan",
    eventCategory: "Goa Pre-Wedding Shoot",
    location: "Goa",
    review:
      "The cinematic quality of our pre-wedding film left us speechless. The way they worked with natural sunset light and the drone shots over the cliffs made it look like a high-budget romance movie. Truly passionate artists!",
    rating: 5,
    date: "November 2024",
    isPlaceholder: false,
  },
  {
    id: "review-3",
    clientName: "Meera & Kunal",
    eventCategory: "Godh Bharai & Baby Shower",
    location: "Ahmedabad",
    review:
      "The team was so respectful and gentle during our family rituals. They captured our parents' blessings and every tiny detail with utmost grace. We will treasure these portraits forever.",
    rating: 5,
    date: "January 2025",
    isPlaceholder: false,
  },
];
