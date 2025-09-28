export function WizardNavigation({
                                     step,
                                     onBack,
                                     onNext,
                                     onSubmit,
                                     canNext = true,
                                     canSubmit = true,
                                 }: Props) {
    if (step >= 5) return null;

    return (
        <div className="mt-6 flex justify-between">
            {/* Back Button */}
            {step > 1 ? (
                <button
                    onClick={onBack}
                    className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
                >
                    Back
                </button>
            ) : (
                <span />
            )}

            {/* Next / Submit */}
            {step < 4 ? (
                <button
                    onClick={onNext}
                    disabled={!canNext}
                    className={`px-4 py-2 rounded-lg text-white ${
                        canNext
                            ? "bg-blue-600 hover:bg-blue-700"
                            : "bg-blue-300 cursor-not-allowed"
                    }`}
                >
                    Next
                </button>
            ) : (
                <button
                    onClick={onSubmit}
                    disabled={!canSubmit}
                    className={`px-4 py-2 rounded-lg text-white ${
                        canSubmit
                            ? "bg-green-600 hover:bg-green-700"
                            : "bg-green-300 cursor-not-allowed"
                    }`}
                >
                    Submit
                </button>
            )}
        </div>
    );
}
