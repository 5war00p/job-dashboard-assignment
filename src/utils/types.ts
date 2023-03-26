import { ChangeEvent, ReactElement, MouseEvent } from "react"

export interface IconProps {
    className: string
}

export interface ButtonProps {
    width: string
    height: string
    content: string
    colorScheme?: 'primary' | 'secondary'
    onClick: (e: MouseEvent<HTMLButtonElement>) => unknown
}

export interface ButtonIconProps {
    icon: () => ReactElement
    onClick: (e: MouseEvent<HTMLButtonElement>) => unknown
}

export interface FormHeaderProps {
    step: number
}

export interface FormModalProps {
    data?: Job
    isOpened: boolean
    onClose: () => void
}

export interface FormRendereProps {
    data?: Job
    onClose: () => void
}

export interface InputGroupProps {
    label: string
    id: string
    name: string
    required?: boolean
    errorMessage?: string
    placeholder: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export interface RadioGroupProps {
    label: string
    name: string
    values: string[]
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export interface Job {
    id?: string
    jobTitle: string
    companyName: string
    industry: string
    location: string
    remoteType: string
    minExperience: string
    maxExperience: string
    minSalary: string
    maxSalary: string
    totalEmployee: string
    applyType: string
}