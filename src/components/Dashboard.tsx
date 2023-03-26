import React, { FC, useEffect, useState } from "react";
import { Button } from "./Button";
import { Card } from "./Card";
import { FormModal } from "./FormModal";
import { getAllJobs } from "@/requests/getAllJobs";
import { Job } from "@/utils/types";

export const Dashboard: FC = () => {
    const [jobs, setJobs] = useState<Job[]>([])
    const [isOpened, setIsOpened] = useState(false)
    const [isRefetchedRequested, setIsRefetchRequested] = useState(false)

    useEffect(() => {
        getAllJobs()
            .then((result) => {
                setJobs(result)
                setIsRefetchRequested(false)
            })
    }, [isRefetchedRequested])

    return (
        <>
            <div className="m-14">
                <div className="flex gap-4">
                    <Button 
                        width={"156px"} 
                        height={"40px"} 
                        colorScheme="primary"
                        content="+ Create Job" 
                        onClick={() => setIsOpened(true)}
                    />
                    <Button 
                        width={"156px"} 
                        height={"40px"} 
                        colorScheme="secondary"
                        content="Refetch" 
                        onClick={() => setIsRefetchRequested(true)}
                    />
                </div>
                
                <div className="flex flex-wrap gap-16 mt-6">
                    {
                        jobs.map((job, index) => {
                            return (
                                <Card key={index.toString()} {...job}/>
                            )
                        })
                    }
                </div>
            </div>

            <FormModal 
                isOpened={isOpened}
                onClose={() => setIsOpened(false)}
            />
        </>
    )
}