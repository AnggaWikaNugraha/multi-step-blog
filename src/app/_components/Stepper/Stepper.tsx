import React from "react";

export default function Stepper({ step }: { step: number }) {
    const items = [1, 2, 3, 4];

    return (
        <div className="flex items-center justify-center w-full max-w-2xl mx-auto">
            {items.map((i, idx) => (
                <div key={i} className="flex items-center w-full">
                    {/* Circle */}
                    <div
                        className={`flex items-center justify-center w-10 h-10 rounded-full border-2 text-sm font-semibold
              ${
                            i < step
                                ? "bg-green-500 border-green-500 text-white"
                                : i === step
                                    ? "bg-blue-600 border-blue-600 text-white"
                                    : "bg-gray-100 border-gray-300 text-gray-400"
                        }`}
                    >
                        {i}
                    </div>

                    {/* Garis penghubung */}
                    {idx < items.length - 1 && (
                        <div
                            className={`flex-1 h-1 mx-2 ${
                                i < step ? "bg-blue-600" : "bg-gray-200"
                            }`}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}
