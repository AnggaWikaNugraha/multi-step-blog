import React from "react";

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string;
    error?: string;
};

export default function Textarea({ label, error, ...props }: Props) {
    return (
        <div>
            {label && <label className="mb-1 block text-sm text-gray-700">{label}</label>}
            <textarea
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-800 outline-none
                   focus:ring-2 focus:ring-gray-800 min-h-[120px] placeholder:text-gray-400 disabled:bg-gray-200"
                {...props}
            />
            {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
        </div>
    );
}
