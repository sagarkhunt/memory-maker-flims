import { z } from "zod";

export const eventTypesList = [
  "Wedding",
  "Pre-Wedding",
  "Engagement",
  "Baby Shower",
  "Chhathi Ceremony",
  "Birthday",
  "Family Function",
  "Event Photography",
  "Cinematic Film",
  "Reels / Short Video",
  "Other",
] as const;

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: "Please enter your full name (at least 2 characters)" })
    .max(100, { message: "Name is too long" }),
  phone: z
    .string()
    .trim()
    .min(10, { message: "Please enter a valid phone number (at least 10 digits)" })
    .regex(/^[0-9+\s\-()]+$/, { message: "Please enter a valid phone format" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please provide a valid email address" })
    .optional()
    .or(z.literal("")),
  eventType: z
    .string()
    .min(1, { message: "Please select an event type" }),
  eventDate: z.string().optional().or(z.literal("")),
  eventLocation: z.string().trim().optional().or(z.literal("")),
  preferredService: z.string().optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, { message: "Please tell us a little bit about your event (at least 10 characters)" })
    .max(2000, { message: "Message cannot exceed 2000 characters" }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
