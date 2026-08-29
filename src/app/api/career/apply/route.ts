import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

export async function POST(request: Request) {
  try {
    // ------------------------------------------
    // Check environment variables
    // ------------------------------------------

    if (!supabaseUrl) {
      return NextResponse.json(
        {
          success: false,
          message: "NEXT_PUBLIC_SUPABASE_URL is missing.",
        },
        { status: 500 }
      );
    }

    if (!supabaseSecretKey) {
      return NextResponse.json(
        {
          success: false,
          message: "SUPABASE_SECRET_KEY is missing.",
        },
        { status: 500 }
      );
    }

    // ------------------------------------------
    // Read request body
    // ------------------------------------------

    const body = await request.json();

    const {
      position,
      fullName,
      email,
      phone,
      experience,
      education,
      location,
      noticePeriod,
      currentSalary,
      expectedSalary,
      portfolioLink,
      resumeLink,
      message,
      whyEmperia,
      additionalMessage,
    } = body;

    // ------------------------------------------
    // Required fields
    // ------------------------------------------

    if (!fullName?.trim() || !email?.trim() || !phone?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Full Name, Email and Phone are required.",
        },
        { status: 400 }
      );
    }

    // ------------------------------------------
    // Create SERVER-ONLY Supabase client
    // ------------------------------------------

    const supabase = createClient(
      supabaseUrl,
      supabaseSecretKey,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    );

    // ------------------------------------------
    // Insert career application
    // ------------------------------------------

    const applicationData = {
      position: position?.trim() || "",
      full_name: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),

      experience: experience?.trim() || "",
      education: education?.trim() || "",
      location: location?.trim() || "",

      notice_period: noticePeriod?.trim() || "",
      current_salary: currentSalary?.trim() || "",
      expected_salary: expectedSalary?.trim() || "",

      portfolio_link: portfolioLink?.trim() || "",
      resume_link: resumeLink?.trim() || "",

      why_emperia: whyEmperia?.trim() || "",

      additional_message:
        additionalMessage?.trim() ||
        message?.trim() ||
        "",

      status: "New",
    };

    const { error } = await supabase
      .from("career_applications")
      .insert(applicationData);

    // ------------------------------------------
    // Supabase error
    // ------------------------------------------

    if (error) {
      console.error(
        "SUPABASE CAREER APPLICATION ERROR:",
        error
      );

      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        { status: 500 }
      );
    }

    // ------------------------------------------
    // Success
    // ------------------------------------------

    return NextResponse.json(
      {
        success: true,
        message:
          "Application submitted successfully. Our team will contact you soon.",
      },
      { status: 200 }
    );

  } catch (error) {
    console.error(
      "CAREER APPLICATION ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unable to save application.",
      },
      { status: 500 }
    );
  }
}