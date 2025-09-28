// reducer untuk handle form data
import {WizardState} from "@/app/features/blogWizards/model/types/blogWizards";

export function wizardReducer(state: WizardState, action: { type: keyof WizardState; payload: string }): WizardState {
    return { ...state, [action.type]: action.payload };
}
