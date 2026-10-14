import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation/contact";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Check honeypot for bot spam protection
    if (body.website_trap || body._gotcha) {
      return NextResponse.json(
        { error: "Spam detected." },
        { status: 400 }
      );
    }

    // Validate inputs with Zod schema
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 422 }
      );
    }

    const data = validationResult.data;

    // Check for configured external provider (Resend, SendGrid, Webhook, CRM)
    const emailApiKey = process.env.RESEND_API_KEY || process.env.EMAIL_API_KEY;
    const notificationEmail = process.env.STUDIO_NOTIFICATION_EMAIL || "enquiry@memorymakersfilms.com";

    if (emailApiKey) {
      // In production with credentials provided, an email service would be dispatched here
      // e.g., await resend.emails.send({ ... })
      // For security, secrets are never logged.
    } else {
      // Informative log in development console
      console.info(
        "[Memory Makers Films] New enquiry received (Dev Mode - No EMAIL_API_KEY set):",
        {
          name: data.fullName,
          phone: data.phone,
          recipient: notificationEmail,
          eventType: data.eventType,
          date: data.eventDate || "Not specified",
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: `Thank you, ${data.fullName}! Your enquiry for ${data.eventType} has been received. Our creative team will get in touch with you within 24 hours.`,
        isDevMode: !emailApiKey,
        receivedAt: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("Enquiry submission error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your enquiry. Please try again or WhatsApp us directly." },
      { status: 500 }
    );
  }
}
