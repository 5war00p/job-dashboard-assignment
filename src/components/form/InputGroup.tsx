import { InputGroupProps } from "@/utils/types"
import React, { FC } from "react"

export const InputGroup: FC<InputGroupProps> = ({
    label,
    name,
    id,
    placeholder,
}) => {
    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-900">
                {label}
            </label>
            <div className={`${!label ? 'mt-7' : 'mt-2'}`}>
                <input 
                    type="text"
                    name={name}
                    id={id}
                    placeholder={placeholder}
                    className="block w-full text-sm rounded-[5px] border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#1597E4]"
                />
            </div>
        </div>
    )
}