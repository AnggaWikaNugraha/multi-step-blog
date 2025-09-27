import React from "react";

export default function Stepper({ step }: { step: number }) {
    const items = [1, 2, 3, 4];
    return (
        <div className="mb-4 flex items-center gap-2 text-xs text-gray-600">
            {items.map((i, idx) => (
                <React.Fragment key={i}>
                    <div
                        className={
                            i <= step
                                ? "font-semibold text-gray-900"
                                : "text-gray-400"
                        }
                    >
                        Langkah {i}
                    </div>
                    {idx < items.length - 1 && <span>›</span>}
                </React.Fragment>
            ))}
        </div>
    );
}
