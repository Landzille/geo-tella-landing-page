import { NextRequest, NextResponse } from "next/server";
import { sendTikTokLeadEvent } from "@/utils/tiktokEventsApi";

export async function POST(req: NextRequest) {
  const { email, firstName, listId, eventId, url } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  if (!process.env.BREVO_API_KEY) {
    return NextResponse.json({ error: "BREVO_API_KEY is not set" }, { status: 500 });
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        email,
        ...(firstName && { attributes: { FIRSTNAME: firstName } }),
        listIds: [listId],
        updateEnabled: true,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json(error, { status: response.status });
    }

    if (eventId) {
      await sendTikTokLeadEvent({
        email,
        eventId,
        url: url || req.headers.get("referer") || "",
        ip: req.headers.get("x-forwarded-for")?.split(",")[0]?.trim(),
        userAgent: req.headers.get("user-agent") ?? undefined,
        ttp: req.cookies.get("_ttp")?.value,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Brevo error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
