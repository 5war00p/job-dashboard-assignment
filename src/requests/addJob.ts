import { API_ENDPOINT } from "@/constants/urls"
import { Job } from "@/utils/types"
import axios from "axios"

export const addJob = async (job: Job): Promise<Job | undefined> => {

    const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT ?? API_ENDPOINT}/`
    
    try {
        const response = await axios.post(url, job)
        return response.data as Job
    } catch (error) {
        console.log(error)
    }
    
    return undefined
}