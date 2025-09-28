// service.ts
import  {Blog} from '../model/types/blog'

export const dummyPosts: Blog[] = [
    {
        id: "1",
        title: "Belajar Next.js 15",
        author: "Angga",
        summary: "Next.js 15 hadir dengan App Router yang lebih stabil.",
        category: "Tech",
        createdAt: new Date().toISOString(),
        content:
            "Ini konten lengkap tentang Next.js 15. Kita bahas App Router, Server Actions, dan peningkatan bundling. Sertakan contoh kode dan best practice.",
    },
    {
        id: "2",
        title: "Tips Work Life Balance",
        author: "Budi",
        summary: "Cara menjaga work-life balance di era remote.",
        category: "Lifestyle",
        createdAt: new Date().toISOString(),
        content:
            "Konten lengkap: atur boundaries, time blocking, dan teknik Pomodoro. Ceritakan studi kasus dan checklist harian.",
    },
    {
        id: "3",
        title: "UI/UX Design 2025",
        author: "Citra",
        summary: "Tren terbaru UI/UX untuk aplikasi modern.",
        category: "Design",
        createdAt: new Date().toISOString(),
        content:
            "Konten lengkap: tren neumorphism 2.0, adaptive color, dan micro-interactions. Bahas tool terbaik dan contoh implementasi.",
    },
];

export async function getDataService() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dummyPosts);
        }, 500); // kasih delay biar mirip API
    });
}
