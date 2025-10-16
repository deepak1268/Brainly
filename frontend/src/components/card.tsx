import { ShareIcon } from "../icons/ShareIcon";
import { DeleteIcon } from "../icons/DeleteIcon";
import { Tag } from "./tag";
import { TweetIcon } from "../icons/TweetIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { DocumentIcon } from "../icons/DocumentIcon";
import { LinkIcon } from "../icons/LinkIcon";

interface CardProps {
  title: string;
  type: string;
  tags: string[];
  link: string;
}

export const Card = (props: CardProps) => {
  const IconsStyles: any = {
    // NEED TO FIX THIS ANY TYPE OVER HERE
    tweet: <TweetIcon />,
    video: <YoutubeIcon />,
    document: <DocumentIcon />,
    link: <LinkIcon />,
  };

  return (
    <div className="bg-white rounded-xl shadow-md flex flex-col border border-gray-200 p-4 max-w-86">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 font-medium">
          {IconsStyles[props.type]}
          {props.title}
        </div>
        <div className="flex gap-2">
          <a href={props.link} target="_blank">
            <ShareIcon />
          </a>
          <DeleteIcon />
        </div>
      </div>

      <div className="max-h-[200px] rounded-xl overflow-hidden tweet-scroll-hidden mt-4">
        {props.type === "video" && (
          <iframe
            width="100%"
            height="300px"
            className="video"
            title="Youtube player"
            sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
            src={props.link.replace("watch?v=", "embed/")}
          />
        )}

        {props.type === "tweet" && (
          <blockquote className="twitter-tweet">
            <a href={props.link.replace("x.com", "twitter.com")}></a>
          </blockquote>
        )}
      </div>

      <div className="flex gap-2 mt-4">
        {props.tags.length > 0 &&
          props.tags.map((tag, index) => <Tag key={index} text={tag} />)}
      </div>
    </div>
  );
};
