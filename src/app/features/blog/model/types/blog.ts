export type Blog = {
    id: string;
    title: string;
    author: string;
    summary: string;
    category: string;
    createdAt: string;

    content: string;
};

export type BlogState = {
    data: Blog[];
    loading: boolean;

    search: string;
    category: string;

    detailBlog: Blog | null; // ⬅️ detail blog
    detailBlogLoading: boolean; // ⬅️ loading detail
};

export type BlogAction =
    | { type: "SET_DATA"; payload: Blog[] }
    | { type: "SET_LOADING"; payload: boolean }

    | { type: "SET_SEARCH"; payload: string }
    | { type: "SET_CATEGORY"; payload: string }

    | { type: "SET_DETAIL"; payload: Blog | null }
    | { type: "SET_DETAIL_LOADING"; payload: boolean }

    | { type: "ADD_BLOG"; payload: Blog }; // ⬅️ action baru buat add blog

export const BlogInitialState: BlogState = {
    data: [],
    loading: false,

    search: "",
    category: "",

    detailBlog: null, // ⬅️ detail blog
    detailBlogLoading: false, // ⬅️ loading detail
};

export const categoryOptions = [
    { value: "", label: "Semua Kategori" },
    { value: "Tech", label: "Tech" },
    { value: "Lifestyle", label: "Lifestyle" },
    { value: "Design", label: "Design" },
];