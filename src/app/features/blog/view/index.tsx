"use client"

import {useReducer} from "react";

import List from '../view/_components/list-blog';

import {BlogContext, BlogReducer} from "@/app/features/blog/model/blog";
import {BlogInitialState} from "@/app/features/blog/model/types/blog";

export default function Blogs() {

    const [state, dispatch] = useReducer(BlogReducer, BlogInitialState);

    return (
        <BlogContext.Provider value={{ state, dispatch }}>
            <List />
        </BlogContext.Provider>
    );
}
