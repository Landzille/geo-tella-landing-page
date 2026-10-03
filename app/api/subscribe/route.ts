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

  const brevoHeaders = {
    "Content-Type": "application/json",
    "api-key": process.env.BREVO_API_KEY!,
  };

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: brevoHeaders,
      body: JSON.stringify({
        email,
        ...(firstName && { attributes: { FIRSTNAME: firstName } }),
        listIds: [listId],
        updateEnabled: true,
      }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      console.error("Brevo contact request failed", response.status, error);

      // updateEnabled already makes Brevo update an existing contact instead
      // of rejecting it, but if it ever still comes back as a duplicate
      // (e.g. matched on a different identifier), fall back to a direct
      // update so a returning email reliably ends up current rather than
      // just failing.
      if (error?.code === "duplicate_parameter") {
        const updateRes = await fetch(
          `https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`,
          {
            method: "PUT",
            headers: brevoHeaders,
            body: JSON.stringify({
              ...(firstName && { attributes: { FIRSTNAME: firstName } }),
              listIds: [listId],
            }),
          }
        );
        if (!updateRes.ok) {
          console.error(
            "Brevo contact update fallback failed",
            updateRes.status,
            await updateRes.json().catch(() => ({}))
          );
        }
      }
      // Any other failure: already logged above — fall through to success.
    }

    if (eventId) {
      await sendTikTokLeadEvent({
        email,
        eventId,
        url: url || req.headers.get("referer") || "",
        ip: req.headers.get("x-forwarded-for")?.split(",")[0]?.trim(),
        userAgent: req.headers.get("user-agent") ?? undefined,
        ttp: req.cookies.get("_ttp")?.value,
      }).catch((err) => console.error("TikTok lead event failed:", err));
    }
  } catch (error) {
    console.error("Brevo error:", error);
  }

  return NextResponse.json({ success: true });
}
