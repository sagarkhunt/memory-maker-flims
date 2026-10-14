import { siteConfig } from "@/config/site";

export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Generates an international WhatsApp link with prefilled enquiry text
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const defaultText = `Hello ${siteConfig.name}, I would like to enquire about photography and videography for my upcoming event.`;
  const message = customMessage || defaultText;
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encoded}`;
}

/**
 * Generates WhatsApp URL tailored for a specific project
 */
export function getProjectWhatsAppUrl(projectTitle: string): string {
  const text = `Hello ${siteConfig.name}, I loved your project "${projectTitle}" in your portfolio! I would love to enquire about similar photography and film coverage for my event.`;
  return getWhatsAppUrl(text);
}

/**
 * Generates WhatsApp URL tailored for a specific service
 */
export function getServiceWhatsAppUrl(serviceTitle: string): string {
  const text = `Hello ${siteConfig.name}, I am interested in booking your "${serviceTitle}" service. Could you please share availability and coverage details?`;
  return getWhatsAppUrl(text);
}
