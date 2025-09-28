import { Errors, WizardState } from "../model/types/blogWizards";


export function validateStep(state: WizardState, step: number): Errors {
    const err: Errors = {};
    if (step === 1) {
        if (!state.title.trim()) err.title = "Title wajib diisi";
        if (!state.author.trim()) err.author = "Author wajib diisi";
    }
    if (step === 2) {
        if (!state.summary.trim()) err.summary = "Summary wajib diisi";
        if (!state.category.trim()) err.category = "Pilih kategori";
    }
    if (step === 3) {
        if (!state.content.trim()) err.content = "Content wajib diisi";
    }
    return err;
}