import { Blog } from "../model/types/blog";

export function filterBlogs(blogs: Blog[], search: string, category: string) {
    let result = blogs;

    // 🔎 search di semua field (id, title, author, summary, category, createdAt)
    if (search) {
        const lower = search.toLowerCase();
        result = result.filter((b) =>
            Object.values(b).some((val) =>
                String(val).toLowerCase().includes(lower)
            )
        );
    }

    // 🏷️ filter by category (optional)
    if (category) {
        const cat = category.trim().toLowerCase();
        result = result.filter((b) => b.category.trim().toLowerCase() === cat);
    }

    return result;
}