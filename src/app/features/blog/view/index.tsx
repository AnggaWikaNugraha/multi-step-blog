"use client"

import List from '../view/_components/list-blog';
import {SearchInput} from "@/app/_components/Search";
import {useBlogContext} from "@/app/features/blog/model/blog";
import {SelectSearch} from "@/app/_components/Select/Select";
import {categoryOptions} from "@/app/features/blog/model/types/blog";
import Link from "next/link";

export default function Blogs() {

    const { state, dispatch } = useBlogContext();
    const { search, category } = state


    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gray-900 text-white py-16 px-6 text-center">
                <h1 className="text-4xl font-bold tracking-tight">
                    Welcome to My<span className="text-gray-300">Blog</span>
                </h1>
                <p className="mt-3 max-w-xl mx-auto text-gray-400 text-base">
                    Tempat berbagi cerita, tips, dan pengetahuan seputar teknologi, gaya hidup,
                    dan bisnis. Jelajahi tulisan terbaru di bawah ini 👇
                </p>
            </section>

            {/* Content Section */}
            <section className="max-w-4xl mx-auto px-6 py-10 space-y-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="text-xl font-semibold text-gray-800">📚 Blog Posts</h2>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center md:items-start sm:gap-4">
                        {/* Dropdown */}
                        <SelectSearch
                            value={category}
                            onChange={(val) =>
                                dispatch({ type: "SET_CATEGORY", payload: val })
                            }
                            options={categoryOptions}
                            placeholder="Pilih kategori"
                            className="w-full sm:w-auto"
                        />

                        {/* Search */}
                        <div className="w-full sm:w-64">
                            <SearchInput
                                value={search}
                                onChange={(val) => dispatch({ type: "SET_SEARCH", payload: val })}
                                placeholder="Cari artikel..."
                            />
                            <p className="mt-1 text-xs text-gray-500 sm:text-sm">Keyword: {search}</p>
                        </div>

                        {/* Button */}
                        <Link href={'/blog'}>
                        <button className="w-full sm:w-auto px-4 py-2 rounded-xl bg-gray-800 text-white hover:bg-gray-700 text-sm">
                            + New Post
                        </button>
                        </Link>
                    </div>
                </div>

                {/* Blog List */}
                <List/>
            </section>
        </main>
    );
}
