"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  ContactFormValues,
  eventTypesList,
} from "@/lib/validation/contact";
import { GoldButton } from "@/components/ui/GoldButton";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";
import { siteConfig } from "@/config/site";

interface ContactFormProps {
  initialEventType?: string;
  initialService?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialEventType,
  initialService,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [lastSubmittedValues, setLastSubmittedValues] = useState<ContactFormValues | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      eventType: initialEventType || "",
      eventDate: "",
      eventLocation: "",
      preferredService: initialService || "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit enquiry");
      }

      setSubmitSuccess(result.message);
      setLastSubmittedValues(values);
      reset();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setSubmitError(err.message);
      } else {
        setSubmitError("Failed to send message. Please try again or WhatsApp us directly at +91 96011 34020.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendViaWhatsApp = () => {
    const current = watch();
    const name = current.fullName.trim() || "Guest";
    const phone = current.phone.trim() || "";
    const type = current.eventType || "Celebration / Wedding";
    const date = current.eventDate ? `Date: ${current.eventDate}` : "";
    const loc = current.eventLocation ? `City/Venue: ${current.eventLocation}` : "";
    const msg = current.message ? `Notes: ${current.message}` : "";

    const fullMsg = `Hello ${siteConfig.name},\n\nI would like to enquire about photography and videography coverage.\n• Name: ${name}\n• Phone: ${phone}\n• Event Type: ${type}${date ? `\n• ${date}` : ""}${loc ? `\n• ${loc}` : ""}${msg ? `\n• ${msg}` : ""}\n\nPlease let me know your availability and tailored packages. Thank you!`;

    window.open(getWhatsAppUrl(fullMsg), "_blank");
  };

  return (
    <div className="w-full bg-dark-charcoal/90 border border-metallic-gold/30 p-5 sm:p-10 lg:p-12 shadow-2xl relative">
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="w-4 h-4 text-metallic-gold" />
        <span className="text-[11px] uppercase tracking-[0.25em] text-metallic-gold font-semibold">
          Check Studio Availability
        </span>
      </div>

      <h3 className="font-display text-2xl sm:text-3xl text-pure-white mb-2">
        Reserve Your Celebration
      </h3>
      <p className="text-xs sm:text-sm text-warm-grey font-light mb-8 max-w-lg">
        Tell us about your story and vision. We will review our schedule and provide a bespoke coverage itinerary within 24 hours. You can also chat with us directly on WhatsApp at{" "}
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#25D366] font-semibold hover:underline"
        >
          {siteConfig.contact.phoneDisplay}
        </a>
        .
      </p>

      {/* Success Notification */}
      {submitSuccess && (
        <div className="mb-8 p-5 bg-emerald-950/60 border border-emerald-500/50 text-emerald-100 flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <p className="font-semibold text-emerald-300 mb-1">
                Enquiry Submitted Successfully!
              </p>
              <p className="leading-relaxed">{submitSuccess}</p>
            </div>
          </div>

          {lastSubmittedValues && (
            <div className="pt-2 border-t border-emerald-500/30 flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs text-emerald-300">
                Want immediate instant confirmation?
              </span>
              <a
                href={getWhatsAppUrl(
                  `Hello ${siteConfig.name}, I just submitted an enquiry on your website for ${lastSubmittedValues.eventType} (${lastSubmittedValues.fullName}). Could you please confirm availability?`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#25D366] text-cinematic-black text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 hover:bg-[#20ba59] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Notify on WhatsApp (+91 96011 34020) →
              </a>
            </div>
          )}
        </div>
      )}

      {/* Error Notification */}
      {submitError && (
        <div className="mb-8 p-5 bg-rose-950/60 border border-rose-500/50 text-rose-100 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm">
            <p className="font-semibold text-rose-300 mb-1">Submission Notice</p>
            <p className="leading-relaxed">{submitError}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Anti-spam honeypot */}
        <input
          type="text"
          name="website_trap"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs uppercase tracking-[0.15em] text-champagne-ivory mb-2 font-medium"
            >
              Full Name <span className="text-metallic-gold">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="e.g. Aarav Sharma"
              {...register("fullName")}
              className="w-full px-4 py-3 bg-cinematic-black border border-dark-charcoal/80 text-champagne-ivory placeholder-warm-grey/40 text-sm focus:border-metallic-gold focus:outline-none focus:ring-1 focus:ring-metallic-gold transition-colors"
            />
            {errors.fullName && (
              <p className="text-rose-400 text-xs mt-1.5">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phone"
              className="block text-xs uppercase tracking-[0.15em] text-champagne-ivory mb-2 font-medium"
            >
              Phone Number <span className="text-metallic-gold">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+91 96011 34020"
              {...register("phone")}
              className="w-full px-4 py-3 bg-cinematic-black border border-dark-charcoal/80 text-champagne-ivory placeholder-warm-grey/40 text-sm focus:border-metallic-gold focus:outline-none focus:ring-1 focus:ring-metallic-gold transition-colors"
            />
            {errors.phone && (
              <p className="text-rose-400 text-xs mt-1.5">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Email Address */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs uppercase tracking-[0.15em] text-champagne-ivory mb-2 font-medium"
            >
              Email Address <span className="text-warm-grey/60 font-normal">(Optional)</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="name@example.com"
              {...register("email")}
              className="w-full px-4 py-3 bg-cinematic-black border border-dark-charcoal/80 text-champagne-ivory placeholder-warm-grey/40 text-sm focus:border-metallic-gold focus:outline-none focus:ring-1 focus:ring-metallic-gold transition-colors"
            />
            {errors.email && (
              <p className="text-rose-400 text-xs mt-1.5">{errors.email.message}</p>
            )}
          </div>

          {/* Event Type */}
          <div>
            <label
              htmlFor="eventType"
              className="block text-xs uppercase tracking-[0.15em] text-champagne-ivory mb-2 font-medium"
            >
              Event Type <span className="text-metallic-gold">*</span>
            </label>
            <select
              id="eventType"
              {...register("eventType")}
              className="w-full px-4 py-3 bg-cinematic-black border border-dark-charcoal/80 text-champagne-ivory text-sm focus:border-metallic-gold focus:outline-none focus:ring-1 focus:ring-metallic-gold transition-colors"
            >
              <option value="">Select celebration type...</option>
              {eventTypesList.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.eventType && (
              <p className="text-rose-400 text-xs mt-1.5">
                {errors.eventType.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Event Date */}
          <div>
            <label
              htmlFor="eventDate"
              className="block text-xs uppercase tracking-[0.15em] text-champagne-ivory mb-2 font-medium"
            >
              Event Date <span className="text-warm-grey/60 font-normal">(Tentative / Confirmed)</span>
            </label>
            <input
              id="eventDate"
              type="date"
              {...register("eventDate")}
              className="w-full px-4 py-3 bg-cinematic-black border border-dark-charcoal/80 text-champagne-ivory text-sm focus:border-metallic-gold focus:outline-none focus:ring-1 focus:ring-metallic-gold transition-colors"
            />
          </div>

          {/* Event Location */}
          <div>
            <label
              htmlFor="eventLocation"
              className="block text-xs uppercase tracking-[0.15em] text-champagne-ivory mb-2 font-medium"
            >
              Event City / Venue <span className="text-warm-grey/60 font-normal">(Optional)</span>
            </label>
            <input
              id="eventLocation"
              type="text"
              placeholder="e.g. Udaipur / Mumbai / Goa / Surat"
              {...register("eventLocation")}
              className="w-full px-4 py-3 bg-cinematic-black border border-dark-charcoal/80 text-champagne-ivory placeholder-warm-grey/40 text-sm focus:border-metallic-gold focus:outline-none focus:ring-1 focus:ring-metallic-gold transition-colors"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs uppercase tracking-[0.15em] text-champagne-ivory mb-2 font-medium"
          >
            Tell Us About Your Celebration <span className="text-metallic-gold">*</span>
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Share details such as ceremonies planned, expected guest count, specific visual preferences, or questions..."
            {...register("message")}
            className="w-full px-4 py-3 bg-cinematic-black border border-dark-charcoal/80 text-champagne-ivory placeholder-warm-grey/40 text-sm focus:border-metallic-gold focus:outline-none focus:ring-1 focus:ring-metallic-gold transition-colors resize-y"
          />
          {errors.message && (
            <p className="text-rose-400 text-xs mt-1.5">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Action Buttons: Submit Form & Direct WhatsApp Invitation Send */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <GoldButton
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full sm:w-auto min-w-[160px] sm:min-w-[200px]"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting Enquiry...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Submit Enquiry
                </>
              )}
            </GoldButton>

            <button
              type="button"
              onClick={handleSendViaWhatsApp}
              className="w-full sm:w-auto px-4 sm:px-6 py-3.5 sm:py-4 bg-[#25D366] text-cinematic-black text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-[0.18em] font-bold flex items-center justify-center gap-2 hover:bg-[#20ba59] transition-all shadow-md active:scale-95 text-center"
            >
              <MessageCircle className="w-4 h-4 fill-cinematic-black shrink-0" />
              <span>Send to WhatsApp</span>
              <span className="hidden lg:inline">(+91 96011 34020)</span>
            </button>
          </div>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-[0.18em] text-[#25D366] hover:text-[#20ba59] flex items-center gap-1.5 transition-colors py-2 text-center"
          >
            <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Quick Chat on 9601134020 →
          </a>
        </div>
      </form>
    </div>
  );
};
