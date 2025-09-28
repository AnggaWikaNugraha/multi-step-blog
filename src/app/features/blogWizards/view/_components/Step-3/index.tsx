"use client";
import React from "react";
import Textarea from "@/app/_components/Text-area/TextArea";

type Props = {
    content: string;
    onChange: any
    errors?: Record<string, string>;
};

export function Step3Content({ content, onChange, errors }: Props) {
    return (
        <Textarea
            placeholder="Blog Content"
            value={content}
            onChange={(e) => onChange("content", e.target.value)}
            className="w-full border rounded-lg p-2 min-h-[200px]"
            error={errors?.content}
        />
    );
}
