// app/blog/[id]/page.tsx
"use client";
import { useParams, useRouter } from "next/navigation";
import BlogDetails from "@/app/features/blogDetails/view";
import {useReducer} from "react";
import {BlogContext, BlogReducer} from "@/app/features/blog/model/blog";
import {BlogInitialState} from "@/app/features/blog/model/types/blog";

export default function BlogDetailPage() {
    const { id } = useParams<{ id: string }>();
    const router = useRouter();
    const [state, dispatch ] = useReducer(BlogReducer, BlogInitialState);

    return (
        <BlogContext.Provider value={{ state, dispatch }}>
            <BlogDetails id={id} router={router}/>
        </BlogContext.Provider>
    );
}
