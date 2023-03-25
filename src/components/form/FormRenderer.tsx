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

    const { control, registry, formState: { errors }, watch, handleSubmit, setFocus } = formControlHook
    const fieldWatcher = watch()

    useEffect(() => {
        if (step === 1) {
            setFocus('jobTitle')
        } else if (step === 2) {
            setFocus('minExperience')
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
            addJob({...fieldWatcher})
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
                            name="minExperience"
                            render={({ field: { name, onChange }}) => {
                                return (
                                    <InputGroup
                                        {...registry.minExperience}
                                        label="Experience"
                                        name={name}
                                        id="min-expereince"
                                        placeholder="Minimum"
                                        onChange={onChange}
                                    />
                                )
                            }}
                        />

                        <Controller 
                            control={control}
                            name="maxExperience"
                            render={({ field: { name, onChange }}) => {
                                return (
                                    <InputGroup
                                        {...registry.maxExperience}
                                        label=""
                                        name={name}
                                        id="max-expereince"
                                        placeholder="Maximum"
                                        onChange={onChange}
                                    />
                                )
                            }}
                        />
    
                    </div>
    
                    <div className="flex gap-6">

                        <Controller 
                            control={control}
                            name="minSalary"
                            render={({ field: { name, onChange }}) => {
                                return (
                                    <InputGroup
                                        {...registry.minSalary}
                                        label="Salary"
                                        name={name}
                                        id="min-salary"
                                        placeholder="Minimum"
                                        onChange={onChange}
                                    />
                                )
                            }}
                        />

                        <Controller 
                            control={control}
                            name="maxSalary"
                            render={({ field: { name, onChange }}) => {
                                return (
                                    <InputGroup
                                        {...registry.maxSalary}
                                        label=""
                                        name={name}
                                        id="max-salary"
                                        placeholder="Maximum" 
                                        onChange={onChange}
                                    />
                                )
                            }}
                        />
    
                    </div>


                    <Controller 
                        control={control}
                        name="totalEmployee"
                        render={({ field: { name, onChange }}) => {
                            return (
                                <InputGroup
                                    {...registry.totalEmployee}
                                    label="Total employee"
                                    name={name}
                                    id="employee-count"
                                    placeholder="ex. 100"
                                    onChange={onChange}
                                />
                            )
                         }}
                    />


                    <Controller 
                        control={control}
                        name="applyType"
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
                        name="jobTitle"
                        render={({ field: { name, onChange }}) => {
                            return (
                                <InputGroup
                                    {...registry.jobTitle}
                                    label="Job title"
                                    name={name}
                                    required
                                    id="job-title"
                                    placeholder="ex. UX UI Designer" 
                                    errorMessage={errors.jobTitle?.message}
                                    onChange={onChange}
                                />
                            )
                        }}
                    />

                    <Controller 
                        control={control}
                        name="companyName"
                        render={({ field: { name, onChange }}) => {
                            return (
                                <InputGroup
                                    {...registry.companyName}
                                    label="Company name"
                                    name={name}
                                    required
                                    id="company-name"
                                    placeholder="ex. Google"
                                    errorMessage={errors.companyName?.message}
                                    onChange={onChange}
                                />
                            )
                        }}
                    />
                    
                    <Controller 
                        control={control}
                        name="industry"
                        render={({ field: { name, onChange }}) => {
                            return (
                                <InputGroup
                                    {...registry.industry}
                                    label="Industry"
                                    name={name}
                                    required
                                    id="industry"
                                    placeholder="ex. Information Technology"
                                    errorMessage={errors.industry?.message}
                                    onChange={onChange}
                                />
                            )
                        }}
                    />
    
                    <div className="flex gap-6">
                        
                        <Controller 
                            control={control}
                            name="location"
                            render={({ field: { name, onChange }}) => {
                                return (
                                    <InputGroup
                                        {...registry.location}
                                        label="Location"
                                        name={name}
                                        id="location"
                                        placeholder="ex. Chennai"
                                        onChange={onChange}
                                    />
                                )
                            }}
                        />

                        
                        <Controller 
                            control={control}
                            name="remoteType"
                            render={({ field: { name, onChange }}) => {
                                return (
                                    <InputGroup
                                        {...registry.remoteType}
                                        label="Remote type"
                                        name={name}
                                        id="remote-type"
                                        placeholder="ex. In-office" 
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
                        onClick={() => setStep(2)}
                    />
                </div>
            </>
        )
    } 
}