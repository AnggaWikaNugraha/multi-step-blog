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
};

export type BlogAction =
    | { type: "SET_DATA"; payload: Blog[] }
    | { type: "SET_LOADING"; payload: boolean };


export const BlogInitialState: BlogState = {
    data: [],
    loading: false,
};