import React from "react";

type Option = { value: string; label: string };

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & {
    label?: string;
    options: Option[];
    error?: string;
};

export default function Select({ label, options, error, ...props }: Props) {
    return (
        <div>
            {label && <label className="mb-1 block text-sm text-gray-700">{label}</label>}
            <select
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-800 outline-none
                   focus:ring-2 focus:ring-gray-800 disabled:bg-gray-200"
                {...props}
            >
                <option value="">Pilih...</option>
                {options.map((o) => (
                    <option key={o.value} value={o.value}>
                        {o.label}
                    </option>
                ))}
            </select>
            {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
        </div>
    );
}
