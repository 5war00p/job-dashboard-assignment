import { ReactElement } from "react"

export interface IconProps {
    className: string
}

export interface ButtonProps {
    width: string
    height: string
    content: string
    colorScheme?: 'primary' | 'secondary'
    onClick: () => void
}

export interface ButtonIconProps {
    icon: () => ReactElement
}

export interface FormHeaderProps {
    step: number
}

export interface FormModalProps {
    isOpened: boolean
    onClose: () => void
}

export interface InputGroupProps {
    label: string
    id: string
    name: string
    placeholder: string
}

export interface RadioGroupProps {
    label: string
    name: string
    values: string[]
}