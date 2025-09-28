"use client";
import React from "react";
import Input from "@/app/_components/Input/Input";

type Props = {
    title: string;
    author: string;
    onChange: (field: string, value: string) => void;
    errors?: Record<string, string>;
};

export function Step1Metadata({ title, author, onChange, errors }: Props) {
    return (
        <div className="space-y-4">
            <Input
                type="text"
                placeholder="Blog Title"
                value={title}
                onChange={(e) => onChange("title", e.target.value)}
                className="w-full border rounded-lg p-2"
                error={errors?.title}
            />
            <Input
                type="text"
                placeholder="Author Name"
                value={author}
                onChange={(e) => onChange("author", e.target.value)}
                className="w-full border rounded-lg p-2"
                error={errors?.author}
            />
        </div>
    );
}
