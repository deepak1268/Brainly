import type { ReactElement } from "react"
import { ShareIcon } from "../icons/ShareIcon";
import { DeleteIcon } from "../icons/DeleteIcon";

interface CardProps {
    startingIcon: ReactElement;
    title: string;
}

export const Card = (props: CardProps) => {
    return (
        <div className="bg-white rounded-md shadow-md flex flex-col border border-gray-200 p-3">
            
            <div className="flex justify-between items-center">
                <div className="flex gap-2 font-medium">   
                    {props.startingIcon}
                    {props.title}
                </div>
                <div className="flex gap-2">
                    <ShareIcon />
                    <DeleteIcon />
                </div>
            </div>
        </div>
    )
}