import { InputGroupProps } from "@/utils/types"
import React, { FC, ForwardRefExoticComponent, RefAttributes, forwardRef } from "react"

export const InputGroup: ForwardRefExoticComponent<
    InputGroupProps & RefAttributes<HTMLInputElement>
> = forwardRef<HTMLInputElement, InputGroupProps>(
    ({
        label,
        name,
        id,
        value,
        required = false,
        errorMessage = '',
        placeholder,
        onChange
    }, ref
) => {

    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-900">
                {label}
                {required ? (
                    <span className="text-red-600">*</span>
                ):null}
            </label>
            <div className={`${!label ? 'mt-7' : 'mt-2'}`}>
                <input
                    ref={ref}
                    type="text"
                    name={name}
                    id={id}
                    value={value}
                    placeholder={placeholder}
                    className="block w-full text-sm rounded-[5px] border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#1597E4]"
                    onChange={onChange}
                />
                {required && <p className="text-xs text-red-600">{errorMessage}</p>}
            </div>
        </div>
    )
})

InputGroup.displayName = "InputGroup"