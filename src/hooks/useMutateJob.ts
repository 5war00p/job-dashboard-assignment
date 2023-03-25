import { Job } from '@/utils/types'
import { useForm } from 'react-hook-form'

export const useMutateJob = (job: Job) => {
    const formHook = useForm<Job>({
        mode: 'onChange',
        reValidateMode: 'onChange',
        defaultValues: job
    })

    const registry = {
        jobTitle: formHook.register('jobTitle', {
            required: {
                value: true,
                message: 'Job title must not be empty'
            }
        }),
        companyName: formHook.register('companyName', {
            required: {
                value: true,
                message: 'Company name must not be empty'
            }
        }),
        industry: formHook.register('industry', {
            required: {
                value: true,
                message: 'Industry name must not be empty'
            }
        }),
        location: formHook.register('location'),
        remoteType: formHook.register('remoteType'),
        minExperience: formHook.register('minExperience'),
        maxExperience: formHook.register('maxExperience'),
        minSalary: formHook.register('minSalary'),
        maxSalary: formHook.register('maxSalary'),
        totalEmployee: formHook.register('totalEmployee'),
        applyType: formHook.register('applyType', {
            required: {
                value: true,
                message: 'Apply type is required to choose'
            }
        }),
    }

    return { ...formHook, registry}
}