"use client";

import { Blog, WizardState, Errors } from "./useWizards";
import {validateStep} from "@/app/features/blogWizards/_hooks/useValidateStep";

type Params = {
    state: WizardState;
    setErrors: React.Dispatch<React.SetStateAction<Errors>>;
    setPosts: React.Dispatch<React.SetStateAction<Blog[]>>;
    setStep: React.Dispatch<React.SetStateAction<number>>;
};

export function useBlogSubmit({ state, setErrors, setPosts, setStep }: Params) {
    const handleSubmit = () => {
        // validasi semua step
        const allErr = {
            ...validateStep(state, 1),
            ...validateStep(state, 2),
            ...validateStep(state, 3),
        };
        if (Object.values(allErr).some(Boolean)) {
            setErrors(allErr);
            return;
        }

        const newPost: Blog = {
            ...state,
            id: Date.now().toString(),
            createdAt: new Date().toISOString(),
        };

        setPosts((prev) => [newPost, ...prev]);
        setStep(5); // success
    };

    return { handleSubmit };
}
