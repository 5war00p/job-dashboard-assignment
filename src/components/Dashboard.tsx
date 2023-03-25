import React, { FC, useEffect, useState } from "react";
import { Button } from "./Button";
import { Card } from "./Card";
import { FormModal } from "./FormModal";
import { addJob } from "@/requests/addJob";
import { getAllJobs } from "@/requests/getAllJobs";
import { Job } from "@/utils/types";

export const Dashboard: FC = () => {
    const [jobs, setJobs] = useState<Job[]>([])
    const [isOpened, setIsOpened] = useState(false)

    useEffect(() => {
        getAllJobs()
            .then((result) => {
                setJobs(result)
            })
    }, [])

    return (
        <>
            <div className="m-14">
                <div>
                    <Button 
                        width={"156px"} 
                        height={"40px"} 
                        colorScheme="primary"
                        content="+ Create Job" 
                        onClick={() => setIsOpened(true)}
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