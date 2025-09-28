import React, {useReducer, useState} from 'react'
import {wizardReducer} from "@/app/features/blogWizards/model/blogWizards";
import Stepper from "@/app/_components/Stepper/Stepper";
import {Step1Metadata} from "@/app/features/blogWizards/view/_components/step-1";
import {WizardNavigation} from "@/app/features/blogWizards/view/_components/navigation";
import {Step2SummaryCategory} from "@/app/features/blogWizards/view/_components/Step-2";
import {Step3Content} from "@/app/features/blogWizards/view/_components/Step-3";
import {Step4Review} from "@/app/features/blogWizards/view/_components/step-4-review";
import {useBlogWizard} from "@/app/features/blogWizards/_hooks/useWizards";

const WizardsBlog = () => {

    const {
        posts,
        step,
        state,
        errors,
        handleChange,
        handleNext,
        handleBack,
        handleSubmit,
    } = useBlogWizard();

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow">
            <Stepper step={step} />

            <hr className={'mt-2 mb-2'}/>

            {step === 1 && (
                <Step1Metadata
                    title={state.title}
                    author={state.author}
                    onChange={handleChange}
                    errors={errors}
                />
            )}

            {step === 2 && (
                <Step2SummaryCategory
                    summary={state.summary}
                    category={state.category}
                    onChange={handleChange}
                    errors={errors}
                />
            )}

            {step === 3 && (
                <Step3Content content={state.content} onChange={handleChange} errors={errors} />
            )}

            {step === 4 && (
                <Step4Review
                    title={state.title}
                    author={state.author}
                    summary={state.summary}
                    category={state.category}
                    content={state.content}
                />
            )}

            {step === 5 && (
                <div className="text-center py-10">
                    <h2 className="text-2xl font-bold text-green-600">✅ Blog berhasil dibuat!</h2>
                    <p className="mt-2 text-gray-600">Post sudah ditambahkan ke daftar blog.</p>
                </div>
            )}

            {/* Navigation */}
            <WizardNavigation
                step={step}
                onBack={handleBack}
                onNext={handleNext}
                onSubmit={handleSubmit}
            />


        </div>
    )
}
export default WizardsBlog
