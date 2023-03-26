import { API_ENDPOINT } from "@/constants/urls"
import { Job } from "@/utils/types"
import axios from "axios"

export const getJob = async (id: string): Promise<Job | undefined> => {

    const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT ?? API_ENDPOINT}/${id}`
    
    try {
        const response = await axios.get(url)
        return response.data as Job
    } catch (error) {
        console.log(error)
    }
    
    return undefined
}