import React from "react";

export function BlogCardSkeleton() {
    return (
        <div className="p-4 border rounded-lg shadow-sm animate-pulse space-y-3">
            <div className="h-5 bg-gray-200 rounded w-2/3"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
            <div className="h-3 bg-gray-200 rounded w-full"></div>
            <div className="h-3 bg-gray-200 rounded w-4/5"></div>
        </div>
    );
}
