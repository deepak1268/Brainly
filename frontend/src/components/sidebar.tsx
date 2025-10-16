import brainIcon from "../assets/brain.png"
import { DocumentIcon } from "../icons/DocumentIcon"
import { LinkIcon } from "../icons/LinkIcon"
import { TagIcon } from "../icons/TagIcon"
import { TweetIcon } from "../icons/TweetIcon"
import { YoutubeIcon } from "../icons/YoutubeIcon"
import { SidebarItem } from "./sidebarItem"

export const SideBar = () => {
    return (
        <div className="flex flex-col w-70 border-r border-gray-200 fixed left-0 top-0">
            <div className="flex items-center pl-1 py-2 ">
                <img src={brainIcon} alt=" Brain Icon" className="size-12"/>
                <span className="text-2xl font-bold">Second Brain</span>
            </div>
            <br />
            <SidebarItem startIcon={<TweetIcon />} title="Tweets"/> 
            <SidebarItem startIcon={<YoutubeIcon />} title="Videos"/> 
            <SidebarItem startIcon={<DocumentIcon />} title="Documents"/> 
            <SidebarItem startIcon={<LinkIcon />} title="Links"/> 
            <SidebarItem startIcon={<TagIcon />} title="Tags"/> 
        </div>
    )
}