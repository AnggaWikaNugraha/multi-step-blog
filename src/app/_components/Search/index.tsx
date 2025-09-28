"use client";
import React from "react";

type SearchInputProps = {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
};

export function SearchInput({
                                value,
                                onChange,
                                placeholder = "Cari...",
                                className = "",
                            }: SearchInputProps) {
    return (
        <div className={`relative w-full ${className}`}>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full p-2 pr-8 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            {/* Icon search */}
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
                🔍
              </span>
        </div>
    );
}
