import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
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

    if (!fullName?.trim() || !email?.trim() || !phone?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Full Name, Email and Phone are required.",
        },
        { status: 400 }
      );
    }

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

    console.log("Career application received:", applicationData);

    return NextResponse.json(
      {
        success: true,
        message:
          "Application submitted successfully. Our team will contact you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("CAREER APPLICATION ERROR:", error);

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