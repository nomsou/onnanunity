import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, interest, message } = body;

    // ── Validation ──────────────────────────────────────────────────
    if (!firstName || !lastName || !email || !interest || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // ── Send via Resend ─────────────────────────────────────────────
    // To activate: npm install resend
    // Then set RESEND_API_KEY and RESEND_TO_EMAIL in your .env.local
    //
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    //
    // await resend.emails.send({
    //   from:    process.env.RESEND_FROM_EMAIL ?? "noreply@onnanunity.com",
    //   to:      process.env.RESEND_TO_EMAIL   ?? "info@onnanunity.com",
    //   replyTo: email,
    //   subject: `New Enquiry: ${interest} — ${firstName} ${lastName}`,
    //   html: `
    //     <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
    //       <div style="background:#C9A84C;padding:20px 30px">
    //         <h1 style="color:#0E0E0E;margin:0;font-size:22px">New Enquiry — Onnan Unity</h1>
    //       </div>
    //       <div style="padding:30px;background:#1A1A1A;color:#F5F2EE">
    //         <p><strong>Name:</strong>     ${firstName} ${lastName}</p>
    //         <p><strong>Email:</strong>    ${email}</p>
    //         <p><strong>Phone:</strong>    ${phone || "Not provided"}</p>
    //         <p><strong>Interest:</strong> ${interest}</p>
    //         <hr style="border-color:#333;margin:20px 0"/>
    //         <p><strong>Message:</strong></p>
    //         <p style="color:#8A8A8A">${message.replace(/\n/g, "<br/>")}</p>
    //       </div>
    //       <div style="padding:20px 30px;background:#0E0E0E;color:#8A8A8A;font-size:12px">
    //         <p>Sent from onnanunity.com contact form</p>
    //       </div>
    //     </div>
    //   `,
    // });

    // Log for now (remove when Resend is connected)
    console.info("[Contact Form]", {
      name:      `${firstName} ${lastName}`,
      email,
      phone:     phone || null,
      interest,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("[Contact Form Error]", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again or call us directly." },
      { status: 500 }
    );
  }
}
