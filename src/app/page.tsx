"use client"

import {useReducer} from "react";
import {BlogContext, BlogReducer} from "@/app/features/blog/model/blog";
import {BlogInitialState} from "@/app/features/blog/model/types/blog";
import Blogs from "@/app/features/blog/view";

export default function HomePage() {

    const [state, dispatch ] = useReducer(BlogReducer, BlogInitialState);

    return (
        <BlogContext.Provider value={{ state, dispatch }}>
            <Blogs/>
        </BlogContext.Provider>
    );
}
