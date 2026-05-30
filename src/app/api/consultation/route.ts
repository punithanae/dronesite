import { NextRequest, NextResponse } from "next/server";
import { consultationSchema } from "@/lib/validations";
import { sendConsultationEmail, sendConfirmationEmail } from "@/lib/resend";
import { createClient } from "@supabase/supabase-js";

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

async function verifyRecaptcha(token: string): Promise<boolean> {
  if (!RECAPTCHA_SECRET_KEY) {
    console.warn("reCAPTCHA secret key not configured - skipping verification");
    return true;
  }

  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
      { method: "POST" }
    );

    const data = await response.json();
    return data.success && data.score >= 0.5;
  } catch (error) {
    console.error("reCAPTCHA verification failed:", error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body
    const validationResult = consultationSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, phone, email, service, location, preferredDate, message, recaptchaToken } =
      validationResult.data;

    // Verify reCAPTCHA
    const isValidRecaptcha = await verifyRecaptcha(recaptchaToken);
    if (!isValidRecaptcha) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed. Please try again." },
        { status: 400 }
      );
    }

    // Check Supabase configuration and save to database
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (supabaseUrl && supabaseServiceKey) {
      const supabase = createClient(supabaseUrl, supabaseServiceKey);

      const { error: dbError } = await supabase
        .from("consultations")
        .insert([
          {
            name,
            phone,
            email,
            service,
            location: location || null,
            preferred_date: preferredDate || null,
            message: message || null,
            status: "new",
          },
        ]);

      if (dbError) {
        console.error("Database error:", dbError);
        return NextResponse.json(
          { error: "Failed to save consultation request" },
          { status: 500 }
        );
      }
    } else {
      console.warn("Supabase not configured - skipping database save");
    }

    // Send email notifications (if Resend is configured)
    if (process.env.RESEND_API_KEY) {
      try {
        // Send notification to admin
        await sendConsultationEmail({
          name,
          email,
          phone,
          service,
          location: location || "",
          preferredDate: preferredDate || "",
          message: message || "",
        });

        // Send confirmation to client
        await sendConfirmationEmail(email, name, service);
      } catch (emailError) {
        console.error("Email error:", emailError);
        // Don't fail the request if email fails
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Consultation request submitted successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  );
}
