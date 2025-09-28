"use client";
import React from "react";

export type Option = {
    label: string;
    value: string;
};

type SelectSearchProps = {
    value: string;
    onChange: (value: string) => void;
    options: Option[];
    placeholder?: string;
    className?: string;
};

export function SelectSearch({
                                 value,
                                 onChange,
                                 options,
                                 placeholder = "Pilih...",
                                 className = "",
                             }: SelectSearchProps) {
    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${className}`}
        >
            <option value="">{placeholder}</option>
            {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                    {opt.label}
                </option>
            ))}
        </select>
    );
}
