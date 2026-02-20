import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // ── TODO: Connect to your mailing list provider ─────────────────
    //
    // Option A — Mailchimp:
    //   POST to https://us1.api.mailchimp.com/3.0/lists/{LIST_ID}/members
    //   Authorization: apikey <MAILCHIMP_API_KEY>
    //
    // Option B — Brevo (formerly Sendinblue):
    //   POST to https://api.brevo.com/v3/contacts
    //   api-key: <BREVO_API_KEY>
    //
    // Option C — Simply store in a database (Supabase, PlanetScale, etc.)
    //

    console.log("Newsletter subscription:", { email, timestamp: new Date().toISOString() });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
