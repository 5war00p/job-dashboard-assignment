import { RadioGroupProps } from "@/utils/types"
import React, { FC, ForwardRefExoticComponent, RefAttributes, forwardRef } from "react"

export const RadioGroup: ForwardRefExoticComponent<
    RadioGroupProps & RefAttributes<HTMLInputElement>
> = forwardRef<HTMLInputElement, RadioGroupProps>(
    ({
        name,
        label,
        values,
        onChange
    }, ref
) => {

    return (
        <div>
            <label className="block text-sm font-medium text-gray-900">{label}</label>
            <fieldset className="mt-3">
                <legend className="sr-only">{label}</legend>
                <div className="flex space-x-4">
                    {
                        values.map((value, index) => {
                            const id = value.toLowerCase().replace(' ', '-')
                            return (
                                <div key={index.toString()} className="flex items-center">
                                    <input
                                        ref={ref}
                                        type="radio"
                                        name={name}
                                        id={id}
                                        className="h-4 w-4 border-gray-300 text-[#1597E4] focus:ring-0 focus:ring-offset-0"
                                        onChange={onChange}
                                    />
                                    <label htmlFor={id} className="ml-3 block text-xs text-[#7A7A7A] leading-6">
                                        {value}
                                    </label>
                                </div>
                            )
                        })
                    }
                </div>
            </fieldset>
        </div>
    )
})

RadioGroup.displayName = "RadioGroup"