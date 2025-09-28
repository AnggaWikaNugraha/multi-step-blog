import Blogs from "@/app/features/blog/view";

export default function HomePage() {
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
                    <button className="px-4 py-2 rounded-xl bg-gray-800 text-white hover:bg-gray-700 text-sm">
                        + New Post
                    </button>
                </div>

                {/* Blog List */}
                <Blogs/>
            </section>

        </main>
    );
}
