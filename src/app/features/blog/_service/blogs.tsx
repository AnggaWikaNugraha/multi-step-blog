// service.ts
import  {Blog} from '../model/types/blog'

const dummyPosts: Blog[] = [
    {
        id: "1",
        title: "Belajar Next.js 15",
        author: "Angga",
        summary: "Next.js 15 hadir dengan App Router yang lebih stabil.",
        category: "Tech",
        createdAt: new Date().toISOString(),
    },
    {
        id: "2",
        title: "Tips Work Life Balance",
        author: "Budi",
        summary: "Cara menjaga work-life balance di era remote.",
        category: "Lifestyle",
        createdAt: new Date().toISOString(),
    },
    {
        id: "3",
        title: "UI/UX Design 2025",
        author: "Citra",
        summary: "Tren terbaru UI/UX untuk aplikasi modern.",
        category: "Design",
        createdAt: new Date().toISOString(),
    },
];

export async function getDataService() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: {
                    data: dummyPosts,
                    total_data: dummyPosts.length,
                    limit: 10,
                    page: 1,
                },
            });
        }, 500); // kasih delay biar mirip API
    });
}
