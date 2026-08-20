import { createHash } from "crypto";

const TIKTOK_PIXEL_CODE = "D9SUJGJC77U7RKPOAHIG";
const TIKTOK_EVENTS_API_URL =
    "https://business-api.tiktok.com/open_api/v1.3/event/track/";

function hashPII(value: string) {
    return createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

type TikTokLeadEventInput = {
    email: string;
    eventId: string;
    url: string;
    ip?: string;
    userAgent?: string;
    ttp?: string;
};

// Server-side counterpart to the client-side `ttq.track('Lead', ...)` call.
// Sharing `eventId` between the two lets TikTok deduplicate them.
export async function sendTikTokLeadEvent({
    email,
    eventId,
    url,
    ip,
    userAgent,
    ttp,
}: TikTokLeadEventInput) {
    const accessToken = process.env.TIKTOK_ACCESS_TOKEN;
    if (!accessToken) {
        console.warn("TIKTOK_ACCESS_TOKEN is not set — skipping TikTok Events API call");
        return;
    }

    try {
        const testEventCode = process.env.TIKTOK_TEST_EVENT_CODE;

        const res = await fetch(TIKTOK_EVENTS_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Token": accessToken,
            },
            body: JSON.stringify({
                event_source: "web",
                event_source_id: TIKTOK_PIXEL_CODE,
                ...(testEventCode && { test_event_code: testEventCode }),
                data: [
                    {
                        event: "Lead",
                        event_time: Math.floor(Date.now() / 1000),
                        event_id: eventId,
                        user: {
                            email: [hashPII(email)],
                            ...(ip && { ip }),
                            ...(userAgent && { user_agent: userAgent }),
                            ...(ttp && { ttp }),
                        },
                        page: { url },
                    },
                ],
            }),
        });

        if (!res.ok) {
            console.error("TikTok Events API error:", await res.text());
        }
    } catch (error) {
        console.error("TikTok Events API request failed:", error);
    }
}
