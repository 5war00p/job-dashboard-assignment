import { FormHeaderProps } from "@/utils/types"
import React, { FC } from "react"

export const FormHeader: FC<FormHeaderProps> = ({ step }) => {
    return (
        <div className="flex">
            <span className="text-xl font-normal leading-7">Create a job</span>
            <span className='ml-auto font-medium leading-6'>Step {step}</span>
        </div>
    )
}