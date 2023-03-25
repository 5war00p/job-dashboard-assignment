import { FC, useState } from "react"
import { FormHeader } from "./FormHeader"
import { InputGroup } from "./InputGroup"
import { RadioGroup } from "./RadioGroup"
import { Button } from "../Button"

export const FormRenderer: FC =  () => {
    const [page, setPage] = useState(1)

    if (page === 2) {
        return (
            <>
                <FormHeader step={2}/>
    
                <div className="mt-6 mb-24 space-y-6">
    
                    <div className="flex gap-6">
    
                        <InputGroup
                            label="Experience"
                            name="min-experience"
                            id="min-expereince"
                            placeholder="Minimum" 
                        />
    
                        <InputGroup
                            label=""
                            name="max-experience"
                            id="max-expereince"
                            placeholder="Maximum" 
                        />
    
                    </div>
    
                    <div className="flex gap-6">
    
                        <InputGroup
                            label="Salary"
                            name="min-salary"
                            id="min-salary"
                            placeholder="Minimum" 
                        />
    
                        <InputGroup
                            label=""
                            name="max-salary"
                            id="max-salary"
                            placeholder="Maximum" 
                        />
    
                    </div>
    
                    <InputGroup
                        label="Total employee"
                        name="empployee-count"
                        id="emp-count"
                        placeholder="ex. 100" 
                    />
    
                    <RadioGroup 
                        label="Apply Method"
                        name="apply-method"
                        values={['Quick apply', 'External apply']}
                    />
    
                </div>

                <div className="float-left">
                    <Button 
                        width="68px"
                        height="40px"
                        content="Back"
                        colorScheme="secondary"
                        onClick={() => setPage(1)}
                    />
                </div>
    
                <div className="float-right">
                    <Button 
                        width="68px"
                        height="40px"
                        content="Save"
                        onClick={() => null}
                    />
                </div>
            </>
        )
    } else {
        return (
            <>
                <FormHeader step={1}/>
    
                <div className="mt-6 mb-[92px] space-y-6">
    
                    <InputGroup
                        label="Job title"
                        name="job-title"
                        id="job"
                        placeholder="ex. UX UI Designer" 
                    />
    
                    <InputGroup
                        label="Company name"
                        name="company-name"
                        id="company"
                        placeholder="ex. Google" 
                    />
    
                    <InputGroup
                        label="Industry"
                        name="industry"
                        id="industry"
                        placeholder="ex. Information Technology" 
                    />
    
                    <div className="flex gap-6">
    
                        <InputGroup
                            label="Location"
                            name="location"
                            id="location"
                            placeholder="ex. Chennai" 
                        />
    
                        <InputGroup
                            label="Remote type"
                            name="remote-type"
                            id="type"
                            placeholder="ex. In-office" 
                        />
    
                    </div>
    
                </div>
    
                <div className="float-right">
                    <Button 
                        width="68px"
                        height="40px"
                        content="Next"
                        onClick={() => setPage(2)}
                    />
                </div>
            </>
        )
    } 
}