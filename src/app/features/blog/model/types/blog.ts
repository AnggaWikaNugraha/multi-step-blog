export type Blog = {
    id: string;
    title: string;
    author: string;
    summary: string;
    category: string;
    createdAt: string;
};

export type BlogState = {
    data: Blog[];
    loading: boolean;

    search: string;
    category: string;
};

export type BlogAction =
    | { type: "SET_DATA"; payload: Blog[] }
    | { type: "SET_LOADING"; payload: boolean }

    | { type: "SET_SEARCH"; payload: string }
    | { type: "SET_CATEGORY"; payload: string }

export const BlogInitialState: BlogState = {
    data: [],
    loading: false,

    search: "",
    category: "",
};

export const categoryOptions = [
    { value: "", label: "Semua Kategori" },
    { value: "Tech", label: "Tech" },
    { value: "Lifestyle", label: "Lifestyle" },
    { value: "Design", label: "Design" },
];