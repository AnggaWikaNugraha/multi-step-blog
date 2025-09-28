"use client";

import {validateStep} from "@/app/features/blogWizards/_hooks/useValidateStep";
import {useBlogContext} from "@/app/features/blog/model/blog";
import { useRouter } from "next/navigation"; // ⬅️ import router
import { Errors, WizardState } from "../model/types/blogWizards";
import { Blog } from "../../blog/model/types/blog";

type Params = {
    state: WizardState;
    setErrors: React.Dispatch<React.SetStateAction<Errors>>;
    setStep: React.Dispatch<React.SetStateAction<number>>;
};

export function useBlogSubmit({ state, setErrors, setStep }: Params) {
    const { dispatch } = useBlogContext();
    const router = useRouter(); // ⬅️ init router

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


        // ⬅️ simpan ke global store, bukan state lokal
        dispatch({ type: "ADD_BLOG", payload: newPost });

        setStep(5); // success

        // ⬅️ redirect ke halaman utama
        setTimeout(() => {
            router.push("/");
        }, 1000); // kasih delay biar user sempet lihat pesan sukses

    };

    return { handleSubmit };
}
