"use client";

import {Blog} from "@/app/features/blog/model/types/blog";
import Card from "@/app/_components/Card/Card";
import Button from "@/app/_components/Button/Button";
import Link from "next/link";


export default function BlogCard({ blog }: { blog: Blog }) {
    return (
        <Link href={`/blog/${blog.id}`}>
            <Card>
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <h3 className="text-lg font-semibold">{blog.title}</h3>
                        <p className="text-xs text-gray-500">
                            oleh {blog.author} · {blog.category} ·{" "}
                            {new Date(blog.createdAt).toLocaleDateString("id-ID", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                            })}
                        </p>
                        <p className="mt-2 text-sm text-gray-700">{blog.summary}</p>
                    </div>
                    <Button variant="light">View</Button>
                </div>
            </Card>
        </Link>
    );
}
