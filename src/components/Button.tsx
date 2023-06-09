import React, { FC } from "react";
import { ButtonProps } from "@/utils/types";


export const Button: FC<ButtonProps> = ({
    width,
    height,
    content,
    disabled = false,
    colorScheme = 'primary',
    onClick
}) => {

    return (
        <button
            /**
             * Due to limitation with Arbitrary values cannot be computed from dynamic values
             * Using style attribute to set dynamic values for height and width
             * 
             * Refer: https://v2.tailwindcss.com/docs/just-in-time-mode#arbitrary-value-support
             */
            style={{ width, height }}
            onClick={onClick}
            className={`
                rounded-md font-medium outline-none 
                ${colorScheme === 'primary' ? 'text-white bg-[#1597E4]' : 'text-[#1597E4] border border-[#1597E4]'}
                ${disabled ? ' bg-gray-500' : ''}`
            }
            disabled={disabled}
            >
            {content}
        </button>
    )

}