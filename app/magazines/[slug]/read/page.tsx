import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MagazineReadPage from "@/components/magazineReadPage";
import { magazineData, getMagazineBySlug, slugify } from "@/utils/magazineData";

type Props = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return magazineData.map((magazine) => ({
        slug: slugify(magazine.title),
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const magazine = getMagazineBySlug(slug);

    if (!magazine) {
        return { title: "Magazine not found | GeoTela" };
    }

    return {
        title: `Read ${magazine.title} | GeoTela Magazine`,
        description: magazine.description,
    };
}

export default async function MagazineRead({ params }: Props) {
    const { slug } = await params;
    const magazine = getMagazineBySlug(slug);

    if (!magazine) {
        notFound();
    }

    return <MagazineReadPage magazine={magazine} />;
}
