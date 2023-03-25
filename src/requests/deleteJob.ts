import { Job } from "@/utils/types"
import axios from "axios"

export const deleteJob = async (id: string): Promise<Job | undefined> => {

    const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/${id}`
    
    try {
        const response = await axios.delete(url)
        return response.data as Job
    } catch (error) {
        console.log(error)
    }
    
    return undefined
}