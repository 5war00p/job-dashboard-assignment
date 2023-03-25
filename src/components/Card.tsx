import React from "react"
import { Button } from "./Button"
import { IconPencil } from "./icons/Pencil"
import { IconTrash } from "./icons/Trash"
import { ButtonIcon } from "./ButtonIcon"

export const Card = () => {
    return (
        <div className="flex  flex-col w-[830px] h-70 px-6 py-4 bg-white border border-gray-200 rounded-lg shadow">
            <div className="flex items-center">
                <img className="mr-2" src="/netflix.png" width={48} height={48} />
                <div className="w-full">
                    <div className="flex">
                        <p className="text-2xl">UX UI Designer</p>
                        
                        <div className="ml-auto mt-auto space-x-4">
                            <ButtonIcon 
                                icon={() => <IconPencil className="w-5 h-5 text-gray-500"/>}
                            />
                            <ButtonIcon 
                                icon={() => <IconTrash className="w-5 h-5 text-red-500"/>}
                            />
                        </div>
                    </div>
                    <p>Great Vibes - Information Technology</p>
                </div>
            </div>
            
            <div className="pl-14">
                <p className="text-[#646464]">Chennai, Tamilnadu, India (In-office)</p>

                <div className="my-6">
                    <p>Part-Time (9.00 am - 5.00 pm IST)</p>
                    <p>Experience (1 - 2 years)</p>
                    <p>INR (₹) 30,000 - 50,000 / Month</p>
                    <p>51-200 employees</p>
                </div>
                <div className="flex gap-6">
                    <Button 
                        width={"118px"} 
                        height={"40px"} 
                        colorScheme="primary"
                        content="Apply Now" 
                    />
                    <Button 
                        width={"147px"} 
                        height={"40px"} 
                        colorScheme="secondary"
                        content="External Apply" 
                    />
                </div>
            </div>
        </div>
    )
}