import { FORM_FIELDS, REQUIRED_FIELD_MESSAGES } from '@/constants/formFields'
import { Job } from '@/utils/types'
import { useForm } from 'react-hook-form'

export const useMutateJob = (job: Job) => {
    const formHook = useForm<Job>({
        mode: 'onChange',
        reValidateMode: 'onChange',
        defaultValues: job
    })

    const registry = {
        jobTitle: formHook.register(FORM_FIELDS.JOB_TITLE, {
            required: {
                value: true,
                message: REQUIRED_FIELD_MESSAGES.JOB_TITLE
            }
        }),
        companyName: formHook.register(FORM_FIELDS.COMPANY_NAME, {
            required: {
                value: true,
                message: REQUIRED_FIELD_MESSAGES.COMPANY_NAME
            }
        }),
        industry: formHook.register(FORM_FIELDS.INDUSTRY, {
            required: {
                value: true,
                message: REQUIRED_FIELD_MESSAGES.INDUSTRY
            }
        }),
        location: formHook.register(FORM_FIELDS.LOCATION),
        remoteType: formHook.register(FORM_FIELDS.REMOTE_TYPE),
        minExperience: formHook.register(FORM_FIELDS.MIN_EXPERIENCE),
        maxExperience: formHook.register(FORM_FIELDS.MAX_EXPERIENCE),
        minSalary: formHook.register(FORM_FIELDS.MIN_SALARY),
        maxSalary: formHook.register(FORM_FIELDS.MAX_SALARY),
        totalEmployee: formHook.register(FORM_FIELDS.EMP_COUNT),
        applyType: formHook.register(FORM_FIELDS.APPLY_TYPE)
    }

    return { ...formHook, registry}
}