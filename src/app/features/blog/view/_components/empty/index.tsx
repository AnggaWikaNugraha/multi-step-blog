import React from "react";

export function EmptyState({ message = "Data tidak ditemukan" }) {
    return (
        <div className="flex flex-col items-center justify-center py-12 text-gray-500">
            <p className="text-base font-medium">{message}</p>
        </div>
    );
}
