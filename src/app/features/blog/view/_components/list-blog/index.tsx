"use client";

import BlogCard from "../blog-card";

import {useGetData} from "@/app/features/blog/_hooks/useBlog";
import {Blog} from '@/app/features/blog/model/types/blog'
import {BlogCardSkeleton} from "@/app/_components/loading";
import {EmptyState} from "@/app/_components/empty";

import {useBlogContext} from "@/app/features/blog/model/blog";
import {filterBlogs} from "@/app/features/blog/_hooks/useFilter";

export default function List() {
    useGetData();

    const { state } = useBlogContext();
    const { data, loading, search, category } = state
    // 🔎 filter di FE
    const filtered = filterBlogs(data ?? [], search, category);

    return (
        <div className="space-y-3 flex flex-col gap-4">
            {loading ? (
                // 🔄 tampilkan 3 skeleton card
                <>
                    <BlogCardSkeleton />
                    <BlogCardSkeleton />
                    <BlogCardSkeleton />
                </>
            ) : filtered?.length === 0 ? (
                <EmptyState message="Belum ada artikel ditemukan" />
            ) : (
                filtered?.map((blog: Blog) => <BlogCard key={blog.id} blog={blog} />)
            )}
        </div>
    );
}
