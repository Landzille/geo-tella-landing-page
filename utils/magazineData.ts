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
        title: "See the World Differently",
        description: "A geotela discovery guide",
        image: "/assets/volume1.jpeg",
        pdfUrl: "/magazines/Geotela-Magazine-Volume-1.pdf",
    },
    {
        id: 2,
        title: "Your Money Playbook for the World Cup",
        description: "10 real, specific ways to earn during the biggest sporting event of your lifetime",
        image: "/assets/volume2.jpg",
        pdfUrl: "/magazines/Geotela-Magazine-Volume-2.pdf",
    },

];
