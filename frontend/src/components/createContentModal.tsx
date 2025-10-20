import { useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { InputBox } from "./InputBox";
import { Button } from "./button";
import axios from "axios";
import { BACKEND_URL } from "../config";

enum ContentType {
  Youtube = "video",
  Twitter = "tweet",
  Document = "document",
  Link = "link",
}

export const CreateContentModal = ({ onClose }: { onClose: () => void }) => {
  const [content, setContent] = useState({
    title: "",
    link: "",
    tags: "",
  });
  const [type, setType] = useState(ContentType.Youtube);
  const [loading, setLoading] = useState(false);

  async function submitContent() {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const tags = content.tags.trim().split(" ");
      console.log(type);
      await axios.post(
        `${BACKEND_URL}/api/v1/content`,
        {
          title: content.title,
          link: content.link,
          tags,
          type,
        },
        {
          headers: {
            token,
          },
        }
      );
      location.reload();
      alert("Content Added");
    } catch (err) {
      console.error(err);
      alert("Some error occured");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-xl">
        <div className="flex justify-end cursor-pointer" onClick={onClose}>
          <CrossIcon />
        </div>

        <div className="flex flex-col gap-4">
          <InputBox
            text="Title"
            value={content.title}
            onChange={(e) => setContent({ ...content, title: e.target.value })}
            placeholder="Enter The Title"
          />
          <InputBox
            text="Link"
            value={content.link}
            onChange={(e) => setContent({ ...content, link: e.target.value })}
            placeholder="Enter The Link"
          />
          <InputBox
            text="Tags"
            value={content.tags}
            onChange={(e) => setContent({ ...content, tags: e.target.value })}
            placeholder="Ex:- #Productivity #Growth"
          ></InputBox>

          <div>
            <div className="font-medium text-lg mb-2">Type</div>
            <div className="flex justify-between">
              <Button
                text="Youtube"
                variant={type === ContentType.Youtube ? "primary" : "secondary"}
                onClick={() => setType(ContentType.Youtube)}
              ></Button>
              <Button
                text="Twitter"
                variant={type === ContentType.Twitter ? "primary" : "secondary"}
                onClick={() => setType(ContentType.Twitter)}
              ></Button>
              <Button
                text="Document"
                variant={
                  type === ContentType.Document ? "primary" : "secondary"
                }
                onClick={() => setType(ContentType.Document)}
              ></Button>
              <Button
                text="Any Other Link"
                variant={type === ContentType.Link ? "primary" : "secondary"}
                onClick={() => setType(ContentType.Link)}
              ></Button>
            </div>
          </div>
        </div>

        <br />

        <Button
          disabled={loading}
          variant="secondary"
          text="Add Content"
          fullWidth={true}
          onClick={submitContent}
        />
      </div>
    </div>
  );
};
