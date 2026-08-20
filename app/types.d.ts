declare module "*.css";

interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    ttq?: {
        track: (
            event: string,
            properties?: Record<string, unknown>,
            options?: Record<string, unknown>
        ) => void;
        page: () => void;
        [key: string]: unknown;
    };
}
