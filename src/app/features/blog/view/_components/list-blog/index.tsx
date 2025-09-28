"use client";

import {useGetData} from "@/app/features/blog/_hooks/useBlog";
import  {Blog} from '@/app/features/blog/model/types/blog'
import {BlogCardSkeleton} from "@/app/features/blog/view/_components/loading";
import {EmptyState} from "@/app/features/blog/view/_components/empty";

import BlogCard from "../blog-card";
import {useBlogContext} from "@/app/features/blog/model/blog";

export default function List() {
    useGetData();

    const { state } = useBlogContext();
    const { data, loading } = state

    return (
        <div className="space-y-3">
            {loading ? (
                // 🔄 tampilkan 3 skeleton card
                <>
                    <BlogCardSkeleton />
                    <BlogCardSkeleton />
                    <BlogCardSkeleton />
                </>
            ) : data?.data?.length === 0 ? (
                <EmptyState message="Belum ada artikel ditemukan" />
            ) : (
                data?.data?.map((blog: Blog) => <BlogCard key={blog.id} blog={blog} />)
            )}
        </div>
    );
}
