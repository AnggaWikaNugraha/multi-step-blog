import React from "react";
import clsx from "clsx";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "dark" | "light";
    size?: "sm" | "md";
};

export default function Button({
                                   variant = "dark",
                                   size = "md",
                                   className,
                                   ...props
                               }: Props) {
    return (
        <button
            className={clsx(
                "inline-flex items-center justify-center rounded-xl font-medium transition",
                size === "sm" ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm",
                variant === "dark"
                    ? "bg-gray-800 text-white hover:bg-gray-700 active:bg-gray-900 disabled:bg-gray-400"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200 active:bg-gray-300 disabled:text-gray-400",
                className
            )}
            {...props}
        />
    );
}
