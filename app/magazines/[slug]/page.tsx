import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MagazinePreviewPage from "@/components/magazinePreviewPage";
import Footer from "@/components/footer";
import Copyright from "@/components/copyright";
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
        title: `${magazine.title} | GeoTela Magazine`,
        description: magazine.description,
    };
}

export default async function MagazineDetail({ params }: Props) {
    const { slug } = await params;
    const magazine = getMagazineBySlug(slug);

    if (!magazine) {
        notFound();
    }

    const others = magazineData.filter((m) => m.id !== magazine.id);

    return (
        <>
            <MagazinePreviewPage magazine={magazine} others={others} />
            <Footer />
            <Copyright />
        </>
    );
}
