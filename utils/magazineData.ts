export interface Magazine {
    id: number;
    title: string;
    description: string;
    image: string;
    pdfUrl: string;
}

export function slugify(value: string): string {
    return value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

export function getMagazineBySlug(slug: string): Magazine | undefined {
    return magazineData.find((magazine) => slugify(magazine.title) === slug);
}

export function getMagazineLabel(title: string): string | null {
    const match = title.match(/vol\.?\s*(\d+)/i);
    if (!match) return null;
    return `MAGAZINE ${match[1].padStart(2, "0")}`;
}

export const magazineData: Magazine[] = [
    {
        id: 4,
        title: "Geotela Magazine Vol. 4",
        description: "What Does Location Intelligence Actually Mean For You",
        image: "/assets/volume4.jpeg",
        pdfUrl: "/magazines/Geotela-Magazine-Volume-4.pdf",
    },
    {
        id: 1,
        title: "Geotela Magazine Vol. 3",
        description: "Your Money Playbook for the World Cup",
        image: "/assets/magazine-3.jpg",
        pdfUrl: "/magazines/Geotela-Magazine-Volume-3.pdf",
    },
    {
        id: 2,
        title: "Geotela Magazine Vol. 2",
        description: "Your Money Playbook for the World Cup",
        image: "/assets/volume2.jpg",
        pdfUrl: "/magazines/Geotela-Magazine-Volume-2.pdf",
    },
    {
        id: 3,
        title: "Geotela Magazine Vol. 1",
        description: "See the World Differently",
        image: "/assets/volume1.jpeg",
        pdfUrl: "/magazines/Geotela-Magazine-Volume-1.pdf",
    },
];
