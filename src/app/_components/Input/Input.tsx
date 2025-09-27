import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string;
};

export default function Input({ label, error, ...props }: Props) {
    return (
        <div>
            {label && <label className="mb-1 block text-sm text-gray-700">{label}</label>}
            <input
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-800 outline-none
                   focus:ring-2 focus:ring-gray-800 placeholder:text-gray-400 disabled:bg-gray-200"
                {...props}
            />
            {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
        </div>
    );
}
