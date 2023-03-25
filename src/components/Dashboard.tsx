import React, { FC, useState } from "react";
import { Button } from "./Button";
import { Card } from "./Card";
import { FormModal } from "./FormModal";

export const Dashboard: FC = () => {

    const [isOpened, setIsOpened] = useState(false)

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
                    <Card />
                </div>
            </div>

            <FormModal 
                isOpened={isOpened}
                onClose={() => setIsOpened(false)}
            />
        </>
    )
}