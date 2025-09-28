"use client"

import List from '../view/_components/list-blog';
import {SearchInput} from "@/app/_components/Search";
import {useBlogContext} from "@/app/features/blog/model/blog";
import {SelectSearch} from "@/app/_components/Select/Select";
import {categoryOptions} from "@/app/features/blog/model/types/blog";

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
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-800">📚 Blog Posts</h2>

                    <div className={'flex gap-4'}>
                        <SelectSearch
                            value={category}
                            onChange={(val) =>
                                dispatch({ type: "SET_CATEGORY", payload: val })
                            }
                            options={categoryOptions}
                            placeholder="Pilih kategori"
                        />
                        <div className="max-w-sm">
                            <SearchInput
                                value={search}
                                onChange={(val) => dispatch({ type: "SET_SEARCH", payload: val })}
                                placeholder="Cari artikel..."
                            />
                            <p className="mt-2 text-sm text-gray-500">Keyword: {search}</p>
                        </div>
                        <button className="px-4 py-2 rounded-xl bg-gray-800 text-white hover:bg-gray-700 text-sm h-fit">
                            + New Post
                        </button>
                    </div>
                </div>

                {/* Blog List */}
                <List/>
            </section>
        </main>
    );
}
