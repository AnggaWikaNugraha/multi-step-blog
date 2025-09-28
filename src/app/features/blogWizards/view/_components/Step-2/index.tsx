"use client";
import React from "react";
import { SelectSearch } from "@/app/_components/Select/Select";
import {categories} from "@/app/features/blogWizards/model/types/blogWizards";
import Textarea from "@/app/_components/Text-area/TextArea";

type Props = {
    summary: string;
    category: string;
    onChange: any
    errors?: Record<string, string>;
};

export function Step2SummaryCategory({ summary, category, onChange, errors }: Props) {
    console.log(errors)
    return (
        <div className="space-y-4">
          <Textarea
              placeholder="Blog Summary"
              value={summary}
              onChange={(e) => onChange("summary", e.target.value)}
              className="w-full border rounded-lg p-2"
              error={errors?.summary}
          />
            <SelectSearch
                value={category}
                onChange={(val) => onChange("category", val)}
                options={categories}
                placeholder="Pilih kategori"
                error={errors?.category}
            />
        </div>
    );
}
