import { ButtonIconProps } from "@/utils/types";
import React, { FC } from "react";


export const ButtonIcon: FC<ButtonIconProps> = ({
    icon: Icon,
    onClick
}) => {

    return (
        <button onClick={onClick}>
            <Icon />
        </button>
    )
}