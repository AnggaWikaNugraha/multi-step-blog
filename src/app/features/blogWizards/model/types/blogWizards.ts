import { Blog } from "@/app/features/blog/model/types/blog";

// state form
export type WizardState = Omit<Blog, "id" | "createdAt">;

export type Errors = Partial<Record<keyof WizardState, string>>;

export const categories = [
    { value: "tech", label: "Tech" },
    { value: "lifestyle", label: "Lifestyle" },
    { value: "business", label: "Business" },
];