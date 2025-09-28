"use client";
import React from "react";

type Props = {
    title: string;
    author: string;
    summary: string;
    category: string;
    content: string;
};

export function Step4Review({ title, author, summary, category, content }: Props) {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold">Review Post</h2>
            <p><strong>Title:</strong> {title}</p>
            <p><strong>Author:</strong> {author}</p>
            <p><strong>Summary:</strong> {summary}</p>
            <p><strong>Category:</strong> {category}</p>
            <p><strong>Content:</strong></p>
            <div className="p-3 border rounded bg-gray-50">{content}</div>
        </div>
    );
}
