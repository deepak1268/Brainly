// import { useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { InputBox } from "./InputBox";
import { Button } from "./button";

export const CreateContentModal = ({open,onClose} : {open: Boolean,onClose: () => void}) => {

    // const [content,setContent] = useState({
    //     title: "",
    //     link: "",
    //     type: "",
    //     tags: ""
    // })
  return (
    <div>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-lg">
            <div className="flex justify-end cursor-pointer" onClick={onClose}>
              <CrossIcon />
            </div>
            <br />
            <InputBox placeholder="Enter The Title"  />
            <InputBox placeholder="Enter The Link"  />
            <InputBox placeholder="Enter The Link"  />
            <InputBox placeholder="Enter The Tags"></InputBox>
            {/* <div>
              <label className="block mb-2 text-gray-700">Select Type:</label>
              <select
                value={content.type}
                onChange={(e) => setContent((prevVal => (prevVal.type = e.target.value)))}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">-- Select --</option>
                <option value="tweet">Tweet</option>
                <option value="video">Video</option>
                <option value="article">Article</option>
              </select>
            </div> */}
            <br />
            <Button variant="secondary" text="Add Content" fullWidth={true}></Button>
          </div>
        </div>
      )}
    </div>
  );
};
