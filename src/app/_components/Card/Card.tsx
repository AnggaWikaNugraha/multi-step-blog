import React from "react";

export default function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="rounded-2xl bg-gray-50 shadow-sm ring-1 ring-gray-300 p-4 text-gray-800">
            {children}
        </div>
    );
}
