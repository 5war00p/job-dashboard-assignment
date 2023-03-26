import { FC, useEffect, useState } from "react"
import { FormHeader } from "./FormHeader"
import { InputGroup } from "./InputGroup"
import { RadioGroup } from "./RadioGroup"
import { Button } from "../Button"
import { Controller } from "react-hook-form"
import { useMutateJob } from "@/hooks/useMutateJob"
import { addJob } from "@/requests/addJob"
import { FormRendereProps } from "@/utils/types"
import { updateJob } from "@/requests/updateJob"
import { FORM_FIELDS, PLACEHOLDERS } from "@/constants/formFields"

export const FormRenderer: FC<FormRendereProps> =  ({ data, onClose }) => {    
    const [step, setStep] = useState(1)

    const formControlHook = useMutateJob(data ?? {
        jobTitle: '',
        companyName: '',
        industry: '',
        location: '',
        remoteType: '',
        minExperience: '',
        maxExperience: '',
        minSalary: '',
        maxSalary: '',
        totalEmployee: '',
        applyType: ''
    })

    const { control, registry, formState: { errors, isValid: isFormValid }, watch, handleSubmit, setFocus } = formControlHook
    const fieldWatcher = watch()

    useEffect(() => {
        if (step === 1) {
            setFocus(FORM_FIELDS.JOB_TITLE)
        } else if (step === 2) {
            setFocus(FORM_FIELDS.MIN_EXPERIENCE)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [step])

    const saveHandler = async (): Promise<void> => {

        if (data && data.id) {
            updateJob(data.id, {...fieldWatcher})
                .then(() => {
                    onClose()
                    /**
                     * May be need to add a toast message on successful updation
                     */
                })
        } else {
            const newJob = !!fieldWatcher.applyType ? {...fieldWatcher, applyType: 'Quick apply'} : {...fieldWatcher}
            addJob(newJob)
                .then(() => {
                    onClose()
                    /**
                     * May be need to add a toast message on successful insertion
                     */
                })
        }
    }

    if (step === 2) {
        return (
            <>
                <FormHeader step={2}/>
    
                <div className="mt-6 mb-[100px] space-y-6">
    
                    <div className="flex gap-6">

                        <Controller 
                            control={control}
                            name={FORM_FIELDS.MIN_EXPERIENCE}
                            render={({ field: { name, onChange }}) => {
                                return (
                                    <InputGroup
                                        {...registry.minExperience}
                                        value={fieldWatcher.minExperience}
                                        label="Experience"
                                        name={name}
                                        id="min-expereince"
                                        placeholder={PLACEHOLDERS.MINIMUM}
                                        onChange={onChange}
                                    />
                                )
                            }}
                        />

                        <Controller 
                            control={control}
                            name={FORM_FIELDS.MAX_EXPERIENCE}
                            render={({ field: { name, onChange }}) => {
                                return (
                                    <InputGroup
                                        {...registry.maxExperience}
                                        value={fieldWatcher.maxExperience}
                                        label=""
                                        name={name}
                                        id="max-expereince"
                                        placeholder={PLACEHOLDERS.MAXIMUM}
                                        onChange={onChange}
                                    />
                                )
                            }}
                        />
    
                    </div>
    
                    <div className="flex gap-6">

                        <Controller 
                            control={control}
                            name={FORM_FIELDS.MIN_SALARY}
                            render={({ field: { name, onChange }}) => {
                                return (
                                    <InputGroup
                                        {...registry.minSalary}
                                        value={fieldWatcher.minSalary}
                                        label="Salary"
                                        name={name}
                                        id="min-salary"
                                        placeholder={PLACEHOLDERS.MINIMUM}
                                        onChange={onChange}
                                    />
                                )
                            }}
                        />

                        <Controller 
                            control={control}
                            name={FORM_FIELDS.MAX_SALARY}
                            render={({ field: { name, onChange }}) => {
                                return (
                                    <InputGroup
                                        {...registry.maxSalary}
                                        value={fieldWatcher.maxSalary}
                                        label=""
                                        name={name}
                                        id="max-salary"
                                        placeholder={PLACEHOLDERS.MAXIMUM} 
                                        onChange={onChange}
                                    />
                                )
                            }}
                        />
    
                    </div>


                    <Controller 
                        control={control}
                        name={FORM_FIELDS.EMP_COUNT}
                        render={({ field: { name, onChange }}) => {
                            return (
                                <InputGroup
                                    {...registry.totalEmployee}
                                    value={fieldWatcher.totalEmployee}
                                    label="Total employee"
                                    name={name}
                                    id="total-employee"
                                    placeholder={PLACEHOLDERS.EMP_COUNT}
                                    onChange={onChange}
                                />
                            )
                         }}
                    />


                    <Controller 
                        control={control}
                        name={FORM_FIELDS.APPLY_TYPE}
                        render={({ field: { name, onChange }}) => {
                            return (
                                <RadioGroup
                                    {...registry.applyType}
                                    label="Apply Method"
                                    name={name}
                                    values={['Quick apply', 'External apply']}
                                    onChange={onChange}
                                />
                            )
                         }}
                    />
    
                </div>

                <div className="float-left">
                    <Button 
                        width="68px"
                        height="40px"
                        content="Back"
                        colorScheme="secondary"
                        onClick={() => setStep(1)}
                    />
                </div>
    
                <div className="float-right">
                    <Button 
                        width="68px"
                        height="40px"
                        content="Save"
                        onClick={handleSubmit(saveHandler)}
                    />
                </div>
            </>
        )
    } else {
        return (
            <>
                <FormHeader step={1}/>
    
                <div className="mt-6 mb-24 space-y-6">

                    <Controller 
                        control={control}
                        name={FORM_FIELDS.JOB_TITLE}
                        render={({ field: { name, onChange }}) => {
                            return (
                                <InputGroup
                                    {...registry.jobTitle}
                                    label="Job title"
                                    name={name}
                                    value={fieldWatcher.jobTitle}
                                    required
                                    id="job-title"
                                    placeholder={PLACEHOLDERS.JOB_TITLE}
                                    errorMessage={errors.jobTitle?.message}
                                    onChange={onChange}
                                />
                            )
                        }}
                    />

                    <Controller 
                        control={control}
                        name={FORM_FIELDS.COMPANY_NAME}
                        render={({ field: { name, onChange }}) => {
                            return (
                                <InputGroup
                                    {...registry.companyName}
                                    label="Company name"
                                    name={name}
                                    value={fieldWatcher.companyName}
                                    required
                                    id="company-name"
                                    placeholder={PLACEHOLDERS.COMPANY_NAME}
                                    errorMessage={errors.companyName?.message}
                                    onChange={onChange}
                                />
                            )
                        }}
                    />
                    
                    <Controller 
                        control={control}
                        name={FORM_FIELDS.INDUSTRY}
                        render={({ field: { name, onChange }}) => {
                            return (
                                <InputGroup
                                    {...registry.industry}
                                    label="Industry"
                                    name={name}
                                    value={fieldWatcher.industry}
                                    required
                                    id="industry"
                                    placeholder={PLACEHOLDERS.INDUSTRY}
                                    errorMessage={errors.industry?.message}
                                    onChange={onChange}
                                />
                            )
                        }}
                    />
    
                    <div className="flex gap-6">
                        
                        <Controller 
                            control={control}
                            name={FORM_FIELDS.LOCATION}
                            render={({ field: { name, onChange }}) => {
                                return (
                                    <InputGroup
                                        {...registry.location}
                                        value={fieldWatcher.location}
                                        label="Location"
                                        name={name}
                                        id="location"
                                        placeholder={PLACEHOLDERS.LOCATION}
                                        onChange={onChange}
                                    />
                                )
                            }}
                        />

                        
                        <Controller 
                            control={control}
                            name={FORM_FIELDS.REMOTE_TYPE}
                            render={({ field: { name, onChange }}) => {
                                return (
                                    <InputGroup
                                        {...registry.remoteType}
                                        value={fieldWatcher.remoteType}
                                        label="Remote type"
                                        name={name}
                                        id="remote-type"
                                        placeholder={PLACEHOLDERS.REMOTE_TYPE}
                                        onChange={onChange}
                                    />
                                )
                            }}
                        />
    
                    </div>
    
                </div>
    
                <div className="float-right">
                    <Button 
                        width="68px"
                        height="40px"
                        content="Next"
                        disabled={!!Object.keys(errors).length || !isFormValid}
                        onClick={() => setStep(2)}
                    />
                </div>
            </>
        )
    } 
}