"use client";

import React, { createContext, useReducer, useContext, ReactNode } from "react";
import {BlogAction, BlogInitialState, BlogState} from './types/blog'

export function BlogReducer(state: BlogState, action: BlogAction): BlogState {
    switch (action.type) {
        case "SET_DATA":
            return { ...state, data: action.payload };
        case "SET_LOADING":
            return { ...state, loading: action.payload };

        case "SET_SEARCH":
            return { ...state, search: action.payload };
        case "SET_CATEGORY":
            return { ...state, category: action.payload };

        case "SET_DETAIL":
            return { ...state, detailBlog: action.payload };
        case "SET_DETAIL_LOADING":
            return { ...state, detailBlogLoading: action.payload };

        default:
            return state;
    }
}

export const BlogContext = createContext<{
    state: BlogState;
    dispatch: React.Dispatch<BlogAction>;
}>({
    state: BlogInitialState,
    dispatch: () => undefined,
});

export function useBlogContext() {
    return useContext(BlogContext);
}