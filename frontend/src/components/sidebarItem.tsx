import type { ReactElement } from "react";

interface SidebarItemProps{
    title: string;
    startIcon: ReactElement;
}


export const SidebarItem = (props: SidebarItemProps) => {
    return <div className="h-14 flex gap-3 items-center pl-6 cursor-pointer hover:bg-gray-200 rounded">
        {props.startIcon}
        <span className="text-lg">{props.title}</span>
    </div>
}