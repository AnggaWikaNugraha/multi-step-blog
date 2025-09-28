import React from 'react'
import {BlogCardSkeleton} from "@/app/_components/loading";
import {EmptyState} from "@/app/_components/empty";
import {useBlogContext} from "@/app/features/blog/model/blog";
import {useGetDataID} from "@/app/features/blogDetails/_hooks/blog-details";

function BlogDetails({ id, router }: any) {

    useGetDataID(id)

    const { state } = useBlogContext();
    const { detailBlog, detailBlogLoading } = state
    const post = detailBlog

    return (
        <article className="max-w-3xl mx-auto p-6">
            <button
                onClick={() => router.back()}
                className="mb-6 text-sm text-gray-600 hover:underline"
            >
                ← Kembali
            </button>

            {detailBlogLoading ? (
                // 🔄 Loading state
                <BlogCardSkeleton />
            ) : !post ? (
                // ❌ Empty state
                <EmptyState message="Post tidak ditemukan" />
            ) : (
                // ✅ Data state
                <article className="bg-white rounded-2xl shadow-md p-8 space-y-6">
                    {/* Judul */}
                    <header className="space-y-2 border-b pb-4">
                        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                            <span>✍️ {post.author}</span>
                            <span>•</span>
                            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                            <span>•</span>
                            <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-600">
                                {post.category}
                              </span>
                        </div>
                    </header>

                    {/* Summary */}
                    <p className="text-lg text-gray-600 italic leading-relaxed">
                        {post.summary}
                    </p>

                    {/* Konten */}
                    <div className="prose max-w-none prose-lg text-gray-800 leading-relaxed">
                        {post.content}
                    </div>
                </article>

            )}
        </article>
    )
}

export default BlogDetails
