import React, { FC, useState } from "react"
import { Button } from "./Button"
import { IconPencil } from "./icons/Pencil"
import { IconTrash } from "./icons/Trash"
import { ButtonIcon } from "./ButtonIcon"
import { Job } from "@/utils/types"
import { deleteJob } from "@/requests/deleteJob"
import { FormModal } from "./FormModal"
import Image from "next/image"

export const Card: FC<Job> = ({
    id,
    jobTitle,
    companyName,
    industry,
    location,
    remoteType,
    minSalary,
    maxSalary,
    minExperience,
    maxExperience,
    applyType,
    totalEmployee
}) => {

    const [isOpened, setIsOpened] = useState(false)
    const currentJobData = {
        id,
        jobTitle,
        companyName,
        industry,
        location,
        remoteType,
        minSalary,
        maxSalary,
        minExperience,
        maxExperience,
        applyType,
        totalEmployee
    }

    const deleteHandler = async (): Promise<void> => {
        if (id) {
            deleteJob(id)
                .then(() => {
                    /**
                     * May be need to add a toast message on successful deletion
                     */
                })
        }
    }

    return (
        <>
            <div className="flex  flex-col w-[830px] h-70 px-6 py-4 bg-white border border-gray-200 rounded-lg shadow">
                <div className="flex items-center">
                    <Image className="mr-2" src="/netflix.png" width={48} height={48} alt="icon" />
                    <div className="w-full">
                        <div className="flex">
                            <p className="text-2xl">{jobTitle}</p>
                            
                            <div className="ml-auto mt-auto space-x-4">
                                <ButtonIcon 
                                    onClick={() => {
                                        setIsOpened(true)
                                    }}
                                    icon={() => <IconPencil className="w-5 h-5 text-gray-500"/>}
                                />
                                <ButtonIcon 
                                    onClick={deleteHandler}
                                    icon={() => <IconTrash className="w-5 h-5 text-red-500"/>}
                                />
                            </div>
                        </div>
                        <p>{companyName} - {industry}</p>
                    </div>
                </div>
                
                <div className="pl-14">
                    <p className="text-[#646464]">{location} ({remoteType})</p>

                    <div className="my-6">
                        <p>Part-Time (9.00 am - 5.00 pm IST)</p>
                        <p>Experience ({minExperience} - {maxExperience} years)</p>
                        <p>INR (₹) {minSalary} - {maxSalary} / Month</p>
                        <p>{totalEmployee} employee</p>
                    </div>
                    <div className="flex gap-6">
                        {
                            applyType === 'Quick apply' ? (
                                <Button 
                                    width={"118px"} 
                                    height={"40px"} 
                                    colorScheme="primary"
                                    content="Apply Now"
                                    onClick={() => null}
                                />
                            ) : (
                                <Button 
                                    width={"147px"} 
                                    height={"40px"} 
                                    colorScheme="secondary"
                                    content="External Apply"
                                    onClick={() => null}
                                />
                            )
                        }
                    </div>
                </div>
            </div>

            <FormModal
                data={currentJobData}
                isOpened={isOpened}
                onClose={() => setIsOpened(false)}
            />
        </>
    )
}