import { Job } from "@/utils/types"
import axios from "axios"

export const updateJob = async (id: string, job: Job): Promise<Job | undefined> => {

    const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/${id}`
    
    try {
        const response = await axios.put(url, job)
        return response.data as Job
    } catch (error) {
        console.log(error)
    }
    
    return undefined
}