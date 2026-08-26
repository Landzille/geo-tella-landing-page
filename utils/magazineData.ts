export interface Magazine {
    id: number;
    title: string;
    description: string;
    image: string;
    pdfUrl: string;
}

export const magazineData: Magazine[] = [
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
        {
        id: 4,
        title: "Geotela Magazine Vol. 4",
        description: "What Does Location Intelligence Actually Mean For You",
        image: "/assets/volume4.jpeg",
        pdfUrl: "/magazines/Geotela-Magazine -Volume-4.pdf",
    },
];
