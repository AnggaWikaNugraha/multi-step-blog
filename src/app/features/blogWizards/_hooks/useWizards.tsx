import { useReducer, useState } from "react";
import { wizardReducer } from "@/app/features/blogWizards/model/blogWizards";
import { useBlogSubmit } from "./useBlogSubmit";
import {validateStep} from "@/app/features/blogWizards/_hooks/useValidateStep";

export function useBlogWizard() {
    const [posts, setPosts] = useState<Blog[]>([]);

    const [step, setStep] = useState(1);

    const [state, dispatch] = useReducer(wizardReducer, {
        title: "",
        author: "",
        summary: "",
        category: "",
        content: "",
    });

    const [errors, setErrors] = useState<Errors>({});

    const handleChange = (field: keyof WizardState, value: string) => {
        dispatch({ type: field, payload: value });
        if (errors[field]) {
            setErrors((e) => ({ ...e, [field]: "" }));
        }
    };

    const handleNext = () => {
        const stepErr = validateStep(state, step);
        if (Object.values(stepErr).some(Boolean)) {
            setErrors(stepErr);
            return;
        }
        setErrors({});
        setStep((s) => Math.min(s + 1, 4));
    };

    const handleBack = () => setStep((s) => Math.max(s - 1, 1));

    const { handleSubmit } = useBlogSubmit({ state, setErrors, setPosts, setStep });

    return {
        posts,
        step,
        state,
        errors,
        handleChange,
        handleNext,
        handleBack,
        handleSubmit,
    };
}
