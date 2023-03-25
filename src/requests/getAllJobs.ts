import { Job } from "@/utils/types"
import axios from "axios"

export const getAllJobs = async (): Promise<Job[]> => {

    const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/`
    
    try {
        const response = await axios.get(url)
        return response.data as Job[]
    } catch (error) {
        console.log(error)
    }
    
    return []
}