// app/blog/[id]/page.tsx
"use client";
import { useParams, useRouter } from "next/navigation";
import BlogDetails from "@/app/features/blogDetails/view";

export default function BlogDetailPage() {
    const { id } = useParams<{ id: string }>();
    const router = useRouter();

    return (
        <BlogDetails id={id} router={router}/>
    );
}
