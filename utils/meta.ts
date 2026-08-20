export type MetaEvent = "ViewContent" | "Lead" | "CompleteRegistration";

export function fbqTrack(event: MetaEvent, properties?: Record<string, unknown>) {
    if (typeof window === "undefined" || !window.fbq) return;
    window.fbq("track", event, properties);
}
