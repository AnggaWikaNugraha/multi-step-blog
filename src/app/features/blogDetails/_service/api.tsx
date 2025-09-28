// Detail by ID (dummy API)
import {dummyPosts} from "@/app/features/blog/_service/blogs";

export async function getDataServiceById(id: string) {
    const found = dummyPosts.find((p) => p.id === id) ?? null;
    return Promise.resolve({ data: found });
}