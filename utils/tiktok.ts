export type TikTokEvent = "ViewContent" | "Search" | "ClickButton" | "Lead";

export function ttqTrack(
    event: TikTokEvent,
    properties?: Record<string, unknown>,
    eventId?: string
) {
    if (typeof window === "undefined" || !window.ttq) return;
    window.ttq.track(event, properties, eventId ? { event_id: eventId } : undefined);
}

export function generateEventId() {
    if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
    return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}
